import { useEffect, useState } from 'react';
import GameCard from './GameCard';
import * as gameService from '../../services/gameService';


const GameCatalog = () => {
    const [games, setGames] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        setTimeout(() => {
            gameService.getAll()
                .then(result => {
                    setGames(result);
                    // setLoading(false);
                })
        }, 1000);
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            { games.length > 0
                ? games.map(x => <GameCard key={x._id} game={x} />)
                : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    );
};

export default GameCatalog;