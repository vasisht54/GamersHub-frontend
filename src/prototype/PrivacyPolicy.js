import React from "react";
import {Link} from "react-router-dom";




export default class PrivacyPolicy extends React.Component{


    render() {
        return(
            <body >

            <div className="container privacy-policy">
                <h1 style={{backgroundColor: "#e3f2fd"}}>GamersHub Privacy Policy</h1>
                <p>
                    The desire of GamersHub is to provide a place that people can gather to find other individuals with similar interests to play games together.
                    Our website offers the opportunity to form groups and enjoy their favorite games with other people. This requires us to keep track of various pieces of information that you, the user, will provide to us when you make an account and as you use our website. In order to offer the best experience for you we need to keep track of your username, password, date of birth, first name, last name, email address, games, and game groups you have been a part of.
                </p>
                <p>
                    Tracking the username is for the purpose of identifying you, the user, on our website. This allows you to join groups and keep track of what groups you’ve joined. It also allows us and other users to identify you on our website without having to share your first and last name. This allows you to keep a measure of anonymity when joining groups and interacting with other users.
                    Additionally, the username in conjunction with your password allows us to securely allow you to log in and out of our website. We keep track of the date of birth to restrict the games a user can play if they are too young to play games of a certain ESRB rating. While the first name and last name are not strictly necessary on the website, it is very useful to keep track of this information to help further identify a user should we have to reset information for a user on behalf of the user. The first and last name can be used to confirm the identity of a user. The email address is necessary to allow us to communicate to you the user, should there be an update, new features, or anything in between we want to keep you informed!
                </p>
                <p>
                    In addition to keeping track of the user’s information that would normally be part of a profile, we also keep track of information that is more website specific.
                    Namely, the groups a member has been a part of and the game those groups played. This information helps us keep track of what games are being played and who is playing with who. This allows us to keep different users connected through the games they play together!
                </p>
                <p>
                    We at GamersHub believe that privacy is paramount. As such only your Username and groups you are an administrator of appear on your profile page, your private information is YOURS. We don’t share it and only keep track of it to try and benefit you.
                </p>
            </div>
            </body>

        )
    }
}
