import React from 'react';
import './Prototype.css'
import gameService from '../service/GameService'
import GameCard from './GameCard'
import {GroupsComponent} from "./components/group/GroupsComponent";
import {logout} from "../service/UserService";
import {Link} from "react-router-dom";


export default class Prototype extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        games: [],
        gameNameSearch: '',
        profile: JSON.parse(localStorage.getItem("profile")),
        component: 'games'
    }

    componentDidMount() {
        let searchTitle = this.props.match.params.gameNameSearch
        if (searchTitle !== undefined) {
            gameService.findGameByName(searchTitle)
                .then(results => this.setState({
                    games: results.results,
                    gameNameSearch: searchTitle
                }))
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.gameNameSearch !== this.props.match.params.gameNameSearch) {
            this.findGamesByName(this.props.match.params.gameNameSearch)
        }
    }

    findGamesByName = (title) =>
        gameService.findGameByName(title)
            .then((results) => {
                this.setState({
                    games: results.results,
                });
            })

    logout = () => {
        logout()
            .then(() => {
                localStorage.clear();
                this.setState({
                    profile: null
                })
                this.props.history.push('/search')
            })

    }


    render() {
        return (
            <div>
                <nav>
                    <ul className="topnav" id="dropDown">
                        <li style={{cursor: "pointer"}}>
                            <Link to={'/search'} className="nav-link" onClick={() => {
                                    this.setState({
                                        component: 'games',
                                        gameNameSearch: ''
                                    });
                                }
                            }>
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                        <li style={{cursor: "pointer"}}>
                            <a className="nav-link" onClick={() =>
                                this.setState({
                                    component: 'groups'
                                })
                            }>
                                Groups
                            </a>
                        </li>
                        {this.state.profile !== null &&
                            <span>
                                <li className="topnav-right" style={{float: "right", cursor: "pointer"}}>

                                    <a className="nav-link"
                                       onClick={this.logout}>
                                        Logout
                                    </a>
                                </li>
                                <li className="topnav-right" style={{float: "right"}}>
                                    <a href="/profile" className="nav-link">
                                        My Profile
                                    </a>
                                </li>
                                {
                                    this.state.profile !== null && this.state.profile.id === 31 &&
                                    <li className="topnav-right" style={{float: "right"}}>
                                        <a href="/user-admin" className="nav-link">
                                            Web-Admin
                                        </a>
                                    </li>
                                }
                            </span>
                        }
                        {this.state.profile === null &&
                            <span>
                                <li className="topnav-right" >
                                    <a href="/register" className="nav-link" className="nav-link">
                                        Register
                                    </a>
                                </li>
                                <li className="topnav-right">
                                    <a href="/login" className="nav-link">
                                        login
                                    </a>
                                </li>
                            </span>
                        }
                    </ul>
                </nav>

                {
                    this.state.component === "games" &&
                    <div className="container">
                        <div className="game-search-box">
                            <input
                                type="text"
                                placeholder="Search Game (Click 'Enter')"
                                onKeyPress={(e) => {
                                    if (e.which === 13) {
                                        this.props.history.push(
                                            `/search/${this.state.gameNameSearch}`);
                                        this.props.history.go(0)
                                    }
                                }}
                                value={this.state.gameNameSearch || ''}
                                onChange={(e) =>
                                    this.setState({
                                        gameNameSearch: e.target.value
                                    })}
                                className="game-search-input"/>

                                <i className="fas fa-search game-search-icon"
                                   onClick={() => {
                                       this.props.history.push(
                                           `/search/${this.state.gameNameSearch}`);
                                       this.props.history.go(0)
                                   }}></i>
                        </div>

                        <div
                            className="game-grid row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                            {
                                this.state.games && this.state.games.length > 0
                                && this.state.games.map(game =>
                                    <div key={game.id} className="col mb-4">
                                        <GameCard game={game}/>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                }
                {this.state.component === 'groups' &&
                    <GroupsComponent
                        profile={this.state.profile}
                    />
                }


            </div>
        )
    }
}
