import React from "react";
import {logout} from "../../service/UserService";

export class CommonComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        games: [],
        gameNameSearch: '',
        profile: JSON.parse(localStorage.getItem('profile')),
        component: 'games'
    }


    logout = () => {
        logout()
            .then(status => {
                // console.log(status)
                // })
                localStorage.clear()
                this.setState({
                                  // profile: {...this.state.profile, username: undefined}
                                  profile: null
                              })
                this.props.history.push('/gamebook')
            })

    }

    render() {
        return (
            <div>
                {console.log(this.state.profile)}
                <a href="/gamebook">Games</a>
                {/*<button style={{float:"right"}}*/}
                {/* className={'btn'}>*/}
                {/*    <a  href="/gamebook" className={'fa fa-home'}>*/}
                {/*    </a>*/}
                {/*</button>*/}
                {this.state.profile === null && <div className="col">
                    <a href="/login" className={'m-2'} style={{float: "right"}}>
                        login
                    </a>
                </div>}
                {this.state.profile !== null && <a
                    className={'m-2'}
                    href="/gamebook"
                    style={{float: "right"}}
                    onClick={this.logout}
                >
                    Logout
                </a>}

                {this.state.profile !== null &&
                 <a className={'m-2'} style={{float: "right"}}
                                                   href="/profile">
                    My Profile
                </a>}
                {this.state.profile === null && <div className="col">
                    <a href="/register" className={'m-2'} style={{float: "right"}}>
                        Register
                    </a>
                </div>}

                {this.state.profile !== null && <h1>Viewing Profile for {JSON.parse(
                    localStorage.getItem("profile")).username}</h1>}
            </div>
        )
    }
}

