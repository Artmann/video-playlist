import React from 'react';
import { RouteComponentProps } from 'react-router';
import SearchForm from '../components/search-form';
import styled from 'styled-components';

interface IHomeProps extends RouteComponentProps<any> {}

const Splash = styled.div`
  background: url(/images/splash.jpeg);
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100%;
`;
const Overlay = styled.div`
  align-items: center;
  background: rgba(40, 31, 40, 0.6);
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

/**
 * Returns the playlist ID from a Spotify Playlist URL. Returns `null` if the
 * URL is not parsable.
 *
 * Example
 * ```
 * extractPlaylistId('https://open.spotify.com/playlist/7sSm6n8UZF2mTyzP2VNa1h?si=LITtFgljQB2o_vYo4wUq6Q')
 * #=> '7sSm6n8UZF2mTyzP2VNa1h'
 * ```
 */
function extractPlaylistId(url: string): string | null {
  try {
    const { pathname } = new URL(url);
    const parts = pathname.split('/');
    const playListIndex = parts.indexOf('playlist');

    if (playListIndex < 0 || playListIndex > parts.length - 2) {
      return null;
    }

    return parts[playListIndex + 1];
  } catch (e) {
    console.error(`'${url}' is not a valid Spotify URL.`);

    return null;
  }
}

export default function Home({ history }: IHomeProps) {
  const goToPlaylist = (url: string) => {
    const spotifyId = extractPlaylistId(url);

    if (!spotifyId) {
      return;
    }

    history.push(`/playlist/${spotifyId}`);
  };

  return (
    <Splash>
      <Overlay>
        <SearchForm onSubmit={ goToPlaylist } />
      </Overlay>
    </Splash>
  );
}
