"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Code, Database, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Fix for the children property error
      if (statsRef.current) {
        gsap.fromTo(
          Array.from(statsRef.current.children),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Code, label: "Programming Languages", value: "8+" },
    { icon: Database, label: "Technologies", value: "15+" },
    { icon: Globe, label: "Projects Completed", value: "25+" },
    { icon: Award, label: "Certifications", value: "3+" },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About Me
            </h2>
            <div ref={contentRef} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with extensive experience in
                building scalable web applications and software solutions. Currently
                working as a Software Engineer at Sigma Info Solutions, I specialize
                in modern web technologies and have a strong foundation in both
                frontend and backend development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in software development has been driven by curiosity and
                a commitment to continuous learning. I enjoy solving complex problems
                and creating innovative solutions that make a real impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in JavaScript, Python, React, Node.js, and cloud
                technologies, I bring a comprehensive skill set to every project.
                I'm particularly interested in emerging technologies and always
                looking for ways to improve development processes and user experiences.
              </p>
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;