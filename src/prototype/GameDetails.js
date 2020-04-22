import React from "react";
import "./gameDetails.css"
import "./Prototype.css"
import gameService from '../service/GameService.js'
import gameGroupService from '../service/GameGroupService.js'
import {Link} from "react-router-dom";


export default class GameDetails extends React.Component {

    state = {
        game: {},
        gameGroups: []
    }

    componentDidMount() {
        const gameId = this.props.match.params.gameId
        gameService.findGameById(gameId)
            .then(game => {
                this.setState({
                    game: game
                });
                gameGroupService.findGroupsByGameName(game.name)
                    .then(gameGroups => {
                        this.setState({
                            gameGroups: gameGroups
                        });
                    })
            })

    }


    render() {
        return(
            <div>
                <nav>
                    <ul className="topnav" id="dropDown">
                        <li style={{cursor: "pointer"}}>
                            <Link to={`/gamebook`}>
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <h1 style={{marginBottom: 30}}>{this.state.game.name}</h1>
                    <div className="row">
                        <img className="game-img col-4 col-md-6 col-sm-12" src={this.state.game.background_image}/>
                        <div className="col-8 col-md-6 col-sm-12">
                            <h3>Game Description</h3>
                            <p className="game-description">{this.state.game.description}</p>
                        </div>
                    </div>

                    <h3 className="game-groups-title">
                        Groups
                    </h3>

                    <ul className="list-group">
                        {
                            this.state.gameGroups && this.state.gameGroups.length > 0
                            && this.state.gameGroups.map(group =>
                                <li key={group.id} className="list-group-item">
                                    <Link to={`/gamebook/groups/${group.id}`}
                                          style={{float: "left"}}
                                          href=""> {group.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
