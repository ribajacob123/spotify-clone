import React , { useEffect , useState}from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromResponse } from "./spotify";
import SpotifyWebAPi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebAPi();

function App() {
  const [{token}, dispatch] = useStateValue();

	  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });


      spotify.getPlaylist("37i9dQZF1EptoZEKr1Cu6a").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });


      spotify.getMe().then((user) => {
      	dispatch({
          type: "SET_USER",
          user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      });
    }
    }, [token , dispatch]);
  return (
    <div className="app">
    	{!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
