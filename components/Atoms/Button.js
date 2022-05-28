import React from "react";

const Button = ({ link, title }) => {
  return (
    <a
      href={link}
      className="bg-gray-100 capitalize hover:text-white hover:bg-green-500 py-2 px-5 w-full rounded-lg text-center"
    >
      {title}
    </a>
  );
};
export default Button;
