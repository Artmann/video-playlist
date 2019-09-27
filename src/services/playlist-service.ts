import { IPlaylist } from '../interfaces/playlist';

export default class PlaylistService {

  async createPlaylist(spotifyId: string): Promise<IPlaylist> {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${spotifyId}`);
    const { name } = await response.json();

    console.log(`Playlist: ${name}`);

    return {} as IPlaylist;
  }
}
