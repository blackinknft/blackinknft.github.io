import React from 'react';
import './Chats.css'
import Chat from "./Chat"
import { Link } from 'react-router-dom';

const Chats = () => {
    return (
        <div className="chats">
            <Link to="/chat/Hai">
                <Chat
                    name="Hải"
                    message="Heyy"
                    timestamp="30 seconds ago"
                    profilePic="https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/128014345_1553202274863231_9135378893586930090_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=B9QsEXRes9UAX9B53TO&_nc_ht=scontent.fhan1-1.fna&oh=11380c719998e307b67259d0fbf2b22b&oe=604022D0"
                />
            </Link>
            <Link to="/chat/tinbot">
                <Chat
                    name="Tinbot"
                    message="Welcome to Tinbot..."
                    timestamp="1 minute ago"
                    profilePic="https://tinder.com/static/tinder.png"
                />
            </Link>
        </div>
    );
};

export default Chats;