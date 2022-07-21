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
        <div className="title pt-0 pb-0 p-20">
          <h3 className="text-4xl text-center lg:text-left pt-5">
            DenMat Holdings, LLC
          </h3>
          <p>
            Den-Mat Holdings, LLC, has been the leader of dental products sold
            directly to dental professionals for over 40 years. At DenMat I was
            responsible for wireframing and developing the UI of DenMat.com,
            working with marketing to create custom landing pages for various
            products, OralProcare.com, and the from-the-ground up construction
            of Lumineers.com, SnapOnSmile.com, and DDSLocator.com. I worked
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
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              title="DenMat Website"
              href="https://www.denmat.com"
              className="w-full block h-full"
              rel="norefferer nofollow"
            >
              <StaticImage
                alt="DenMat Website"
                src="../images/denmat-capture-t.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">DenMat.com</p>
                <p>
                  DenMat.com is an E-Commerce site built on the Magento
                  platform. Working with executives and management, we built
                  this website in place of our original E-Commerce store and saw
                  an increase of B2B sales by 40%.
                </p>
                <p>
                  <p className="text-red-500">Visit Site</p>
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
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              title="Oral ProCare Website"
              href="https://www.oralprocare.com"
              className="w-full block h-full"
              rel="norefferer nofollow"
            >
              <StaticImage
                alt="Oral ProCare Website"
                src="../images/oralprocare-capture-t.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">
                  OralProCare.com
                </p>
                <p>
                  OralProCare.com is an E-Commerce site built on the Magento
                  platform. As a result of the success of DenMat.com,
                  OralProCare.com was built as a D2C solution for the company's
                  power toothbrush line, hygiene and whitening products.
                </p>
                <p>
                  <p className="text-red-500">Visit Site</p>
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
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              href="https://www.lumineers.com"
              title="Lumineers Website"
              rel="norefferer nofollow"
              className="w-full block h-full"
            >
              <StaticImage
                alt="Lumineers Website"
                src="../images/lumineers-capture-t.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">Lumineers.com</p>
                <p>
                  Lumineers.com is a marketing site built on the GatsbyJS
                  platform. This project replaced the legacy site and
                  simultaneously acted as a portal to our DDS Locator platform
                  through Bullseye Locations. The site was tied to the Lumineers
                  social channels.
                </p>
                <p className="text-red-500">Visit Site</p>
                <div className="flex items-center mt-4">
                  <div className="flex flex-row justify-between text-sm">
                    <p className="font-bold">
                      Technologies: HTML, Sass, JavaScript, GatsbyJS, React.js,
                      Bootstrap 5
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Snap-On-Smile.com */}
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              title="Snap-On Smile Website"
              href="https://www.snaponsmile.com/"
              className="w-full block h-full"
              rel="norefferer nofollow"
            >
              <StaticImage
                alt="Snap-On Smile Website"
                src="../images/snaponsmile-capture-t.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">
                  SnapOnSmile.com
                </p>
                <p>
                  SnapOnSmile.com is a marketing site built on the GatsbyJS
                  platform. This project replaced the legacy site and
                  simultaneously acted as a portal to our DDS Locator platform
                  through Bullseye Locations. The site was tied to the Snap-On
                  Smile social channels.
                </p>
                <p>
                  <p className="text-red-500">Visit Site</p>
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex flex-row justify-between text-sm">
                    <p className="font-bold">
                      Technologies: HTML, Sass, JavaScript, GatsbyJS, React.js,
                      Bootstrap 5
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* DDSLocator.com */}
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              title="DDS Locator Website"
              href="https://www.ddslocator.com"
              className="w-full block h-full"
              rel="norefferer nofollow"
            >
              <StaticImage
                alt="DDS Locator Website"
                src="../images/ddslocator-capture-t.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">DDSLocator.com</p>
                <p>
                  DDSLocator.com is a utility site built on the GatsbyJS
                  platform. It allowed for patients to find a dentist and to let
                  dentists know if they signed up for DDS Locator that they
                  could get more leads. Hundreds of dentists have signed up for
                  this program.
                </p>
                <p>
                  <p className="text-red-500">Visit Site</p>
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex flex-row justify-between text-sm">
                    <p className="font-bold">
                      Technologies: HTML, Sass, JavaScript, GatsbyJS, React.js,
                      Bootstrap 5
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="denmat grid grid-flow-row container mx-auto">
        <div className="title p-20 pt-0 pb-0">
          <h3 className="text-4xl text-center lg:text-left pt-20">
            Glidewell Dental
          </h3>
          <p>
            Glidewell Dental is the world's largest Dental Laboratory and
            producer of restorative services. Glidewell Dental has been in
            business for over 50 years and is at the forefront of dental
            technology. At Glidewell Dental I was a Junior Software Engineer on
            the E-Commerce Team. I worked on GlidewellDirect.com in an
            Agile/Scrum enviornment. I worked closely with the User Experience
            Team to help deliver changes needed to the UI.
          </p>
        </div>
        <div>
          <h4 className="ml-15 text-3xl text-center underline underline-offset-2">
            Projects
          </h4>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:gap-y-8 md:gap-y-8 deck">
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a
              title="Glidewell Direct Website"
              href="https://www.glidewelldirect.com/"
              className="w-full block h-full"
              rel="norefferer nofollow"
            >
              <StaticImage
                alt="Glidewell Direct Website"
                src="../images/glidewell-direct-capture-t.png"
                className="max-h-40 w-full object-cover"
                placeholder="tracedSVG"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-red-500 text-md font-bold">
                  GlidewellDirect.com
                </p>
                <p>
                  GlidewellDirect.com is an E-Commerce site built on the Shopify
                  platform. Glidewell Direct is a B2B website that sells
                  directly to dentists. The products range from dental implants
                  to continued education courses for dentists.
                </p>
                <p>
                  <p className="text-red-500">Visit Site</p>
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex flex-row justify-between text-sm">
                    <p className="font-bold">
                      Technologies: HTML, Sass, JavaScript, jQuery, Shopify,
                      Liquid, Bootstrap 3, React.js
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
