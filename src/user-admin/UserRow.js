import React from 'react';
import {Link} from 'react-router-dom'
import {updateUser} from "../service/UsersService";

class UserRow extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        user: this.props.user
    }

    updateUser = () =>
        updateUser(this.state.user.id, this.state.user)
            .then(() => this.setState({
                editing: false
            }))

    render() {
        return (
            <ul className="list-group list-group-horizontal wbdv-user-row">
                <li className="list-group-item col-2 col-sm-2 col-md-2">
                    {
                        !this.state.editing &&
                        <Link to={`/search/user/${this.state.user.id}`} className="wbdv-row wbdv-title">
                            {this.state.user.username}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input value={this.state.user.username} className="wbdv-editFld"
                           onChange={(e) => this.setState({
                               user: {
                                   ...this.state.user,
                                   username: e.target.value
                               }
                           })}/>
                    }
                </li>
                <li className="list-group-item col-2 col-sm-2 col-md-2">
                    {
                        !this.state.editing &&
                        <span className="wbdv-row wbdv-title">
                            {this.state.user.firstName}
                        </span>
                    }
                    {
                        this.state.editing &&
                        <input className="wbdv-editFld"
                               value={this.state.user.firstName}
                               onChange={(e) => this.setState({
                                   user: {
                                       ...this.state.user,
                                       firstName: e.target.value
                                   }
                               })}/>
                    }
                </li>
                <li className="list-group-item col-2 col-sm-2 col-md-2">
                    {
                        !this.state.editing &&
                        <span className="wbdv-row wbdv-title">
                            {this.state.user.lastName}
                        </span>
                    }
                    {
                        this.state.editing &&
                        <input className="wbdv-editFld"
                               value={this.state.user.lastName}
                               onChange={(e) => this.setState({
                                   user: {
                                       ...this.state.user,
                                       lastName: e.target.value
                                   }
                               })}/>
                    }
                </li>
                <li className="list-group-item col-3 col-sm-3 col-md-3">
                    {
                        !this.state.editing &&
                        <span className="wbdv-row wbdv-title">
                            {this.state.user.dob !== null && this.state.user.dob.slice(0,10)}
                        </span>
                    }
                    {
                        this.state.editing &&
                        <input type="date" className="wbdv-editFld"
                               value={this.state.user.dob !== null && this.state.user.dob.slice(0,10)}
                               onChange={(e) => this.setState({
                                   user: {
                                       ...this.state.user,
                                       dob: e.target.value
                                   }
                               })}/>
                    }
                </li>
                <li className="list-group-item col-1 col-sm-1 col-md-1">
                    {this.state.user.id}
                </li>
                <li className="list-group-item col-md-2 col-sm-2 col-2">
                    {
                        this.state.editing &&
                        <button className="wbdv-row wbdv-button"
                                onClick={this.updateUser}>
                            <i className="fas fa-check"></i>
                        </button>
                    }
                    {
                        !this.state.editing &&
                        <div>
                            <button className="wbdv-row wbdv-button"
                                    onClick={() => {
                                        this.setState({
                                            editing: true
                                        })
                                    }}>
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button onClick={() => this.props.deleteUser(this.state.user)} className="wbdv-row wbdv-button wbdv-delete">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    }
                </li>
            </ul>
        )
    }
}


export default UserRow

