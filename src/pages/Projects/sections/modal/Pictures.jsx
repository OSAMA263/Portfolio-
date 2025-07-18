import { Spinner } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Pictures({ sliderImages ,i}) {

  return (
    <picture className="rounded-lg w-fit overflow-hidden">
      <source media="(max-width: 645px)" srcSet={sliderImages.mobile[i]} />
      <LazyLoadImage
        className="object-cover bg-center"
        alt={sliderImages.pc[i]}
        src={sliderImages.pc[i]}
        placeholder={
          <div className="flex items-center justify-center p-24">
            <Spinner size="lg" className="!p-24 text-4xl"></Spinner>
          </div>
        }
      ></LazyLoadImage>
    </picture>
  );
}
