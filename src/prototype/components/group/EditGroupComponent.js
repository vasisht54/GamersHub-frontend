import React from "react";
import {Link} from "react-router-dom";
import {findUsersInGroup, groupUpdate} from "../../../service/GameGroupService";
import {getAllGames} from "../../../service/GameService";
import "../../Prototype.css"

export class EditGroupComponent extends React.Component {

    state = {
        display: false,
        members: this.props.members,
        groupInfo: this.props.group,
        game:this.props.game,
        games:[]
    }

    componentDidMount() {

        getAllGames()
            .then(games => this.setState({
                                             games: games
                                         }))
        this.setState({
            game:this.props.game
                      })
    }

    render() {
        return (
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
                <div className="row" style={{float: "right"}}>
                    <button type="button"
                            className="btn"
                            onClick={() => this.props.deleteGroup(
                                this.state.groupInfo.id)

                            }>
                        X
                    </button>
                </div>
                <br/>
                    <br/>
                <form>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Group Name</label>
                        <div className="col-sm-10">
                            <input
                                onChange={(e) => this.setState({
                                                                   groupInfo: {
                                                                       ...this.state.groupInfo,
                                                                       name: e.target.value
                                                                   }
                                                               })}
                                value={this.state.groupInfo.name}
                                className="form-control wbdv-field wbdv-username"
                                placeholder="Group Name"/>
                        </div>
                    </div>

                    {/*<div className="form-group row">*/}
                    {/*    <label className="col-sm-2 col-form-label">Game</label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <select*/}
                    {/*            onChange={(e) =>this.getGameId(e.target.value)}*/}
                    {/*            value={this.state.game.name}*/}
                    {/*            className="form-control wbdv-field wbdv-password"*/}
                    {/*            placeholder="Id">*/}

                    {/*            {this.state.games.map(game =>*/}
                    {/*                                      <option>{game.name}</option>*/}
                    {/*            )}*/}

                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Group Description</label>
                        <div className="col-sm-10">
                            <textarea
                                onChange={(e) => this.setState({
                                                                   groupInfo: {
                                                                       ...this.state.groupInfo,
                                                                       description: e.target.value
                                                                   }
                                                               })}
                                value={this.state.groupInfo.description}
                                className="form-control wbdv-field wbdv-username"
                                placeholder="Description"/>

                        </div>
                    </div>

                    {this.state.display && <div>
                        <button onClick={() =>
                            this.setState({
                                              display: false
                                          })}
                                className="btn btn-secondary form-control">Hide Members
                        </button>

                        <ul className="list-group m-4">
                            {this.state.members.length > 0 &&
                             this.state.members.map((member) =>
                                                        <li className="list-group-item m-2">
                                                            <Link
                                                                to={`/gamebook/profile/${member.id}`}
                                                                style={{float: "left"}}
                                                                href=""> {member.username}</Link>
                                                            <button
                                                                onClick={() => this.props.deleteMemberFromGroup(member.id)
                                                                    .then(this.setState({
                                                                        members: this.state.members.filter(
                                                                            user => member.id !== user.id)
                                                                                        }))
                                                                }
                                                                className="btn btn-danger"
                                                                style={{float: "right"}}
                                                                type="button">Remove
                                                            </button>
                                                        </li>
                             )}


                        </ul>
                    </div>}

                    {!this.state.display && <div>
                        <button onClick={() =>
                            this.setState({
                                              display: true
                                          })
                        }
                                className="btn btn-primary form-control">Show Members
                        </button>
                    </div>}
                    <br/>
                    <button onClick={() =>
                        this.props.updateGroup(this.state.groupInfo, this.state.groupInfo.id)}
                            className="btn btn-success form-control"
                            type="button"
                    >Update form
                    </button>

                </form>
            </div>
        )
    }

}
