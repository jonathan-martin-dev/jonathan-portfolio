import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const WorkHistory = () => {
  return (
    <>
      <div className="grid grid-flow-row" id="work-history">
        <div className="container p-20 pb-0 mx-auto">
          <h2 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center">
            Work History
          </h2>
        </div>
      </div>
      <div className="denmat grid grid-flow-row container mx-auto">
        <div className="title p-20 pt-0 pb-0">
          <h3 className="text-4xl text-center lg:text-left pt-5">
            DenMat Holdings, LLC
          </h3>
          <p>
            Den-Mat Holdings, LLC, has been the leader of dental prodcuts sold
            directly to dental professionals for over 40 years. At DenMat I was
            responsible for wireframing and developing the UI of DenMat.com,
            working with marketing to create custom landing pages,
            OralProcare.com, and FindaDentist.com, and the from-the-ground up
            construction of Lumineers.com and Snap-On-Smile.com. I worked
            closely with the design team, management, and product managers
            within the marketing department to deliver on their needs.
          </p>
        </div>
        <div>
          <h4 className="ml-15 text-3xl text-center underline underline-offset-2">
            Projects
          </h4>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:gap-y-8 md:gap-y-8 deck">
          {/* DenMat.com */}
          <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              href="https://www.denmat.com"
              class="w-full block h-full"
              rel="norefferer nofollow"
            >
              <StaticImage
                alt="blog photo"
                src="../images/denmat-capture.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">DenMat.com</p>
                <p>
                  DenMat.com is an E-Commmerce site built on the Magento
                  platform. Working with executives and management, we built
                  this website in place of our original E-commerce store and saw
                  an increase of B2B sales by 40%.
                </p>
                <p>
                  <a
                    href="https://www.denmat.com"
                    rel="norefferer nofollow"
                    target="_blank"
                    className="text-red-500"
                  >
                    Visit Site
                  </a>
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex flex-row justify-between text-sm">
                    <p className="font-bold">
                      Technologies: HTML, CSS, JavaScript, jQuery, Bootstrap 4,
                      Magento
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* OralProcare.com */}
          <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              href="https://www.oralprocare.com"
              class="w-full block h-full"
              rel="norefferer nofollow"
            >
              <StaticImage
                alt="blog photo"
                src="../images/oralprocare-capture.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">
                  OralProCare.com
                </p>
                <p>
                  OralProCare.com is an E-Commmerce site built on the Magento
                  platform. As a result of the success of DenMat.com,
                  OralProCare.com was built as a D2C solution for the company's
                  power toothbrush line, hygiene and whitening products.
                </p>
                <p>
                  <a
                    href="https://www.oralprocare.com"
                    rel="norefferer nofollow"
                    target="_blank"
                    className="text-red-500"
                  >
                    Visit Site
                  </a>
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex flex-row justify-between text-sm">
                    <p className="font-bold">
                      Technologies: HTML, CSS, JavaScript, jQuery, Bootstrap 4,
                      Magento
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* Lumineers.com */}
          <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" class="w-full block h-full">
              <StaticImage
                alt="blog photo"
                src="../images/lumineers-capture.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">Lumineers.com</p>
                {/* <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Technologies: HTML, CSS, JavaScript, jQuery, Bootstrap 4,
                  Magento
                </p> */}
                <p>
                  Lumineers.com is a marketing site built on the Gatsby.js
                  platform. This project replaced the legacy site and
                  simultaneously acted as a portal to our Find A Dentist
                  platform through Bullseye Locations. The site was tied to the
                  Lumineers social channels.
                </p>
                <a
                  href="https://www.lumineers.com"
                  rel="norefferer nofollow"
                  target="_blank"
                  className="text-red-500"
                >
                  Visit Site
                </a>
                <div className="flex items-center mt-4">
                  <div className="flex flex-row justify-between text-sm">
                    <p className="font-bold">
                      Technologies: HTML, SCSS, JavaScript, Gatsby.js, React.js,
                      Bootstrap 5
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkHistory
