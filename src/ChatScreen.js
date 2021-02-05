
import React, {useState} from 'react';
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
    const trigger = [
        //0 
        ["hi", "hey", "hello", "yo", "yoo"],
        //1
        ["how are you", "how are things", "how are you tooday", "how are you doing"],
        //2
        ["what is going on", "what is up", "wassup"],
        //3
        ["happy", "good", "well", "fantastic", "cool"],
        //4
        ["bad", "bored", "tired", "sad"],
        //5
        ["tell me a story", "tell me a joke"],
        //6
        ["thanks", "thank you", "tks", "thank u", "thank", "thank Hai"],
        //7
        ["bye", "good bye", "goodbye", "pipi", "pai", "see ya"],
        //8
        ["want to come to my place", "visit me", "hangout"],
        //9
        ["want to fuck", "want to be my fwb", "have sex", "sex", "fwb", "fuck"],
        //10
        ["great", "fine", "awesome", "ok"],
        //11
        ["food", "eat", "drink"],
        //12
        ["what is your type"]
    ];
        
    const reply = [
        //0 
        ["Hello!", "Hi!", "Hey!", "Hi there!", "Hello lady"], 
        //1
        [
            "Fine, how are you?",
            "Pretty well, how are you?",
            "Fantastic, how are you?"
          ],
        //2
        [
            "Nothing much",
            "Exciting things!"
          ],
        //3
        ["Glad to hear it"],
        //4
        ["Why?", "Cheer up buddy"],
        //5
        ["What about?", "Once upon a time..."],
        //6
        ["You're welcome", "No problem"],
        //7
        ["Goodbye", "See you later"],
        //8
        ["maybe one day I'll go", "hmmm let me think about that"],
        //9
        ["we barely know each other", "slow down we just met"],
        //10
        ["sweet", "sounds good", "perfect"],
        //11
        ["take me to the restaurant pls"],
        //12
        ["I like someone who is funny and cares about me"]
    ];
        
    const alternative = [
          "You sound like my mom",
          "Keep talking I am still listening...",
          "Be careful with what you text?",
          "You are being weird :/",
          "I don't see why we are talking about this",
          "Tell Tùng to train me more, I am not smart enough to understand that",
          "I think I am falling in love"
    ];

    const robot = ["How do you do, fellow human", "I am not a bot, I am half human actually"];

    const compare = (triggerArray, replyArray, text) => {
        let item;
        for (let x = 0; x < triggerArray.length; x++) {
          for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
              item = replyArray[x][Math.floor(Math.random() * replyArray[x].length)];
            }
          }
        }
        return item;
      }

    const handleAnswer = (input) => {
        let product;
        let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

        text = text.replace(/ a /g, " ")
                    .replace(/i feel /g, "")
                    .replace(/whats/g, "what is")
                    .replace(/please /g, "")
                    .replace(/ please/g, "");

        if (compare(trigger, reply, text)) {
            product = compare(trigger, reply, text);
        } else if (text.match(/bot/gi)) {
            product = robot[Math.floor(Math.random() * robot.length)];
        } else {
            product = alternative[Math.floor(Math.random() * alternative.length)];
        }

        return product;
    }

    const [input, setInput] = useState([]);
    const [messages, setMessage] = useState([
        {
            name: 'Hải',
            image: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/128014345_1553202274863231_9135378893586930090_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=B9QsEXRes9UAX9B53TO&_nc_ht=scontent.fhan1-1.fna&oh=11380c719998e307b67259d0fbf2b22b&oe=604022D0',
            message: 'Heyy',
        },
        {
            name: 'Hải',
            image: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/128014345_1553202274863231_9135378893586930090_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=B9QsEXRes9UAX9B53TO&_nc_ht=scontent.fhan1-1.fna&oh=11380c719998e307b67259d0fbf2b22b&oe=604022D0',
            message: 'I am Hải. I am a bot so I still have a lot to learn, but I will try my best to be a good company of yours.',
        },
        {
            name: 'Hải',
            image: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/128014345_1553202274863231_9135378893586930090_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=B9QsEXRes9UAX9B53TO&_nc_ht=scontent.fhan1-1.fna&oh=11380c719998e307b67259d0fbf2b22b&oe=604022D0',
            message: 'You look kinda cute btw ;)',
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        const answer = handleAnswer(input);
        setMessage([...messages, {message: input},
        {name:messages[0].name, image:messages[0].image, message: answer}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with {messages[0].name} on 4/2/2021</p>
            <div className="chatScreen__messages">
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
            </div>
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

export default ChatScreen;