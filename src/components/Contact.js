import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 m-2">Contact Us</h1>
      <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="Name"></input>
        <input type="text" className="border border-black p-2 m-2" placeholder="Message"></input>
        <button
          type="submit"
          className="border border-black rounded-lg bg-pink-100 m-2 p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
