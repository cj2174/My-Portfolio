import React from "react";
import myPhoto from "../assets/img/my-photo.jpg";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-3xl text-center mb-6">
        I'm YunSeo, a passionate web developer with experience in React,
        Tailwind CSS, and other modern web technologies. I love solving problems
        and creating interactive user experiences.
      </p>
      <img
        src={myPhoto}
        alt="About Me"
        className="rounded-full w-48 h-48 mb-4 border-4 border-yellow-300 shadow-lg"
      />
    </section>
  );
};

export default About;
