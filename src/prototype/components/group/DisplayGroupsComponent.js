import React from "react";
import {Link} from "react-router-dom";
import "../../Prototype.css"
import {findUsersInGroup} from "../../../service/GameGroupService";
import {findGameByIdFromGroup} from "../../../service/GameService";

export class DisplayGroupsComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        groupInfo: this.props.groupInfo,
        display: false,
        members: this.props.members,
        isMember: '',
        game: ''
    }

    // componentDidMount() {
    //     findGameByIdFromGroup(this.props.groupInfo.gameId).
    //     then(game =>
    //     this.setState({
    //         game:game
    //                   }))
    // }

    // componentDidMount() {
    //     findUsersInGroup(this.props.group.id)
    //         .then(members =>
    //                   // console.log(members)
    //                   this.setState({
    //                                     members: members,
    //                                     isMember: members.some(
    //                                         (member) => member.id === this.props.profile.id)
    //                                 })
    //         )
    //
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevState.members.length !== this.state.members.length) {
    //         this.setState({
    //                           members: this.props.members
    //                       })
    //     }
    // }

    render() {
        return (
            <div>
                <nav>
                    <ul className="topnav" id="dropDown">
                        <li style={{cursor: "pointer"}}>
                            <Link to={`/search`}>
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <br/>
                <form>
                    <div className="row">
                        <h4 className="col-2"
                            style={{float: "left"}}>Group Name :</h4>


                        {this.state.groupInfo.name !== null &&
                         <p className="form-control col-10">{this.state.groupInfo.name}</p>
                        }
                    </div>
                    <div className="row">
                        <h4 className="col-2"
                            style={{float: "left"}}>Game :</h4>


                        {this.props.game !== null &&
                         <p className="form-control col-10">{this.props.game.name}</p>
                        }
                    </div>
                    <div className="row">
                <h4 className="col-2"
                    style={{float: "left"}}>Description :</h4>


                    {this.state.groupInfo.description !== null &&
                     <p className="form-control col-10">{this.state.groupInfo.description}</p>
                    }
                    </div>
                </form>


                {this.state.display && <div>
                    <button onClick={() =>
                        this.setState({
                                          display: false
                                      })}
                            className="btn btn-secondary form-control">Hide Members
                    </button>

                    <ul className="list-group m-4">
                        <li className="list-group-item m-2">
                            <Link to={`/search/user/${this.props.admin.id}`}
                                  style={{float: "left"}}
                                  href=""> {this.props.admin.username}</Link>

                            <label style={{float:"right"}}
                                className="fa fa-star"></label>
                        </li>
                        {this.state.members.map((member) =>
                                                    <li key={member.id}
                                                        className="list-group-item m-2">
                                                        <Link to={`/search/user/${member.id}`}
                                                              style={{float: "left"}}
                                                              href=""> {member.username}</Link>
                                                        {/*{this.props.profile.id*/}
                                                        {/* === this.props.group.adminId &&*/}
                                                        {/* <button onClick={() => this.removeMember(*/}
                                                        {/*     member.id)}*/}
                                                        {/*         className="btn btn-danger"*/}
                                                        {/*         style={{float: "right"}}*/}
                                                        {/*         type="button">Remove*/}
                                                        {/* </button>*/}
                                                        {/*}*/}
                                                    </li>
                        )}


                    </ul>
                </div>}
                {!this.state.display && <div>
                    <button onClick={() =>
                        this.setState({
                                          display: true
                                      })}
                            className="btn btn-primary form-control">Show Members
                    </button>
                </div>}

            </div>
        )
    }

}
