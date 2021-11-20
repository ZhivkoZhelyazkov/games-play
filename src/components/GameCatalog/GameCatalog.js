import { useEffect, useState, lazy, Suspense } from 'react';
// import GameCard from './GameCard';
import * as gameService from '../../services/gameService';

const GameCard = lazy(() => import('./GameCard'));

const GameCatalog = ({
    navigationChangeHandler
}) => {
    const [games, setGames] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        setTimeout(() => {
            gameService.getAll()
                .then(result => {
                    setGames(result);
                    // setLoading(false);
                });
        }, 1000);
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <Suspense fallback={<p>Loading...</p>}>
                {games.length > 0
                    ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No games yet</h3>
                }
            </Suspense>

        </section>
    );
};

export default GameCatalog;