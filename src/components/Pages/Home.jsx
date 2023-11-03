import React from "react";
import Header from "../elements/Headers/Header";
import Button from "../elements/Button/Button";
import Card from "../elements/Cards/Card";
import Form from "../elements/Form/Form";
import Footer from "../elements/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen min-w-full bg-third pt-64 pb-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hi, Everyone. I'm
                <span className="mt-1 block text-4xl font-bold text-secondary dark:text-white lg:text-5xl">
                  Zidane Abbas
                </span>
              </h1>
              <h2 className="text mb-5 text-lg font-semibold text-primary lg:text-2xl">
                I'm Frontend Developer |
                <span className="font-bold text-secondary dark:text-white">
                  Web Developer
                </span>
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-secondary dark:text-white">
                My Name is Abbas, I make amazing things.
              </p>
              <Button text="Download CV" />
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="pt-24 pb-36 bg-secondary">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-third">
                About Me.
              </h4>
              <h2 className="mb-5 max-w-md text-3xl font-bold text-primary lg:text-4xl">
                Hi, Introduce My Self.
              </h2>
              <p className="max-w-xl text-base font-medium text-paragraph dark:text-secondary lg:text-lg">
                I am a student from a university in Indonesia. <br />
                <br />I have a very ambitious nature, thirst for something new,
                and enjoy working in a team. My daily activities are exploring,
                designing and coding. and also I like animals like cats and
                dogs, because they can make me happy every day when I'm tired.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-third lg-pt-10 lg:text-3xl">
                Social Media
              </h3>
              <p className="mb-6 text-base font-medium text-paragraph dark:text-secondary lg:text-lg">
                Find me on!
              </p>
              <div className="flex items-center">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/zidaneabbs"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-pink-600 hover:border-primary hover:bg-primary"
                >
                  <svg
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/zdnabbs"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-blue-600 hover:border-primary hover:bg-primary"
                >
                  <svg
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* Github */}
                <a
                  href="https://github.com/zidanabbas"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-purple-700 hover:border-primary hover:bg-primary"
                >
                  <svg
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section className="pt-24 pb-36 bg-third">
        <div className="container">
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

      {/* Clients  */}
      <section className="pt-24 pb-36 bg-secondary">
        <div className=" w-full px-4" data-aos="fade-down-right">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-paragraph dark:text-secondary">
              Client's
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-third dark:text-primary sm:text-4xl lg:text-5xl">
              Cooperate
            </h2>
            <p className="text-medium font-medium text-paragraph dark:text-secondary md:text-lg">
              Some of the companies I work with.
            </p>
          </div>
        </div>
        <div className="w-full px-4" data-aos="flip-up">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="https://www.tokopedia.com/"
              target="_blank"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="./src/img/clients/tokopedia.svg" alt="Tokopedia" />
            </a>
            <a
              href="https://www.traveloka.com/en-id/"
              target="_blank"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="./src/img/clients/Traveloka.svg" alt="Traveloka" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="pt-24 pb-36 bg-third">
        <div className="container">
          <div className="w-full px-4" data-aos="zoom-in-up">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-white">
                Blog
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-white dark:text-primary sm:text-4xl lg:text-5xl">
                My Recent Blog
              </h2>
              <p className="text-medium font-medium text-secondary md:text-lg">
                Here you will find some interesting writings that I have ever
                made.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3" data-aos="flip-left">
              <div className="mb-10 overflow-hidden rounded-xl bg-slate-200 shadow-lg">
                <img
                  src="./src/img/photography/1.JPG"
                  alt=""
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary"
                    >
                      Photography
                    </a>
                  </h3>
                  <p className="mb-6 text-base font-medium text-dark">
                    This is my first work in the field of photography.
                  </p>
                  <a
                    href="#"
                    className="rounded-lg bg-third dark:bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section id="contact" className="pt-24 pb-36  dark:bg-smoothDark">
        <div className="container">
          <div className="w-full px-4" data-aos="zoom-in-up">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-paragraph dark:text-secondary">
                Contact
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-third dark:text-primary sm:text-4xl lg:text-5xl">
                Say Hello
              </h2>
              <p className="text-medium font-medium text-paragraph dark:text-secondary md:text-lg">
                email-[at]-gmail-[dot]-com.
              </p>
            </div>
          </div>
          <Form
            name={"name"}
            email={"email"}
            emailCaption={"E-mail tidak valid!"}
            message={"message"}
            textButton={"Send Message"}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
