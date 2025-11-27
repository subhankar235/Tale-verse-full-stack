import React from "react";
import taaged from "../assets/tagged.png";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-12 pb-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-200 pb-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={taaged}
              alt="QuickBlog Logo"
              className="w-10 h-10 object-contain rounded-md"
            />
            <h2 className="text-xl font-bold text-gray-900">QuickBlog</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            “Empowering your words with AI creativity.”
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Best Sellers</a></li>
            <li><a href="#" className="hover:text-blue-600">Offers & Deals</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Need Help?</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Delivery Information</a></li>
            <li><a href="#" className="hover:text-blue-600">Return & Refund Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Payment Methods</a></li>
            <li><a href="#" className="hover:text-blue-600">Track Your Order</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"><FaInstagram /> Instagram</li>
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"><FaTwitter /> Twitter</li>
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"><FaFacebookF /> Facebook</li>
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"><FaYoutube /> YouTube</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} QuickBlog GreatStack – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
