import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import PlaylistService from '../services/playlist-service';

interface IPlaylistProps extends RouteComponentProps<any> {}

const playlistService = new PlaylistService();

export default function Playlist({ match }: IPlaylistProps) {
  useEffect(() => {
    playlistService.createPlaylist('7sSm6n8UZF2mTyzP2VNa1h');
  }, [ match ]);

  return (
    <p>
      Playlist
    </p>
  );
}
