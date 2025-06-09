import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaLinkedinIn,
  FaTumblr,
} from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm px-4 md:px-12 py-8">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* App Section + Socials */}
        <div>
          <h3 className="font-semibold mb-2">Download Jaibros App</h3>
          <div className="flex gap-2 mb-4">
            <img
              src="/footer/GooglePlay.webp"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="/footer/AppStore.webp"
              alt="App Store"
              className="h-10"
            />
          </div>

          <h3 className="font-semibold mb-2">Follow Us With</h3>
          <div className="flex gap-3 text-lg mb-4">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaWhatsapp />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaTumblr />
          </div>

          <p>
            Want Help?{" "}
            <a href="#" className="underline text-white">
              Click Here
            </a>{" "}
            To Chat With Us On
          </p>
          <p className="mt-1">Operating Hours: 10:00AM To 07:00PM Monday To Saturday</p>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Our Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Sell With Jaibros</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="mb-3">Sign up for exclusive offers, original stories, events and more.</p>
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow bg-transparent text-black outline-none placeholder:text-gray-500"
            />
            <IoIosArrowForward className="text-black text-lg" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700" />

      {/* Payment Methods */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <img src="/footer/01.avif" alt="Payment" className="h-6" />
        <img src="/footer/02.webp" alt="Payment" className="h-6" />
        <img src="/footer/03.avif" alt="Payment" className="h-6" />
        <img src="/footer/01.avif" alt="Payment" className="h-6" />
        <img src="/footer/02.webp" alt="Payment" className="h-6" />
        <img src="/footer/03.avif" alt="Payment" className="h-6" />
        <img src="/footer/01.avif" alt="Payment" className="h-6" />
        <img src="/footer/02.webp" alt="Payment" className="h-6" />
      </div>

      {/* Bottom Legal */}
      <div className="text-center text-xs text-gray-400">
        <p>© 2025 Jaibros. Powered By Hikedeal Digital Media Private Limited</p>
        <p>Jaibros is a Registered Trademark owned by HAKUNA MATATA RETAIL PRIVATE LIMITED 2009–2025</p>
      </div>
    </footer>
  );
};

export default Footer;
