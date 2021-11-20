import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    let activeLinkStyles = {
        backgroundColor: 'red',
        textDecoration: 'underline'
    };

    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink activeClassName="active-navigation-link" to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeStyle={activeLinkStyles} to="/create-game">Create Game</NavLink>
                    <NavLink activeStyle={activeLinkStyles} to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeStyle={{textDecoration: 'underline'}} to="/login">Login</NavLink>
                    <NavLink activeStyle={{textDecoration: 'underline'}} to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;