/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-[3rem] rounded-lg shadow md:px-6 md:py-8 dark:text-white">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <h3 className="text-center font-semibold text-[1.5rem]">Art Collection</h3>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span className="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://phucleon.blogspot.com/" target="_blank" className="hover:underline">
            leonhoccode
          </a>
          . All Rights Reserved.
        </span>
        <p className="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">For Studying!</p>
      </footer>
    </>
  );
};

export default Footer;
