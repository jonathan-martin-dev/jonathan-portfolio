import React from "react"
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"

const AboutMe = () => {
  return (
    <div className="bg-gray-100 grid grid-flow-row" id="about">
      <div className="container p-20 mx-auto about-me">
        <h2 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center">
          About Me
        </h2>
        <p>
          My name is Jonathan Martinez and I am a Front-End Engineer with over 3
          years of experience. I've worked on both E-Commerce and Marketing
          teams to provide better buying experiences for customers. I have
          delivered projects that have provided a growth in overall online sales
          and in some cases, created new opportunities for the business.
        </p>
        <p>
          To me, the best work environments are collaborative ones. I love being
          on teams where we can share ideas and learn from each other. I'm
          passionate about learning new technologies and every single project I
          have worked on has taught me something new. Each challenge I've faced
          has created a new set of problem solving skills. I am constantly
          growing in this field and it's why I love to code.
          <span role="img" aria-label="dog">
            💻
          </span>
        </p>
        <p></p>
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
