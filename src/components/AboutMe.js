import React from "react"
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"
const AboutMe = () => {
  return (
    <div className="bg-gray-100 mx-autogrid grid-flow-row" id="about">
      <div className="container p-20 mx-auto">
        <h2 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center">
          About Me
        </h2>
        <p>
          My name is Jonathan Martinez and I am a Front-End Engineer with 3
          years of experience that is passionate about coding, coffee, and
          photography.
        </p>
        <p>
          I have worked with e-commerce and marketing teams to help build and
          create great customer experiences for people.
        </p>
        <p>
          I have experience building projects in JavaScript(ES6+), React.js,
          Gatby.js, jQuery, Liquid, HTML, and CSS.
        </p>
        <div className="flex flex-row space-x-6 justify-center">
          <div>
            <TiSocialGithub size={60} />
          </div>
          <div>
            <TiSocialLinkedin size={60} />
          </div>
          <div>
            <AiOutlineMail size={60} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
