import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="rounded-lg bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
        {text}
      </button>
    </>
  );
};

export default Button;
