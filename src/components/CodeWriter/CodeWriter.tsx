import React, { ReactElement, useEffect, useRef } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { StyledCode } from "./CodeWriter.styles";

export const CodeWriter = (): ReactElement => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [hasPlayed, setHasPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.playbackRate = 2;
      // https://github.com/facebook/react/issues/10389
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [videoRef?.current]);

  useEffect(() => {
    if (
      inView &&
      (!hasPlayed ||
        (videoRef?.current?.paused && !videoRef?.current?.ended))
    ) {
      videoRef?.current?.play?.();
    } else {
      videoRef?.current?.pause?.();
    }
  }, [inView]);
  return (
    <StyledCode ref={ref}>
      <video
        src="https://haakon.dev/codewriter.mp4"
        poster="https://haakon.dev/thumb.png"
        muted={true}
        controls={false}
        onClick={() => {
          if (videoRef?.current) {
            videoRef.current.currentTime =
              videoRef.current.duration;
          }
        }}
        title="Click to stop"
        onMouseOver={() => {
          if (videoRef?.current && !hasPlayed) {
            videoRef?.current.play();
            setHasPlayed(true);
          }
        }}
        ref={videoRef}
      />
    </StyledCode>
  );
};
