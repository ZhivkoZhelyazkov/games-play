import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';
import GameDetails from './components/GameDetails';
import GameCatalog from './components/GameCatalog';


function App() {

    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <GameCatalog />,
        '/create-game': <CreateGame />,
        '/login': <Login />,
        '/register': <Register />,
    };

    const navigationChangeHandler = (path) => {
        setPage(path); 
    };

    return (
        <div id="box">

            <Header navigationChangeHandler={navigationChangeHandler} />

            <main id="main-content">
                { routes[page] || <h2>404 No Page Found!</h2> }
            </main>

        </div>
    );
}

export default App;
