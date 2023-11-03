import React from "react";
import { Link } from "react-router-dom";

const NavbarList = ({ to, text }) => {
  return (
    <>
      <li className="group">
        <Link
          to={to}
          className="mx-8 flex py-2 text-base text-primary group-hover:text-secondary dark:text-white"
        >
          {text}
        </Link>
      </li>
    </>
  );
};

export default NavbarList;
