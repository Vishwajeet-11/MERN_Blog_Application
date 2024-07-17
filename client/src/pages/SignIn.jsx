/* eslint-disable react/no-unescaped-entities */
import { Alert, Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return setErrorMessage("All fields are mandatory!");
    }
    setLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message || "Sign up failed");
      } else {
        setErrorMessage("");
        // handle successful sign-up (e.g., redirect or display a success message)
      }

      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

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
              You can Sign In with your username and password
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Your username" />
                <TextInput
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="*********"
                  id="password"
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              <Button
                style={{ background: "black", color: "white" }}
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Don't Have an account?</span>
              <Link to="/sign-up" className="text-blue-500">
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    Have an ac. div fix pending!           <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
