import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import img1 from "../assets/banner1.png";
import img2 from "../assets/banner2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Components/Banner.css";
import bannergif from "../assets/heade icons/bannersmscreen.gif";
import bannerimg from "../assets/heade icons/bannermd.png";

function Banner() {
  const images = [img1, img2, img1, img2];
  
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const [current, setCurrent] = useState(1);

  // Desktop scroll logic
  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    const card = cardRef.current;
    if (!scrollContainer || !card) return;

    const cardWidth = card.offsetWidth;
    const gap = 20;

    const offset =
      index * (cardWidth + gap) - (scrollContainer.offsetWidth - cardWidth) / 2;

    scrollContainer.scrollTo({ left: offset, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    scrollToIndex(current);
  }, []);

  useEffect(() => {
    scrollToIndex(current);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Mobile scroll-by-width logic
  const mobileScrollRef = useRef(null);

const scrollMobile = (direction) => {
  const container = mobileScrollRef.current;
  if (!container) return;

const scrollAmount = container.offsetWidth / 2;

  container.scrollBy({
    left: direction === "next" ? scrollAmount : -scrollAmount,
    behavior: "smooth",
  });
};

  return (
    <>
      {/* Desktop Carousel */}
      <div className="hidden md:flex relative w-full bg-gray-200 py-6 overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-transparent hover:bg-gray-200 rounded-full shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-500/70" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-transparent hover:bg-gray-200 rounded-full shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-[20px] overflow-x-auto no-scrollbar scroll-smooth px-0"
        >
          {images.map((img, i) => (
            <div
              key={i}
              ref={i === 0 ? cardRef : null}
              className="w-[1200px] h-[300px] transition-all duration-500 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={img}
                alt={`banner-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel with Slide Buttons */}
      <div className="relative md:hidden w-full">
        {/* Buttons */}
        <button
          onClick={() => scrollMobile("prev")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 text-black" />
        </button>

        <button
          onClick={() => scrollMobile("next")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 text-black" />
        </button>

        {/* Scrollable container */}
<div
  ref={mobileScrollRef}
  className="flex w-full overflow-x-auto scroll-smooth  "
>
  {images.map((img, i) => (
    <div
      key={i}
      className="min-w-[50%] w-[50%] h-[200px]"
    >
      <img
        src={img}
        alt={`banner-${i}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


      </div>
  <div className="md:hidden sm:block m-7 "> 
  <img src={bannergif} alt="Banner" />
</div>
  <div className="sm:hidden md:block mx-30 mt-5 "> 
  <img src={bannerimg} alt="Banner" />
</div>
    </>
  );
}

export default Banner;
