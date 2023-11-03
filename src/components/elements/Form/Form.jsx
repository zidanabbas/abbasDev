import React from "react";

const Form = ({ name, email, emailCaption, message, textButton }) => {
  return (
    <>
      <form action="https://formspree.io/f/mknlbgyn" method="post">
        <div class="w-full lg:mx-auto lg:w-2/3" data-aos="zoom-in-left">
          <div class="mb-8 w-full px-4">
            <label
              for="name"
              class="text-base font-bold text-third dark:text-primary"
            >
              {name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name..."
              class="w-full rounded-md bg-slate-300 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div class="mb-8 w-full px-4">
            <label
              for="email"
              class="text-base font-bold text-third dark:text-primary"
            >
              <span class="after:ml-0.5 after:text-red-600 after:content-['*']">
                {email}
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your E-mail..."
              class="peer w-full rounded-md bg-slate-300 p-3 text-dark invalid:text-red-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary invalid:focus:border-red-700 invalid:focus:ring-red-700"
            />
            <p class="invisible m-1 text-sm text-red-600 peer-invalid:visible">
              {emailCaption}
            </p>
          </div>
          <div class="mb-8 w-full px-4">
            <label
              for="Message"
              class="text-base font-bold text-third dark:text-primary"
            >
              {message}
            </label>
            <textarea
              type="text"
              id="Message"
              name="message"
              placeholder="Please leave a message here..."
              class="h-32 w-full rounded-md bg-slate-300 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            ></textarea>
          </div>
          <div class="w-full px-4">
            <button
              name="submit"
              class="w-full rounded-full bg-third dark:bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
            >
              {textButton}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
