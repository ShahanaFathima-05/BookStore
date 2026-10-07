import React from "react";
import { FaArrowRight, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <footer className="w-full bg-amber-900 text-white px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ABOUT US */}
        <div>
          <h4 className="font-bold text-md mb-5">ABOUT US</h4>

          <p className="text-justify text-lg leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Porro qui quo eos esse. Delectus provident quas quibusdam.
            Perspiciatis, esse hic recusandae eum, dolore delectus ea
            error labore, eius cum inventore.
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="font-bold text-md mb-5">NEWSLETTER</h4>

          <p className="text-lg mb-4">
            Stay Updated with our latest trends
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-white text-gray-700 px-4 py-3 w-full outline-none"
            />

            <button className="bg-orange-500 px-5 py-3">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="font-bold text-md mb-5">FOLLOW US</h4>

          <p className="text-lg mb-4">
            Let us be social
          </p>

          <div className="flex gap-5 text-2xl">
            <FaInstagram />
            <FaXTwitter />
            <FaFacebook />
            <CiLinkedin />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;