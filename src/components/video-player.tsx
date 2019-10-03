import React, { useEffect } from 'react';
import Youtube, { PlayerVars } from 'react-youtube';

import styled from 'styled-components';

interface VideoPlayerProps {
  onVideoEnded: Function;
  startsAt: number;
  videoId: string
}

let player: any;

export default function VideoPlayer({ onVideoEnded, startsAt, videoId }: VideoPlayerProps) {
  useEffect(() => {
    const handle = setInterval(() => {
      if (!player) {
        return;
      }

      const duration = player.getDuration();
      const timeLeft = duration - player.getCurrentTime();

      if (duration > 1 && timeLeft < 20) {
        onVideoEnded();
      }
    }, 100);

    return () => {
      clearInterval(handle);
    };
  });

  const youtubeOptions = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      disablekb: 0,
      start: startsAt
    } as PlayerVars
  };

  const onStateChange = (event: any) => {
    player = event.target;
  };

  return (
    <div>
      <Youtube
        videoId={ videoId }
        opts={ youtubeOptions }
        onStateChange={ onStateChange }
      />
    </div>
  );
}
