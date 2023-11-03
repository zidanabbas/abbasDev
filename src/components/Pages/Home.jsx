import React from "react";
// import Header from "../elements/Header";
import Header from "../Header";
const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen min-w-full bg-third pt-64 pb-36">
        <div className="container border">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hi, Everyone. I'm
                <span className="mt-1 block text-4xl font-bold text-secondary dark:text-white lg:text-5xl">
                  Zidane Abbas
                </span>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
