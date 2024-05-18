import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";
import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";
import { GlobeDemo } from "@/components/Globe";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import QuoteRequest from "./../components/QuoteRequest";

import Loading from "./../components/Loading";

const SERVICES = [
  {
    title: "Digital Marketing",
    description:
      "Explore our comprehensive suite of digital marketing solutions, including SEO, PPC, social media management, and content creation, designed to elevate your brand's online visibility and drive tangible results",
  },

  {
    title: "Web Development",
    description:
      "Discover our range of web development services, encompassing responsive design, e-commerce solutions, custom CMS development, and UX/UI optimization, tailored to enhance your online presence.",
  },

  {
    title: "Mobile App Development",
    description:
      "Unlock the potential of mobile technology with our app development services. From sleek UI/UX designs to robust backend solutions, we craft cutting-edge apps to elevate your presence.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Elevate your online visibility with our SEO services. From keyword research to on-page optimization, we boost your website's ranking and drive organic traffic for sustainable growth and increased conversions",
  },
  {
    title: "Social Media Marketing",
    description:
      "Maximize your brand's reach with our social media marketing services. From content creation to audience engagement, we craft tailored strategies to boost your presence and drive meaningful connections.",
  },
  {
    title: "Google Ad Campaign (PPC)",
    description:
      "Accelerate your online success with our Google Ad Campaign services. We craft and optimize campaigns to reach your target audience, drive conversions, and maximize your return on investment.",
  },
];

export default function Home() {
  return (
    <div>
      <Loading />
      <Hero />
      <section id="about">
        <About />
      </section>
      <GlobeDemo />
      <div id="solutions">
        <ExpertsTeam />
      </div>
      <section
        id="services"
        className="mx-auto xl:max-w-[1080px] md:max-w-[1000px]"
      >
        <p className="text-[38px] font-[600] text-center pb-5 md:pb-10">
          Our Services
        </p>
        <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
          {SERVICES.map((ser) => {
            return (
              <Meteor
                key={ser.title}
                title={ser.title}
                description={ser.description}
              />
            );
          })}
        </div>
      </section>
      <BestService />
      <section>
        <p className="text-[38px] font-[600] text-center">
          Online Presence Essentials
        </p>
        <LayoutGridDemo />
      </section>
      <InfiniteMovingCardsDemo />
      <QuoteRequest />
    </div>
  );
}
