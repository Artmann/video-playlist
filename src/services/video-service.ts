export default class VideoService {
  async getVideoId(title: string, artists: string[]): Promise<string | undefined> {
    const key = 'AIzaSyBBmC4Z-WxafSPk6yrtB_emBDkwKZ8TeOw';
    const query = `${title} - ${ artists.length > 0 ? artists[0] : 'Offical'}`;

    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&key=${key}&maxResults=5&order=relevance`);
      const { items } = await response.json();
      const item = items.find((item: any) => item.id.kind === 'youtube#video');

      return item && item.id && item.id.videoId ? item.id.videoId : undefined;
    } catch (e) {
      console.error(e);

      return undefined;
    }
  }
}
