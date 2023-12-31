import React from "react";
import NavbarList from "./NavbarList";

const Navbar = () => {
  return (
    <>
      <nav
        id="nav-menu"
        className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-[#112e40] py-5 shadow-lg dark:bg-dark dark:shadow-slate-400 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
      >
        <ul className="block lg:flex">
          <NavbarList to={"/"} text={"Home"} />
          <NavbarList to={"/about"} text={"About"} />
          <NavbarList to={"/project"} text={"Project"} />
          <NavbarList to={"/portofolio"} text={"Portofolio"} />
          <NavbarList to={"/client"} text={"Client"} />
          <li className="mt-3 lg:mt-0 flex items-center pl-8">
            <div className="flex">
              <span className="mr-2 text-sm text-slate-500">light</span>
              <input type="checkbox" className="hidden" id="dark-toggle" />
              <label for="dark-toggle">
                <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                  <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-out"></div>
                </div>
              </label>
              <span className="ml-2 text-sm text-slate-500">dark</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
