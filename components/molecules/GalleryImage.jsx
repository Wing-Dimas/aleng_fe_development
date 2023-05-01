import { useState } from "react";
import { IconCamera } from "@tabler/icons-react";
import FsLightbox from "fslightbox-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function GalleryImage({ images }) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  return (
    <div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        slide={lightboxController.slide}
      />
      <div className="hidden md:grid grid-rows-6 grid-cols-6 grid-flow-row gap-3 place-content-start max-h-[35rem] h-full">
        <Image
          src={images[0]}
          alt=""
          height={1000}
          width={1000}
          className="row-span-6 col-span-4 w-full h-full object-cover rounded-l-md shadow-lg object-bottom"
        />
        <Image
          src={images[1]}
          height={1000}
          width={1000}
          alt=""
          className="w-full col-span-2 row-span-2 h-full object-cover shadow-lg rounded-tr-md object-bottom"
        />
        <Image
          src={images[2]}
          height={1000}
          width={1000}
          alt=""
          className="w-full col-span-2 row-span-2 h-full object-cover  shadow-lg object-bottom"
        />
        <div className="w-full col-span-2 row-span-2 h-full relative ">
          <Image
            src={images[3]}
            height={1000}
            width={1000}
            alt=""
            className="w-full h-full object-cover rounded-br-md shadow-lg object-bottom"
          />
          <div className="absolute bottom-0 bg-[#FDD05C] w-full h-full border-2 flex items-center justify-center rounded-br-md p-2  font-semibold text-xs md:text-sm bg-white/40 backdrop-blur-sm  drop-shadow-md">
            <p
              className="text-black hover:text-base cursor-pointer hover:font-bold "
              onClick={() => openLightboxOnSlide(1)}
            >
              + 5 Foto
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <Carousel autoPlay={true} showThumbs={false}>
          {images.map((image, i) => {
            return (
              <div key={i} className="max-w-full w-full max-h-full h-full">
                <div className="relative h-full">
                  <Image
                    src={image}
                    height={1000}
                    width={1000}
                    className="rounded-md shadow-md w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-row gap-2 absolute bottom-0 left-0 text-white m-2">
                  <IconCamera size={14} strokeWidth={2} color={"white"} />
                  <p className="flex items-center gap-1 text-xs">
                    7<span className="">Foto</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
