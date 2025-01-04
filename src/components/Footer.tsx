import React from "react";
import FooterContactForm from "./FooterContactForm";

export default function Footer() {
  return (
    <footer className=" w-full bg-black  mt-12">
      <section className="">
        <FooterContactForm />
      </section>
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">
        <div className="flex justify-center items-center gap-x-2 text-sm text-light">
          <em>
            <div className="text-lg italic font-semibold text-accentDarkPrimary">
              PAKISTAN&apos;S
            </div>
          </em>
          <em>
            <div className="text-lg italic font-semibold text-light">
              NO. 1 TECH BLOG
            </div>
          </em>
        </div>

        <div>
          <p className="text-xs text-light">
            © 2025 <span className="text-light font-bold">&nbsp;BLOG</span>
            <span className="text-accentDarkPrimary font-bold">
              TIMES&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
