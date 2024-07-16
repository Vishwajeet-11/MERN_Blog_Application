/* eslint-disable react/no-unescaped-entities */
import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text:white text-4xl"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-black via-gray-500 to-white-200 rounded-lg text-white">
                Vishwajeet's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5">
              Do aliqua ad voluptate duis commodo laborum ex est cillum do esse
              ex deserunt.
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div>
                <Label value="your email" />
                <TextInput type="text" placeholder="yourname@mail.com" id="email" />
              </div>
              <div>
                <Label value="your password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              <Button
                style={{ background: "black", color: "white" }}
                type="submit"
              >
                SignUp
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <span>Have an account?</span>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
    </>
  );
}

export default SignUp;
