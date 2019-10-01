import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import PlaylistService from '../services/playlist-service';
import { IPlaylist } from '../interfaces/playlist';
import VideoService from '../services/video-service';
import PlaylistPlayer from '../components/video-player';

interface IPlaylistProps extends RouteComponentProps<any> {}

const playlistService = new PlaylistService();
const videoService = new VideoService();

export default function Playlist({ match }: IPlaylistProps) {
  const [ playlist, setPlaylist ] = useState<IPlaylist>();
  const [ trackIndex, setTrackIndex ] = useState(0);
  const [ videoId, setVideoId ] = useState();

  useEffect(() => {
    playlistService.createPlaylist('7sSm6n8UZF2mTyzP2VNa1h').then(pl => {
      setPlaylist(pl);
    })
  }, [ match ]);

  if (!playlist) {
    return (<div>
      Loading...
    </div>);
  }

  const nextTrack = () => {

  }

  if (!videoId) {
    const track = playlist.items[trackIndex];

    videoService.getVideoId(track.title, track.artists).then(id => {
      if (!id) {
        return nextTrack();
      }

      setVideoId(id);
    });
  }

  console.log('VIDEO123', videoId);


  return (
    <PlaylistPlayer videoId={videoId} />
  );
}
