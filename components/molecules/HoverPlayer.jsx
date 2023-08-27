import { IconLoader2, IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HoverPlayer = ({ className, video_url, thumbnail_url, alt }) => {
  const ref = useRef(null);
  const [presence, setPresence] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [animateLoading, setAnimateLoading] = useState(false);

  const doFinishLoad = () => {
    setLoading(false);
  };

  const doPlay = () => {
    if (ref) {
      setPresence(true);
    }
  };

  const doPause = () => {
    if (loading) {
      setAnimateLoading(false);
      return;
    }
    if (ref) {
      setAnimate(false);
    }
  };

  useEffect(() => {
    if (presence) {
      if (loading) {
        setAnimateLoading(true);
      } else {
        setAnimate(true);
        ref.current.play();
      }
    }
  }, [presence, loading]);

  useEffect(() => {
    if (!animate) {
      setTimeout(() => {
        ref.current.currentTime = 0;
        ref.current.pause();
        setPresence(false);
      }, 300);
    }
  }, [animate]);

  useEffect(() => {
    if (!animateLoading) {
      setTimeout(() => {
        setPresence(false);
      }, 300);
    }
  }, [animateLoading]);

  return (
    <div
      className={
        className
          ? "cursor-pointer relative " + className
          : "cursor-pointer relative"
      }
      onMouseOver={doPlay}
      onMouseOut={doPause}
    >
      <video
        ref={ref}
        src={video_url}
        type="video/mp4"
        muted
        loop
        playsInline
        className={`${presence && !loading ? "block" : "hidden"} ${
          animate ? "opacity-100" : "opacity-0"
        } absolute top-0 left-0 z-[99] transition-opacity duration-300 pointer-events-none w-full h-full object-cover`}
        onLoadedData={doFinishLoad}
      />
      {presence && loading && (
        <div
          className={`${
            animateLoading ? "opacity-100" : "opacity-0"
          } absolute top-00 left-0 z-[99] bg-black bg-opacity-20 transition-opacity duration-300 pointer-events-none w-full h-full flex items-center justify-center`}
        >
          <IconLoader2 className="h-8 w-8 text-white animate-spin" />
        </div>
      )}
      <Image
        src={thumbnail_url}
        sizes="auto"
        fill={true}
        alt={alt}
        className="pointer-events-none"
      />
    </div>
  );
};

HoverPlayer.unhovered = ({
  className,
  video_url,
  thumbnail_url,
  alt,
  onPlay = () => {},
  onPause = () => {},
}) => {
  const [presence, setPresence] = useState(false);
  const ref = useRef(null);

  const doPlay = () => {
    if (ref) {
      ref.current.play();
      setPresence(true);
    }
  };

  return (
    <div
      className={
        className
          ? "cursor-pointer relative " + className
          : "cursor-pointer relative"
      }
      onClick={doPlay}
    >
      <video
        ref={ref}
        src={video_url}
        type="video/mp4"
        controls
        preload="none"
        className={`${
          presence ? "block" : "hidden"
        } w-full h-full object-cover`}
        onPlay={onPlay}
        onPause={onPause}
      />
      {!presence && (
        <>
          <Image
            src={thumbnail_url}
            sizes="auto"
            fill={true}
            alt={alt}
            className="pointer-events-none"
          />
          <div className="z-[99] absolute top-0 left-0 w-full h-full flex gap-4 items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-50 transition-all">
            <div className="rounded-full p-2 bg-white">
              <IconPlayerPlayFilled className="h-4 w-4 text-black" />
            </div>
            <p className="text-white font-semibold">Play Video</p>
          </div>
        </>
      )}
    </div>
  );
};

export default HoverPlayer;
