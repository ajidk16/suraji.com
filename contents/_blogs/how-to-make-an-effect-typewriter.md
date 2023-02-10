---
title: "How to make an effect typewriter"
excerpt: "As a result of this effect, a single character can be added to a document in a short period of time while it is being edited by the software."
coverImage: "/assets/blog/debounce.png"
date: "2023-02-10T12:08:48.797Z"
author:
  name: "suraji"
  picture: "/assets/blog/authors/suraji.webp"
ogImage:
  url: "/assets/blog/debounce.png"
---

When I first opened chatgpt, I was interested in seeing typewriters, and then I became curious about typewriters and searched for various sources. Using Javascript, I try to implement this. and then

## What is typewriter
A typewriter is a mechanical device that is used to type text on a screen. Several keypad buttons have letters, numbers, and symbols on their surfaces, which are pressed to write characters on a screen that moves beneath the rollers.

## Typewriters: why use them
By making visitors focus on a single character for a designated period of time, this effect can enhance user engagement with web content and the page.

## Example
![typing animation](/assets/blog/typing-animation.gif)

## code
Here's an example of how you can create a typewriter effect in React:

1. Create a state to store the current text to be displayed on the screen:

```javascript
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);
```

2. Create an variable content & speed to store the texts that you want to display one by one:

```javascript
  let content = 'please visit suraji.my.id'
  let speed = 100
```

3. Use the useEffect hook to handle the animation:

```javascript
  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, [content.length, speed]);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [content, index]);
```

4. Use the state in your component's render method to display the current text:

```javascript
return <div>{displayedContent}</div>;
```

This code will display the texts one by one with a typing effect, with a delay of 100ms pause between each text. You can adjust the delay and pause times to suit your needs.

## Conclusion
By making visitors focus on a single character for a designated period of time, this effect can enhance user engagement with web content and the page.