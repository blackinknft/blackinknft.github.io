import React, {useState} from 'react';
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar";

const Tinbot = () => {
    const [input, setInput] = useState([]);
    const [messages, setMessage] = useState([
        {
            name: 'Tinbot',
            image: 'https://tinder.com/static/tinder.png',
            message: 'Welcome to Tinbot. This is a web-based application project built by Tung Tran, Tinder-like but with beautiful, fun and kind-of-smart bots. If you are lonely, having no one to talk to, definitely check out our boys.',
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessage([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You are entering the conversation with our Tinbot</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

                <form className="chatScreen__input">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message..."
                        type='text'
                    ></input>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    );
};

export default Tinbot;