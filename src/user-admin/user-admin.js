import React from 'react';
import UserListComponent from "./UserListComponent";
import "./user-admin.css"
import {Link} from "react-router-dom";
import {profile} from "../service/UserService";


export class UserAdmin extends React.Component{

    constructor(props) {
        super(props);
    }

    state = {
        profile: JSON.parse(localStorage.getItem("profile"))
    }

    componentDidMount() {
        console.log(this.state.profile)
    }

    render() {
        return (
            <div>
                {
                    this.state.profile !== null && this.state.profile.id === 31 &&
                        <div>
                            <header>
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <Link to={`/gamebook`}>
                                        <i className="fas fa-home"></i>
                                    </Link>
                                    <a className="navbar-brand collapse navbar-collapse wbdv-user-admin" href="#">User Admin</a>
                                    <div id="navbarSupportedContent">
                                        <div className="form-inline my-2 my-lg-0">
                                            <input
                                                onChange={this.props.updateForm}
                                                value={this.props.newUserName}
                                                className="form-control mr-sm-2 col-10 col-sm-8" type="search" placeholder="User Name" aria-label="Search"/>
                                            <button type="button" onClick={this.props.addUser} className="btn btn-outline-success my-2 my-sm-0 col-2 wbdv-button" type="submit"><i className="fas fa-plus-circle"></i></button>
                                        </div>
                                    </div>
                                </nav>
                            </header>
                            <div className="list-group-item wbdv-user-admin-header">
                                <ul className="list-group list-group-horizontal" style={{border: 0}}>
                                    <li className="list-group-item col-2 col-sm-2 col-md-2">User Name</li>
                                    <li className="list-group-item col-2 col-sm-2 col-md-2">First Name</li>
                                    <li className="list-group-item col-2 col-sm-2 col-md-2">Last Name</li>
                                    <li className="list-group-item col-3 col-sm-3 col-md-3">Date of Birth</li>
                                    <li className="list-group-item col-1 col-sm-1 col-md-1">User Id</li>
                                </ul>
                            </div>

                            <UserListComponent
                                deleteUser={this.props.deleteUser}
                                users={this.props.users}></UserListComponent>
                        </div>
                }
                {
                    this.state.profile !== null && this.state.profile.id !== 31 &&
                        <h2 style={{fontFamily: "Ariel"}}>Permission denied</h2>
                }
                {
                    this.state.profile === null &&
                        <h2 style={{fontFamily: "Ariel"}}>Permission denied</h2>
                }
            </div>
        )
    }


}


export default UserAdmin;

