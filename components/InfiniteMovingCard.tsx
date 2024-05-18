"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "AA Digital Labs exceeded my expectations with their exceptional web development services. Their attention to detail and prompt communication made the entire process seamless.",
    name: "Ahmed Abdullah Al-Mansoori",
    title: "Manama",
  },
  {
    quote:
      "Partnering with AA Digital Labs for digital marketing was a game-changer for my business. Their strategic approach and measurable results significantly boosted our online presence.",
    name: "Paul A.",
    title: "Tokyo",
  },
  {
    quote:
      "Working with AA Digital Labs was a pleasure. Their web development team demonstrated unparalleled skill and professionalism, delivering a website that perfectly reflects our brand.",
    name: "Zahraat Al-Sayf",
    title: "Isa Town",
  },
  {
    quote:
      "AA Digital Labs sets the standard for app development excellence. Their innovative solutions and commitment to client satisfaction make them my go-to choice for any project.",
    name: "Peter",
    title: "Ottawa, Canada",
  },
  {
    quote:
      "Choosing AA Digital Labs for digital marketing was one of the best decisions I made for my business. Their expertise and dedication drove impressive results, exceeding all expectations.",
    name: "Fatima Mohammed Al-Hashemi",
    title: "Muharraq",
  },
];
