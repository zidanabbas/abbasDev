import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <Link
                to={"/"}
                className="block py-6 text-lg font-bold text-primary"
              >
                <span className="hover:border-b-2 hover:border-b-primary">
                  Zidane Abbas
                </span>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <Navbar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
