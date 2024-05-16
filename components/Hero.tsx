"use client";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Nav from "./Nav";
import { HeroText } from "./HeroText";

export function Hero() {
  const images = [
    "/digi-1.jpg",
    "digital-1.jpg",
    "/digital-5.jpg",
    "/digital-2.jpg",
  ];
  return (
    <ImagesSlider
      className="h-[45rem] flex flex-col justify-start w-full"
      images={images}
    >
      <Nav />
      <HeroText />
    </ImagesSlider>
  );
}
