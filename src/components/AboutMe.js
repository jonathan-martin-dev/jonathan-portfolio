import React from "react"
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

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
          <div className="react-icons">
            <a
              href="https://github.com/jonathan-martin-dev"
              title="Github"
              rel="noreferrer"
              target="_blank"
            >
              <TiSocialGithub size={60} />
            </a>
          </div>
          <div className="react-icons">
            <a
              href="https://www.linkedin.com/in/jonathanrmartinez/"
              title="LinkedIn"
              rel="noreferrer"
              target="_blank"
            >
              <TiSocialLinkedin size={60} />
            </a>
          </div>
          <div className="react-icons">
            <a
              href="mailto:jonathanmdev@gmail.com"
              title="Email"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineMail size={60} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
