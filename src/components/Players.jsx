import React from 'react';
import { connect } from 'react-redux';

const Players = ({players, addStarting, addBenchPlayers}) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="wrap-Players">
        {
          players.map(player => (
            <article className="player" key={player.id}>
              <img src={player.avatar} alt={player.name}/>
              <h3>{player.name}</h3>
              <div>
                <button onClick={() => addStarting(player)}>Starter</button>
                <button onClick={() => addBenchPlayers(player)}>Bench Player</button>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispachToProps = dispatch => ({
  addStarting(player) {
    dispatch({
      type: "ADD_STARTING_LINEUP",
      player
    })
  },
  addBenchPlayers(player) {
    dispatch({
      type: "ADD_BENCH_PLAYER",
      player
    })
  }
});


export default connect(mapStateToProps, mapDispachToProps) (Players);