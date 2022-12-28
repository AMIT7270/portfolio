import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <br />

        <p className="text-xl">
          I am a Web Developer,I am from Lucknow(uttar pradesh).I had Completed
          My B.tech(cse) from Lovely Professional University in 2022. I love
          Music and Cricket , I have a fasination for learning new Skills, so
          that I am always learning new tech things.
        </p>
        <p className="text-xl mt-20">
          Extremely motivated to constantly develop my skills and grow
          professionally. Skilled in designing developing and testing multiple
          web based application incorporating a range of technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
