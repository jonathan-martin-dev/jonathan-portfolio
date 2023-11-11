import React from "react"
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"
import { BsFileTextFill } from "react-icons/bs"

const Icons = () => {
  const size = 60

  return (
    <div className="flex flex-row space-x-6 justify-center">
      <div className="react-icons">
        <a
          href="https://github.com/jonathan-martin-dev"
          title="Github"
          rel="noreferrer"
          target="_blank"
        >
          <TiSocialGithub size={size} />
        </a>
      </div>
      <div className="react-icons">
        <a
          href="https://www.linkedin.com/in/jonathanrmartinez/"
          title="LinkedIn"
          rel="noreferrer"
          target="_blank"
        >
          <TiSocialLinkedin size={size} />
        </a>
      </div>
      <div className="react-icons">
        <a
          href="mailto:jonathanmdev@gmail.com"
          title="Email"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineMail size={size} />
        </a>
      </div>
      {/* <div className="react-icons">
        <a
          href=""
          title="Resume"
          rel="noreferrer"
          target="_blank"
        >
          <BsFileTextFill size={size} />
        </a>
      </div> */}
    </div>
  )
}

export default Icons
