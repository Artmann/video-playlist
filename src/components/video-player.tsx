import React from 'react';
import Youtube, { PlayerVars } from 'react-youtube';
import styled from 'styled-components';

interface VideoPlayerProps {
  videoId: string
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  const youtubeOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 0,
      start: 35
    } as PlayerVars
  };

  return (
    <div>
      <Youtube
        videoId={ videoId }
        opts={ youtubeOptions }
      />
    </div>
  );
}
