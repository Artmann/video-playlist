import { IPlaylist, IPlaylistItem } from '../interfaces/playlist';

export default class PlaylistService {

  async createPlaylist(spotifyId: string): Promise<IPlaylist> {
    const accessToken = localStorage.getItem('token');

    const response = await fetch(`https://api.spotify.com/v1/playlists/${spotifyId}`, {
      headers: new Headers({
        'authorization': `Bearer ${accessToken}`
      })
    });

    const { name, tracks } = await response.json();

    const playlist = {
      id: spotifyId,
      items: tracks.items.map((item: any) => {
        return  {
          artists: item.track.artists.map((artist: any) => artist.name),
          title: item.track.name
        } as IPlaylistItem;
      }),
      name
    };

    return playlist;
  }
}
