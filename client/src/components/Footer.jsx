/* eslint-disable react/no-unescaped-entities */
import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function FooterCom() {
  return (
    <Footer container className="border-t-8 border-gray-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="gird w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-black via-gray-500 to-white-200 rounded-lg text-white">
                Vishwajeet's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm: mt-4 sm: grid-cols-r xl:flex lg:flex md:flex sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://vishwajeet.club"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="https://vishwajeet.club"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vishwajeet's blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Vishwajeet-11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Vishwajeet-11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
