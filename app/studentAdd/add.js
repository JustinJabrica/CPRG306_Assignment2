"use client";

// 'use client' directive ensures this component runs on the client side

import { useState } from "react";

// export const revalidate = 10

const clearReqMsgAndInputs = () => {};

export default function Add() {
  //state to store response messages and form validation feedback
  const [state, setState] = useState("");

  //clears the request message if it's not empty
  const clearReqMsg = () => {
    if (state.message != "") {
      setState({ message: "" });
    }
  };
  //handles form submission and sends data to the API
  const FormAction = async (formData) => {
    const res = await fetch("http://localhost:3000/api?a=add&q=students", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setState(data); //updates state with API response

    //sets message color based on API response
    if (data.message === "Saved!") {
      data["msg_color"] = " text-green-600";
    } else {
      data["msg_color"] = " text-red-600";
    }
  };
  //styling for input fields and button
  let inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  let buttonStyle =
    "text-white bg-rose-800 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800";
  return (
    <>
      <div>
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 md:text-3xl lg:text-3xl dark:text-white">
          Add Student
        </h1>
      </div>
      Student Details
      <form action={FormAction}>
        <div id="reqMsg" className={`font-medium ${state.msg_color}`}>
          {state.message} ‎{" "}
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              First name
            </label>
            <input
              onChange={() => {
                clearReqMsg();
              }}
              type="text"
              name="fn"
              className={inputStyle}
              placeholder="John"
              minLength="3"
              maxLength="30"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Last name
            </label>
            <input
              onChange={() => {
                clearReqMsg();
              }}
              type="text"
              name="ln"
              className={inputStyle}
              placeholder="Doe"
              minLength="3"
              maxLength="30"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of Birth
            </label>
            <input
              onChange={() => {
                clearReqMsg();
              }}
              type="text"
              name="dob"
              className={inputStyle}
              placeholder="2021-12-31"
              pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Grade
            </label>
            <input
              onChange={() => {
                clearReqMsg();
              }}
              type="number"
              min="0"
              max="100"
              name="grd"
              className={inputStyle}
              placeholder="100"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-3">
          <div></div>
          <button type="submit" className={buttonStyle}>
            Submit
          </button>
          <div></div>
        </div>
        <div className="mt-20">
          <p>
            <strong>This is intentional: </strong>
            <br />
            For names, length of 11 ~ 30 will pass input format check, but will
            fail on the server side.
            <br />
          </p>
        </div>
      </form>
    </>
  );
}
