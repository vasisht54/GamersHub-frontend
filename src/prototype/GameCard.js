import React from 'react';
import {Link} from 'react-router-dom'

class GameCard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        game: this.props.game
    }

    render() {
        return (
            <div className="card">
                <Link to={`/search/details/${this.props.game.id}`}>
                    <img src={this.props.game.background_image} className="card-img-top"
                         style={{height: '150px'}} alt="No Image"/>
                </Link>
                <div className="card-body" key={this.props.game.id}>
                    <Link to={`/search/details/${this.props.game.id}`}>
                        {this.props.game.name}
                    </Link>
                </div>
            </div>
        )
    }
}

export default GameCard
