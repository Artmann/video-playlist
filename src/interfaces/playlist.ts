export interface IPlaylistItem {
  artists: string[];
  title: string;
}

export interface IPlaylist {
  id: string;
  name: string,
  items: IPlaylistItem[];
}
