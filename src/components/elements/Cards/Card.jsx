import React from "react";

const Card = ({ src, alt, title, text, href, textLink }) => {
  return (
    <>
      <div className="overflow-hidden rounded-md bg-slate-200 shadow-md">
        <img src={src} alt={alt} className="w-full" />
        <h3 className="mx-3 mt-5 mb-3 text-xl font-semibold text-dark">
          {title}
        </h3>
        <p className="mx-3 pb-5 text-base font-medium text-dark">
          {text}

          <a href={href} className="hover:text-primary mx-1">
            {textLink}
          </a>
        </p>
      </div>
    </>
  );
};

export default Card;
