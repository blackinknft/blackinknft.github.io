import React from 'react';
import "./User.css";
import Avatar from "@material-ui/core/Avatar";
import { Link, useHistory } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const User = () => {
    const history = useHistory();
    const [{user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="user"> 
            <Avatar 
                className="user__avatar"
                src= {user ? "https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg" : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"}
                alt="User's avatar"></Avatar>
            <div className="user__info">
                <h1>{user ? user?.email.substring(0, user?.email.indexOf('@')).toUpperCase() : "Name"},   {user ? 19 : "Age"}   {user ? <VerifiedUserIcon fontSize="large" className="user__tick"></VerifiedUserIcon> : ""}</h1>    
            </div>
            <Link className="text-link" to={!user && "/login"} >
                <IconButton className="user__signin" onClick={handleAuthentication}>
                    <span>{user ? "SIGN OUT" : "SIGN IN"}</span>
                </IconButton>
            </Link>
        </div>
    );
};

export default User; 