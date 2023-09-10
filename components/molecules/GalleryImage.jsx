import { IconPhoto } from "@tabler/icons-react"
import FsLightbox from "fslightbox-react"
import Image from "next/image"
import { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import HoverPlayer from "@components/molecules/HoverPlayer"
import Skeleton from "react-loading-skeleton"

export default function GalleryImage({
  loaded = false,
  image_urls,
  alt,
  video_url,
  video_thumbnail_url,
}) {
  const [played, setPlayed] = useState(false)
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })

  const doOpenLightBox = (e) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: parseInt(e.currentTarget.getAttribute("name")),
    })
  }

  const doPlay = () => {
    setPlayed(true)
  }

  const doPause = () => {
    setPlayed(false)
  }
  return (
    <div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={image_urls}
        slide={lightboxController.slide}
      />
      <div className="hidden md:grid grid-cols-3 gap-4">
        {!loaded ? (
          <>
            <Skeleton
              className="aspect-video"
              containerClassName="col-span-3"
            />
            <Skeleton className="aspect-video" />
            <Skeleton className="aspect-video" />
            <Skeleton className="aspect-video" />
          </>
        ) : (
          <>
            <HoverPlayer.Unhovered
              video_url={video_url}
              alt="video"
              thumbnail_url={video_thumbnail_url}
              className="rounded-lg shadow-lg overflow-hidden col-span-3 aspect-video"
            />
            <div
              name="1"
              onClick={doOpenLightBox}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                className="object-cover"
                sizes="auto"
                priority
                src={image_urls[0]}
                fill
                alt={alt}
              />
            </div>
            <div
              name="2"
              onClick={doOpenLightBox}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                className="object-cover"
                sizes="auto"
                priority
                src={image_urls[1]}
                fill
                alt={alt}
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                sizes="auto"
                priority
                src={image_urls[2]}
                fill
                alt={alt}
                className="object-cover pointer-events-none"
              />
              <div
                name="3"
                onClick={doOpenLightBox}
                className="absolute z-[50] left-0 top-0 h-full w-full flex items-center justify-center cursor-pointer transition-all bg-black bg-opacity-20 hover:bg-opacity-50"
              >
                <p className="font-medium text-white">+ More</p>
              </div>
            </div>
          </>
        )}
      </div>
      {!loaded ? (
        <Skeleton
          className="aspect-video"
          containerClassName="block md:hidden"
        />
      ) : (
        <div className="block md:hidden rounded-md overflow-hidden">
          <Carousel autoPlay={!played} showThumbs={false} infiniteLoop={true}>
            {image_urls.map((image_url, i) => {
              return (
                <div key={i} className="max-w-full w-full max-h-full h-full">
                  <div className="relative aspect-video rounded-md overflow-hidden">
                    <Image
                      sizes="auto"
                      className="object-cover"
                      priority
                      src={image_url}
                      alt={alt}
                      fill={true}
                    />
                  </div>
                  <div className="flex flex-row gap-2 absolute bottom-0 left-0 text-white m-2">
                    <IconPhoto className="w-4 h-4 text-white" />
                    <p className="flex items-center gap-1 text-xs">
                      {image_urls.length}Foto | 1 Video
                    </p>
                  </div>
                </div>
              )
            })}
            <HoverPlayer.Unhovered
              video_url={video_url}
              alt="video"
              thumbnail_url={video_thumbnail_url}
              className="block rounded-lg shadow-lg overflow-hidden col-span-3 aspect-video"
              onPlay={doPlay}
              onPause={doPause}
            />
          </Carousel>
        </div>
      )}
    </div>
  )
}
