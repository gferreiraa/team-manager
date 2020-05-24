import { createStore } from 'redux';

const initialState = {
  players: [{
    id: 1,
    name: "Bebeto",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 2,
    name: "Romario",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 3,
    name: "Branco",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  }

],
  startingLineup: [],
  benchPlayers: []
}

const reducerManager = (state = initialState, action) => {
  
  if (action.type === "ADD_STARTING_LINEUP") {
    return {
      ...state,
      startingLineup: state.startingLineup.concat(action.player),
      players: state.players.filter(player => player.id !== action.player.id)
    }
  }

  if (action.type === "ADD_BENCH_PLAYER") {
    return {
      ...state, 
      benchPlayers: state.benchPlayers.concat(action.player),
      players: state.players.filter(player => player.id !== action.player.id)
    }
  }

  if (action.type === "CHANGE_PLAYER_STARTER") {
    return {
      ...state,
      startingLineup: state.startingLineup.filter(player => player.id !== action.player.id),
      players: state.players.concat(action.player)
    }
  }

  if (action.type === "CHANGE_BENCH_PLAYER") {
    return {
      ...state,
      benchPlayers: state.benchPlayers.filter(player => player.id !== action.player.id),
      players: state.players.concat(action.player)
    }
  }


  return state;
}

export default createStore(reducerManager);