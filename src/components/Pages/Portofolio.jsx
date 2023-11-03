import React from "react";
import Card from "../elements/Cards/Card";
import Header from "../elements/Headers/Header";

const Portofolio = () => {
  return (
    <>
      <Header />
      <section className="pt-40 pb-36 bg-third">
        <div className="container border">
          <div className="w-full px-4" data-aos="zoom-in-up">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-white dark:text-secondary">
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-white dark:text-primary sm:text-4xl lg:text-5xl">
                My Latest Featured Projects
              </h2>
              <p className="text-medium font-medium text-secondary md:text-lg">
                The last few projects I've ever made.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2" data-aos="flip-left">
              {/* Card */}
              <Card
                src={"../src/assets/images/portofolio/landing-page.png"}
                alt={"Landing Page"}
                title={"Landing Page"}
                text={
                  "This is a mobile landing page product design mockup I made with"
                }
                href={"https://www.figma.com/"}
                textLink={"Figma"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
