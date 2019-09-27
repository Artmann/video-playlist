export interface IPlaylistItem {
  artists: string[];
  title: string;
  videoId: string;
}

export interface IPlaylist {
  id: string;
  items: IPlaylistItem[];
}
