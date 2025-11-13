import React from "react";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const Footer = () => {
  return (
    <footer
      className="relative h-[100vh] w-full text-white bg-cover text bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/Background/footerbg.png')" }}
    >
      <motion.div
        className="w-full px-8 md:px-20 pb-10 absolute bottom-0 text-2xl"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Top Section */}
        <div className="flex gap-20 justify-center">
          {/* Column 1 */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold mb-3 text-2xl">Amul India</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">Home</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">About Us</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">Our Legacy</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">CSR Initiatives</li>
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold mb-3 text-2xl">Our Products</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">Milk & Ghee</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">Butter & Cheese</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">Ice Creams</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">Chocolates</li>
              <li className="hover:text-[#ffb3b3] cursor-pointer text-xl">Beverages</li>
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 ">
            <h3 className="font-semibold text-xl">Stay Updated</h3>
            <p className="text-xl md:text-base">
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
          </motion.div>
        </div>

        <div className="border-t border-white/40 mt-10 pt-5"></div>

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-white/90"
          variants={fadeUp}
        >
          <p>© {new Date().getFullYear()} | Amul India. All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3 md:mt-0 text-xl">
            {[FaYoutube, FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-[#ffb3b3] cursor-pointer"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          <a
            href="#"
            className="text-md mt-3 md:mt-0 hover:text-[#ffb3b3] transition-all"
          >
            Redesigned by: Abhishek Raj Lakhera
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
