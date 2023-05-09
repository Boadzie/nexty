import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-lg p-14 grid grid-cols-1 gap-4 lg:grid-cols-4 border-t-4  bottom-0 border-slate-500 bg-[#000a3d] text-white">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="w-full pr-44 input text-slate-500 input-bordered"
              />
              <button className="absolute top-0 right-0 font-bold text-white bg-red-600 rounded-l-none btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
