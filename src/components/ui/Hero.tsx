import React from "react";

function Hero() {
  return (
    <section className="bg-black">
      <div className="flex items-baseline justify-center pt-[7rem]">
        <h2 className="text-white border border-white text-center px-3 py-3 rounded-full">
          See What's New | <span className="text-sky-300">AI Tool</span>
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-14">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="capitalize text-sky-400 text-3xl font-extrabold sm:text-5xl">
            Documents & diagrams
            <strong className="font-extrabold text-white sm:block">
              {" "}
              for engineering teams{" "}
            </strong>
          </h1>

          <p className="mt-10 sm:text-xl/relaxed text-slate-300">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="bg-gradient-to-r from-slate-300 to-slate-600 text-white block w-full rounded px-12 py-3 text-sm font-medium  shadow hover:text-black-700 focus:outline-none focus:ring sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
