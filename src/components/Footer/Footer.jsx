import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative h-[100vh] w-full text-white bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{ backgroundImage: "url('/assets/Background/footerbg.png')" }} // <-- use your actual bg image here
    >
      {/* Main Footer Content */}
      <div className="w-full px-8 md:px-20  pb-10 absolute bottom-0">
        <div className="flex gap-20 justify-center">
          {/* 🧈 Column 1 — Company Info */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Amul India</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-[#ffb3b3] cursor-pointer">Home</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer">About Us</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer">Our Legacy</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer">
                CSR Initiatives
              </li>
            </ul>
          </div>

          {/* 🥛 Column 2 — Product Links */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Our Products</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-[#ffb3b3] cursor-pointer">Milk & Ghee</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer">Butter & Cheese</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer">Ice Creams</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer">Chocolates</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer">Beverages</li>
            </ul>
          </div>

          {/* 📨 Column 3 — Newsletter */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-sm md:text-base">
              Subscribe for Amul’s latest updates and offers.
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="enter your email"
                className="px-4 py-2 rounded-l-full text-gray-700 w-full focus:outline-none"
              />
              <button className="bg-[#ED1E26] hover:bg-[#b91319] text-white font-semibold px-5 py-2 rounded-r-full transition-all">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 mt-10 pt-5"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/90">
          <p>© {new Date().getFullYear()} | Amul India. All Rights Reserved.</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3 md:mt-0 text-xl">
            <a href="#" className="hover:text-[#ffb3b3] transition-all">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#ffb3b3] transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#ffb3b3] transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#ffb3b3] transition-all">
              <FaFacebookF />
            </a>
          </div>

          <a
            href="#"
            className=" text-md mt-3 md:mt-0 hover:text-[#ffb3b3] transition-all"
          >
            Redesigned by: Abhishek Raj Lakhera
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
