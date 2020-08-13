import { findAllByDisplayValue } from "@testing-library/react";
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
   //token: "BQD63L6is0jGyj4N6ymMJMh_BYF4bOPhaL27aKisCqCG43NY3DWp0WA5MyhO6xtoS_7OfKNbcNmq5fDRpkKQ3y8Zs1ZrLNGYd-A5SdU5Xe8jWsv-sspw1cWnXajNOTtcnHDuTYNL6FdL7lv880xZySSN5LcVG1bV91gYQ2P3hp5l2Nzo",
};

const reducer = (state, action) => {
	console.log(action);
	switch(action.type){

		case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
	}

};

export default reducer;