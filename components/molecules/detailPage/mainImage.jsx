import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Camera } from 'tabler-icons-react';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

export default function MainImage({ image1, image2, image3, image4 }) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div className="">
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[image1, image2, image3, image4]}
        slide={lightboxController.slide}
      />
      <div className="hidden md:grid grid-rows-6 grid-cols-6 grid-flow-row gap-3 place-content-start max-h-[35rem] h-full">
        <img
          src={image1}
          alt=""
          className="row-span-6 col-span-4 w-full h-full object-cover rounded-l-md shadow-lg object-bottom"
        />
        <img
          src={image2}
          alt=""
          className="w-full col-span-2 row-span-2 h-full object-cover shadow-lg rounded-tr-md object-bottom"
        />
        <img
          src={image3}
          alt=""
          className="w-full col-span-2 row-span-2 h-full object-cover  shadow-lg object-bottom"
        />
        <div className="w-full col-span-2 row-span-2 h-full relative ">
          <img
            src={image4}
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
        <Carousel autoPlay={true} className="">
          <div className="max-w-full w-full max-h-full h-full">
            <img
              src={image1}
              className="rounded-md shadow-md w-full h-full object-cover"
            />
            <div className="flex flex-row gap-2 absolute bottom-0 left-0 text-white m-2">
              <Camera size={14} strokeWidth={2} color={'white'} />
              <p className="flex items-center gap-1 text-xs">
                7<span className="">Foto</span>
              </p>
            </div>
          </div>
          <div className="max-w-full w-full max-h-full h-full">
            <img
              src={image2}
              className="rounded-md shadow-md w-full h-full object-cover"
            />
            <div className="flex flex-row gap-2 absolute bottom-0 left-0 text-white m-2">
              <Camera size={14} strokeWidth={2} color={'white'} />
              <p className="flex items-center gap-1 text-xs">
                7<span className="">Foto</span>
              </p>
            </div>
          </div>
          <div className="max-w-full w-full max-h-full h-full">
            <img
              src={image3}
              className="rounded-md shadow-md w-full h-full object-cover"
            />
            <div className="flex flex-row gap-2 absolute bottom-0 left-0 text-white m-2">
              <Camera size={14} strokeWidth={2} color={'white'} />
              <p className="flex items-center gap-1 text-xs">
                7<span className="">Foto</span>
              </p>
            </div>
          </div>
          <div className="max-w-full w-full max-h-full h-full">
            <img
              src={image4}
              className="rounded-md shadow-md w-full h-full object-cover"
            />
            <div className="flex flex-row gap-2 absolute bottom-0 left-0 text-white m-2">
              <Camera size={14} strokeWidth={2} color={'white'} />
              <p className="flex items-center gap-1 text-xs">
                7<span className="">Foto</span>
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
