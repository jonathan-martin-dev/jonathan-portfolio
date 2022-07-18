import React from "react"
import Icons from "./Icons"

const AboutMe = () => {
  return (
    <div className="bg-gray-100 grid grid-flow-row" id="about">
      <div className="container p-20 mx-auto about-me">
        <h2 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center">
          About Me
        </h2>
        <p>
          Hi! I'm Jonathan Martinez, a Front-End Engineer based in the Greater
          Los Angeles area with over 3 years of experience. I've worked on both
          E-Commerce and Marketing teams to provide better buying experiences
          for customers. I have delivered projects that have provided a growth
          in overall online sales and in some cases, created new opportunities
          for the business.
        </p>
        <p>
          To me, the best work environments are collaborative ones. I love being
          on teams where we can share ideas and learn from each other. I'm
          passionate about learning new technologies and every single project I
          have worked on has taught me something new. Each challenge I've faced
          has created a new set of problem solving skills. I am constantly
          growing in this field and it's why I love to code.
          <span role="img" aria-label="Heart">
            ❤️
          </span>
          <span role="img" aria-label="Coding">
            👨‍💻
          </span>
        </p>
        <Icons />
      </div>
    </div>
  )
}

export default AboutMe
