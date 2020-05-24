import React from 'react';
import { connect } from 'react-redux';

const StartingLineup = ({starters, changeStarter}) => {
  return (
    <section>
      <h2>Starting LineUp</h2>
      <div className="soccer-field">
        {
          starters.map(player => (
            <article className="starting-players" key={player.id}>
              <div>
                <img src={player.avatar} alt={player.name}/>
                <button onClick={() => changeStarter(player)}>X</button>
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
  starters: state.startingLineup
});

const mapDispachToProps = dispatch => ({
  changeStarter(player){
    dispatch({
      type: "CHANGE_PLAYER_STARTER",
      player
    })
  }
});
 
export default connect(mapStateToProps, mapDispachToProps) (StartingLineup);