'use client'
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {BiArrowBack} from 'react-icons/bi'

const MySlider = () => {
  const imgData = [
    { img: "/img1.png", id: "1" },
    { img: "/img2.png", id: "2" },
    { img: "/img3.png", id: "3" },
    { img: "/img4.png", id: "4" },
    { img: "/img5.png", id: "5" },
    { img: "/img6.png", id: "6" },
  ];
  return (
    <>
      <div className="">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(handlerClick, hasPrev) => (
            <div
              className=" cursor-pointer absolute z-[1] right-[40px] bottom-0 p-2 bg-[#1d4ed8] text-white max-md:right-[30px] "
              onClick={handlerClick}
            >
              <BiArrowBack className="text-[22px] max-md:text-[13px]  " />
            </div>
          )}
          renderArrowNext={(handlerClick, hasNex) => (
            <div
              className=" cursor-pointer absolute z-[1] right-0 bottom-0 p-2 bg-[#1d4ed8] text-white "
              onClick={handlerClick}
            >
              <BiArrowBack className="rotate-180 text-[22px] max-md:text-[13px]" />
            </div>
          )}
        >
          {imgData.map((data) => {
            return (
              <div className="" key={data.id}>
                <img
                  src={data.img}
                  className="aspect-[16/10] md:aspect-auto object-cover"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MySlider;
