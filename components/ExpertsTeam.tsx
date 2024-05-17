"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ExpertsTeam() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Discover Your Ultimate <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Digital Solution Today!
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Pay-Per-Click Advertising (PPC)",
    image: "/tab.jpg",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Mobile App Development",
    image: "/tab-1.jpg",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Search Engine Optimization (SEO)",
    image: "/tab-2.jpg",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Website Design and Development",
    image: "/tab-3.jpg",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Analytics and Reporting",
    image: "/tab-4.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Email Marketing",
    image: "/tab-5.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Digital Marketing",
    image: "/tab-6.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UI/UX Design",
    image: "/tab-7.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Digital Strategy Consulting",
    image: "/tab-8.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Conversion Rate Optimization (CRO)",
    image: "/tab-9.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "E-commerce Solutions",
    image: "/tab-10.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Content Marketing",
    image: "/tab-11.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Social Media Marketing (SMM)",
    image: "/tab-12.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Custom Software Development",
    image: "/tab-13.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Online Reputation Management (ORM)",
    image: "/tab-14.jpg",
    badge: "Mentor",
  },
];
