import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';

const Players = ({players, addStarting, addBenchPlayers}) => {

  const gridJugadores = createRef();

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, []);

  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('player')
        let itemsLength = items.length
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }
  
  return (
    <section>
      <h2>Players</h2>
      <div className="wrap-Players">
      <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
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