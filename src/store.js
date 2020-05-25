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
  },
  {
    id: 4,
    name: "Cafu",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 5,
    name: "Aldair",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 6,
    name: "Taffarel",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 7,
    name: "Dunga",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 8,
    name: "Zinho",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 9,
    name: "Marcio Santos",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 10,
    name: "Mazinho",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },
  {
    id: 11,
    name: "Mauro Silva",
    avatar: "https://api.adorable.io/avatars/80/abott@adorable.png"
  },

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