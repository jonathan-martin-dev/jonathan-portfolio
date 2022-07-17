import React from "react"
import Icons from "./Icons"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="grid grid-flow-row">
      <div className="grid grid-flow-row mx-auto pt-5">
        <Icons />
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
