import React from "react";

export default function Input({ label, type, register, name, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="uppercase">{label}</label>
      <input type={type} {...register(name)} {...props} className='py-2 border-b border-gray-400 bg-transparent' />
    </div>
  );
}
