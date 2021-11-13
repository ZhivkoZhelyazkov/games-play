import { useEffect, useState } from 'react';
import GameCard from './GameCard';

const GameCatalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setGames(result);
            });
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            { games.map(x => <GameCard game={x} />) }

            <h3 className="no-articles">No games yet</h3>
        </section>

    );
};

export default GameCatalog;