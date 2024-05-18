import { BackgroundGradientDemo } from "./BackgroundGradient";

function BestService() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
      <div className="md:px-5 px-1">
        <h2 className="md:text-[32px] text-[26px] font-[600] leading-[38px]">
          Book Best Service <br /> On Reasonable Price
        </h2>
        <p className="md:mt-3 mt-2">
          Discover the ultimate destination for all your digital needs, where
          excellence meets affordability. At our agency, we redefine value by
          offering top-notch digital marketing, web development, mobile app
          development, and Google Ad PPC campaign services at unbeatable prices.
        </p>
        <p className="md:mt-2 mt-1">
          Whether you&apos;re looking to enhance your online presence, launch a
          cutting-edge website, develop a sleek mobile application, or drive
          targeted traffic with Google Ads, we&apos;ve got you covered.
        </p>
        <p className="mt-2 hidden md:block">
          Our team of experts combines creativity, technical prowess, and
          strategic insight to deliver results that exceed expectations without
          breaking the bank. With a commitment to transparency, quality, and
          client satisfaction, we ensure that every project is executed
          flawlessly, from inception to implementation. Say goodbye to
          compromising on quality for cost &dash; with us, you can book the best
          services at reasonable prices and take your digital presence to new
          heights.
        </p>
        <p className="mt-2 hidden md:block">
          we provide tailored solutions that drive results without breaking the
          bank. With a team of seasoned professionals dedicated to your success,
          we ensure that every project is executed with precision, creativity,
          and attention to detail. Don&apos;t settle for subpar services or
          overpriced alternatives &dash; choose us for exceptional quality at
          affordable rates. Book your next digital endeavor with us and
          experience the difference firsthand.
        </p>
      </div>
      <div>
        <BackgroundGradientDemo />
      </div>
    </div>
  );
}

export default BestService;
