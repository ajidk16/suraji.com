---
title: "Building Personal Wiki on Next.js using mdbook"
date: "2022-04-12T15:12:14.051Z"
image: "/images/personal-wiki.png"
tags: "next.js, mdbook, wiki"
published: true
coverImage: '/assets/blog/hello-world/cover.jpg'
author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

> For the last couple of week I have been moving all my notes and bookmark to this blog. Several week's ago I created [cheatsheet](/cheatsheets) page. And it was working good as I expected. There is also a note that it's not following the same format as the cheatsheet.

```javascript
const generatePrime = max => {
  let sieve = [2,3,5,7,11,13,17,19,23,29,31,37];
  const isPrimeFromSieve = num => {
    var max = Math.ceil(Math.sqrt(num));
    for (let i = 0; i < sieve.length; i++) {
      if (num % sieve[i] === 0) return false;
      else if (max < sieve[i]) return true;
    }
    return true;
  }
  let current = sieve[sieve.length - 1] + 2;
  while (current <= max) {
    if (isPrimeFromSieve(current)) sieve.push(current);
    current += 2;
  }
  return sieve
}

//EXAMPLE
//generate prime number from 1 to 100
console.log(generatePrime(100))
```

- George Washington
- John Adams
- Thomas Jefferson

I was planning to create another page for that as well. But that will take some time, and I think we can use a tool to speed up the building of these wiki pages.

## mdbook

After some research I found [mdbook](https://github.com/rust-lang/mdBook) quite easy to use. So I decided to give it a try.

So let's create some mdbook project.
```bash
mdbook init wikis
```

And then add some index to `SUMMARY.md`

```md
# Summary

[Index](./index.md)
- [Rust](./rust.md)
- [Golang](./go.md)
- [JavaScript](./js.md)
- [Shell](./shell.md)
- [cheatsheet](./cheatsheet.md)
```

Then setup some config.
```yaml
[book]
authors = ["ahmadrosid"]
language = "en"
multilingual = false
src = "src"
title = "Wiki - Ahmad Rosid"

[build]
build-dir = "../public/wiki"
use-default-preprocessors = false

[preprocessor.index]

[preprocessor.links]

[output.html]
additional-css = ["custom.css"]

[output.html.search]
limit-results = 15
```


> Now I can build all that files to html output. But there's some problem we need to fix.

So, all of my content in this blog is static html file. We should have no problem right because mdbook also generating html static file too. We can just move the build dir to `public/wiki`.

Well there's some problem with this approach. So mdbook generating html file with relative path when linking the assets like link to css and some page.

```html
<link rel="icon" href="favicon.svg">
<link rel="shortcut icon" href="favicon.png">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/general.css">
<link rel="stylesheet" href="css/chrome.css">
<link rel="stylesheet" href="css/print.css" media="print">

<!-- Fonts -->
<link rel="stylesheet" href="FontAwesome/css/font-awesome.css">
<link rel="stylesheet" href="fonts/fonts.css">

<!-- Highlight.js Stylesheets -->
<link rel="stylesheet" href="highlight.css">
<link rel="stylesheet" href="tomorrow-night.css">
<link rel="stylesheet" href="ayu-highlight.css">
```

## Fix links

So to fix this issue I create simple cli application with Rust to replace string for all generated html file from mdbook.

```rust
fn perform_replace(path: &Path, from: &str, to: &str) {
    println!("Replacing file {}", path.display());
    let source = fs::read_to_string(&path).expect(
        &format!("Can not read file {}", &path.display())
    );
    let result = source.replace(from, to).to_string();
    let mut f = fs::OpenOptions::new()
        .write(true)
        .truncate(true)
        .open(&path)
        .expect("Failed to rewrite file");
    f.write_all(result.as_bytes()).unwrap();
    f.flush().unwrap();
}
```

You can see full source code [here](https://github.com/ahmadrosid/rep-cli). Or you also can install using cargo.
```bash
cargo install rep-cli
```

So now, we can run this cli to replace all the wrong links.
```bash
rep -i public/wiki/ -f 'link rel="stylesheet" href="' -t 'link rel="stylesheet" href="/wiki/' -e html
```

So with this command we can replace the link from :
```html
<link rel="stylesheet" href="css/variables.css">
```

to

```html
<link rel="stylesheet" href="/wiki/css/variables.css">
```

This is kinda a hacky way for now, but I have try and I did not break anything. So here is some text replace I do to fix all the wrong link.
```bash
rep -i public/wiki/ -f 'link rel="stylesheet" href="' -t 'link rel="stylesheet" href="/wiki/' -e html
rep -i public/wiki/ -f '<script src="' -t '<script src="/wiki/' -e html
rep -i public/wiki/ -f '<a rel="next" href="' -t '<a rel="next" href="/wiki/' -e html
rep -i public/wiki/ -f '<a href="' -t '<a href="/wiki/' -e html
rep -i public/wiki/ -f '<a href="/wiki/https' -t '<a href="https' -e html
rep -i public/wiki/ -f '../../' -t '' -e html
rep -i public/wiki/ -f '/wiki/./' -t '/wiki/' -e html
```

So that's all, hopefully you got the inspiration and start your own personal wiki. You can see the result here.

<https://www.ahmadrosid.com/wiki>
