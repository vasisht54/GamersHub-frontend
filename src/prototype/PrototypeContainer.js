import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Prototype from "./Prototype";

import GameDetails from "./GameDetails";
import {findAllUsers, createUser, deleteUser} from "../service/UsersService";
import Register from "./components/user/Register";
import {Profile} from "./components/user/Profile";
import {Login} from "./components/user/Login";
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux'
import Home from "./components/Home";
import profileReducer from "./reducers/ProfileReducer";
import {CreateGroupComponent} from "./components/group/CreateGroupComponent";
import UserAdmin from "../user-admin/user-admin";
import {UserProfile} from "./components/group/UserProfile";
import {GroupDetailsComponent} from "./components/group/GroupDetailsComponent";


export class PrototypeContainer extends React.Component {

    state = {
        newUserName: '',
        users: []
    }

    componentDidMount = async () => {
        const users = await findAllUsers()
        this.setState({
            users: users
        })
    }


    addUser = async () => {
        const newUser = await createUser({
            username: this.state.newUserName,
            dob: '',
            firstName: '',
            lastName: ''
        })
        this.setState(prevState => {
            return ({
                users: [
                    ...prevState.users,
                    newUser
                ]
            })
        })
    }




    deleteUser = (user) =>
        deleteUser(user.id)
            .then(() =>
                this.setState(prevState => {
                return ({
                    users: prevState
                        .users
                        .filter(function(u) {
                            return u.id !== user.id
                        })
                })
            }))




    updateForm = (e) =>
        this.setState({
            newUserName: e.target.value
        })


    render () {
        return (
            <div>
                <Router>

                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <Home/>
                        }
                    />

                    <Route
                        path="/user-admin"
                        exact={true}
                        render = {() =>
                            <UserAdmin
                                updateForm={this.updateForm}
                                newUserName={this.state.newUserName}
                                addUser={this.addUser}
                                deleteUser={this.deleteUser}
                                users={this.state.users}
                            />}
                    />

                    <Route
                        path="/gamebook"
                        exact={true}
                        render = {(props) =>
                            <Prototype
                                {...props}
                            />}
                    />

                    <Route
                        path="/register"
                        exact={true}
                        component={Register}
                    />

                    <Route
                        path="/login"
                        exact={true}
                        component={Login}
                    />
                    <Route
                        path="/gamebook/profile/:userId"
                        exact={true}
                        render = {(props) =>
                        <UserProfile
                            userId={props.match.params.userId}
                        />}
                    />

                    <Route
                        path="/gamebook/groups/:groupId"
                        exact={true}
                        render = {(props) =>
                            <GroupDetailsComponent
                                groupId={props.match.params.groupId}
                            />}
                    />


                    <Route
                        path="/profile"
                        exact={true}
                        component={Profile}
                    />

                    <Route
                        path="/creategroup"
                        exact={true}
                        render = {(props) =>
                            <CreateGroupComponent
                                {...props}
                            />}
                    />

                    <Route
                        path="/gamebook/:gameNameSearch"
                        exact={true}
                        render={(props) =>
                            <Prototype
                                {...props}
                                gameNameSearch={props.match.params.gameNameSearch}
                            />
                        }
                    />

                    <Route
                        path="/gamebook/game/:gameId"
                        exact={true}
                        component={GameDetails}
                    />
                </Router>
            </div>
        )
    }
}
