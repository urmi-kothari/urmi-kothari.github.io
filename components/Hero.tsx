"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          socialRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.1"
        );

      gsap.to(scrollRef.current, {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40"></div>
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Urmi Kothari</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 font-medium"
          >
            Full Stack Developer & Software Engineer
          </p>

          <p
            ref={descriptionRef}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions and building
            exceptional user experiences. With expertise in modern technologies
            and a strong foundation in software development.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              About Me
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div ref={socialRef} className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/urmi-kothari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:urmikothari03@gmail.com"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown className="text-gray-400 animate-bounce" size={24} />
      </div>
    </div>
  );
};

export default Hero;