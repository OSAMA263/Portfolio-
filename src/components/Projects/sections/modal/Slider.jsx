import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Pictures from "./Pictures";
import {projectPics} from "./data"
export default function Slider({ projectInd }) {
  return (
    <Swiper  {...swiperProps} className="rounded-xl sm:!w-auto  overflow-hidden ">
      {projectPics.map((ele, i) => (
        <SwiperSlide key={i} className="rounded-xl overflow-hidden">
          <Pictures
            projectPics={projectPics}
            ele={ele}
            projectInd={projectInd}
            i={i}
          ></Pictures>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const swiperProps = {
  spaceBetween: 0,slidesPerView:1,
  breakpoints: {
    645: {
      grabCursor: true,
      spaceBetween: 40,slidesPerView:1
    },
  },
};
