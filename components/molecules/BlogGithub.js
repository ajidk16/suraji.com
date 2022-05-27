import React from "react";

export default function BlogGithub({ content }) {
  return (
    <div
      className="blog-content-body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
