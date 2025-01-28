"use client";
import Image from "next/image";
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaCopyright } from "react-icons/fa";
import { useState } from "react";


export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  const sections = {
    company: {
      title: "Company",
      links: [
        { text: "About us", url: "/about" },
        { text: "Team", url: "/team" },
        { text: "Careers", url: "/careers" },
        { text: "Blog", url: "/blog" }
      ]
    },
    contact: {
      title: "Contact",
      links: [
        { text: "Help & Support", url: "/support" },
        { text: "Partner with us", url: "/partner" },
        { text: "Ride with us", url: "/ride" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Terms & Conditions", url: "/terms" },
        { text: "Refund & Cancellation", url: "/refund" },
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Cookie Policy", url: "/cookies" }
      ]
    }
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" }
  ];

  const renderFooterSection = (section) => (
    <div className="flex flex-col" key={section.title}>
      <h2 className="text-2xl font-bold leading-tight text-white">
        {section.title}
      </h2>
      <nav className="flex flex-col self-start mt-10 text-lg leading-none text-neutral-100">
        {section.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`hover:text-amber-400 transition-colors ${index > 0 ? "mt-4" : ""}`}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <footer className="flex flex-col justify-center w-full px-16 bg-neutral-800" role="contentinfo">
      <div className="flex flex-col justify-center items-center  max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1518px]">
          <img
            loading="lazy"
            src="/images/footer-banner.jpg"
            alt="Footer decorative banner"
            className="object-contain w-full aspect-[1000] max-md:max-w-full"
          />
          
          <div className="flex flex-wrap gap-10 justify-between items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-start min-w-[240px] w-[607px] max-md:max-w-full">
              {Object.values(sections).map(renderFooterSection)}
            </div>

            <div className="flex flex-col min-w-[240px] w-[483px] max-md:max-w-full">
              <div className="flex flex-col self-start text-neutral-100">
                <h2 className="text-lg font-bold leading-tight uppercase">
                  Follow Us
                </h2>
                <div className="flex gap-4 items-start mt-10 text-2xl leading-none">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="hover:text-amber-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
                <h2 className="text-lg font-bold leading-snug text-zinc-400 max-md:max-w-full">
                  Receive exclusive offers in your mailbox
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-10 w-full max-md:max-w-full">
                  <div className="flex flex-1 shrink gap-2.5 items-center pt-2 pb-2 pl-4 h-full leading-snug rounded-lg basis-8 bg-neutral-700 min-w-[240px]">
                    <FaEnvelope className="text-2xl text-zinc-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent text-lg text-zinc-400 w-full focus:outline-none"
                      placeholder="Enter Your email"
                      aria-label="Email subscription"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="gap-2.5 self-stretch px-6 py-5 text-lg font-bold leading-none text-center text-white whitespace-nowrap rounded-lg shadow-md w-[133px] max-md:px-5 bg-amber-400 hover:bg-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-16 w-full min-h-[53px] max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
              <div className="flex gap-2.5 items-start min-w-[240px] text-neutral-100">
                <div className="flex gap-2.5 items-center">
                  <span className="self-stretch my-auto text-base leading-tight">
                    All rights Reserved
                  </span>
                  <FaCopyright className="self-stretch my-auto text-base" />
                </div>
                <div className="gap-2 text-base font-bold leading-tight">
                  Your Company, {new Date().getFullYear()}
                </div>
              </div>
              <div className="flex gap-2 items-start text-base leading-tight">
                <div className="text-amber-400">
                  <span>Made with</span>{" "}
                  <span className="text-sm font-black text-amber-400">♥</span>{" "}
                  <span>by</span>
                </div>
                <a
                  href="https://themewagon.com"
                  className="gap-1 font-bold whitespace-nowrap text-neutral-100 hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Themewagon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>)
}
