import React from 'react';
import { connect } from 'react-redux';

const BrenchPlayers = ({benchPlayers, changeBench}) => {
  return (
    <section>
    <h2>Bench Players</h2>
    <div className="soccer-field">
      {
        benchPlayers.map(player => (
          <article className="bench-players" key={player.id}>
            <div>
              <img src={player.avatar} alt={player.name}/>
              <button onClick={() => changeBench(player)}>X</button>
            </div>
            <p>{player.name}</p>
          </article>
        ))
      }
    </div>
    </section>
  );
}

const mapStateToProps = state => ({
  benchPlayers: state.benchPlayers
});

const mapDispachToProps = dispatch => ({
  changeBench(player){
    dispatch({
      type: "CHANGE_BENCH_PLAYER",
      player
    })
  }
});


export default connect(mapStateToProps, mapDispachToProps) (BrenchPlayers);