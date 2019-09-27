import React from 'react';
import { RouteComponentProps } from 'react-router';
// @ts-ignore
import SpotifyLogin from 'react-spotify-login';
import styled from 'styled-components';

interface ILoginProps extends RouteComponentProps<any> {}

const Background = styled.div`
  align-items: center;
  background: url(https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;
const Container = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;
const Image = styled.img`
  height: auto;
  width: 16rem;
`;

export default function Login({ history }: ILoginProps) {
  const onSuccess = ({ access_token: accessToken }: any) => {
    localStorage.setItem('token', accessToken);
  };
  const onFailure = (response: any) => console.error({

  });

  return (
    <Background>
      <Container>
        <Image src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png" />
        <SpotifyLogin
          clientId="2dd19ce71d014c41843e36872d568659"
          redirectUri="http://localhost:3000"
          onSuccess={ onSuccess }
          onFailure={ onFailure }
          className="loginButton"
        />
      </Container>
    </Background>
  );
}
