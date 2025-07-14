"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Building } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
            trigger: experienceRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Fix for the children property error
      if (timelineRef.current) {
        gsap.fromTo(
          Array.from(timelineRef.current.children),
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: experienceRef.current,
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

  const experiences = [
    {
      title: "Software Engineer",
      company: "Sigma Info Solutions",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Participated in code reviews and contributed to technical documentation",
      ],
    },
    {
      title: "Jr. Software Engineer",
      company: "Sigma Info Solutions",
      location: "Remote",
      period: "2022 - 2023",
      description: [
        "Built user interfaces using React and modern JavaScript frameworks",
        "Integrated APIs and worked with databases to create dynamic applications",
        "Participated in agile development processes and sprint planning",
        "Collaborated with designers to implement pixel-perfect designs",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Shosha Digital Solutions",
      location: "New Zealand",
      period: "2021 - 2022",
      description: [
        "Contributed to the development of e-commerce platforms",
        "Gained experience in web development technologies and best practices",
        "Worked on bug fixes and feature enhancements",
        "Learned about software development lifecycle and project management",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-16 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;