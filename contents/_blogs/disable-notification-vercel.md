---
title: "Disable notification in vercel"
excerpt: "Do you use Vercel? I am a user of Vercel. When I deploy, I receive a notification in my email every time."
coverImage: "/assets/blog/debounce.png"
date: "2023-02-09T01:52:35.911Z"
author:
  name: "Suraji"
  picture: "/assets/blog/authors/suraji.webp"
ogImage:
  url: "/assets/blog/debounce.png"
---

Do you use Vercel? I am a user of Vercel. When I deploy, I receive a notification in my email every time. this causes a lot of spam in my email. I have found a solution to this problem, 
You can create a file called vercel.json in your project:

```javascript
{
    "github": {
        "silent": true
    }

    // if you use gitlab
    "gitlab": {
        "silent": true
    }
}

```
Thank you for reading. I hope it was useful.
