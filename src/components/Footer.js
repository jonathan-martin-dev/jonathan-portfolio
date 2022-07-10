import React from "react"
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="grid grid-flow-row">
      <div className="grid grid-flow-row mx-auto pt-5">
        <div className="flex flex-row space-x-2 justify-center">
          <div className="react-icons mx-auto text-center">
            <a
              href="https://github.com/jonathan-martin-dev"
              title="Github"
              rel="noreferrer"
              target="_blank"
            >
              <TiSocialGithub size={60} />
            </a>
          </div>
          <div className="react-icons mx-auto text-center">
            <a
              href="https://www.linkedin.com/in/jonathanrmartinez/"
              title="LinkedIn"
              rel="noreferrer"
              target="_blank"
            >
              <TiSocialLinkedin size={60} />
            </a>
          </div>
          <div className="react-icons mx-auto text-centers">
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
      <div className="mx-auto py-1">
        <div className="text-4xl">Jonathan Martinez</div>
      </div>
      <div className="mx-auto">
        <div className="py-2 font">&copy;{year}</div>
      </div>
    </footer>
  )
}

export default Footer
