import React from "react";
import {findGroupsByGroupId} from "../../../service/GameGroupService";
import {Link} from "react-router-dom";
import "../../Prototype.css"

export class GroupDetailsComponent extends React.Component {

    state = {
        group: ''
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        findGroupsByGroupId(this.props.groupId)
            .then(group => this.setState({
                                             group: group
                                         }))
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
                <div className="container">
                    <br/>
                    <h1>Group Details</h1>
                    <br/>
                    <form>
                        <div className="row">
                            <label className="col-3"
                                   style={{float: "left"}}>Group Name :</label>
                            <p className="form-control col-9">{this.state.group.name}</p>

                        </div>
                        <div className="row">
                            <label className="col-3"
                                   style={{float: "left"}}>Group Description :</label>
                            <p className="form-control col-9">{this.state.group.description}</p>

                        </div>
                        {console.log(this.state.group.usersList)}
                        <div className="row">
                            <label className="col-3"
                                   style={{float: "left"}}>Members
                                :</label>
                            <ul className="list-group col-9">
                                {this.state.group.groupAdmin !== undefined &&
                                <li className="list-group-item form-control" style={{float:"left"}}>
                                    <Link
                                        to={`/gamebook/user/${this.state.group.groupAdmin.id}`}
                                        style={{float: "left"}}
                                        href=""> {this.state.group.groupAdmin.username}</Link>
                                </li>

                                }
                                {this.state.group.usersList !== undefined &&
                                this.state.group.usersList.map(user =>
                                    <li className="list-group-item form-control">

                                        <Link
                                            to={`/gamebook/user/${user.id}`}
                                            style={{float: "left"}}
                                            href=""> {user.username}</Link>
                                    </li>

                                )}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

}
