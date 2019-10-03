import React, { useEffect, useState } from 'react';

import { IPlaylist } from '../interfaces/playlist';
import PlaylistService from '../services/playlist-service';
import { RouteComponentProps } from 'react-router';
import VideoPlayer from '../components/video-player';
import VideoService from '../services/video-service';

interface IPlaylistProps extends RouteComponentProps<any> {}

const playlistService = new PlaylistService();
const videoService = new VideoService();

export default function Playlist({ match }: IPlaylistProps) {
  const [ playlist, setPlaylist ] = useState<IPlaylist>();
  const [ trackIndex, setTrackIndex ] = useState(0);
  const [ videoId, setVideoId ] = useState();

  useEffect(() => {
    playlistService.createPlaylist('77CvWD8KR34XjZZppNJAWu').then(pl => {
      setPlaylist(pl);
    })
  }, [ match ]);

  if (!playlist) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const playNextTrack = () => {
    const nextIndex = trackIndex >= playlist.items.length - 1 ? 0 : trackIndex + 1;

    console.log('Playing next track', nextIndex);

    setTrackIndex(nextIndex);
  };
  const track = playlist.items[trackIndex];

  videoService.getVideoId(track.title, track.artists).then(id => {
    if (!id) {
      return playNextTrack();
    }

    setVideoId(id);
  });

  const onVideoEnded = () => {
    playNextTrack();
  };

  console.log('VIDEO123', videoId);

  return (
    <VideoPlayer onVideoEnded={ onVideoEnded } startsAt={ trackIndex === 0 ? 0 : 35 } videoId={ videoId } />
  );
}
