import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import {TwitterOutlined} from '@ant-design/icons';

const Header = () => {

    return (
        <div className="header">
            <img className="header__logo" 
                    src="BlackInkAva.png" alt="icon">
            </img>

            <div className="header__nav">
                <Link to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Home</span>
                    </div>
                </Link>

                <Link to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">About Us</span>
                    </div>
                </Link>

                <Link to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Road Map</span>
                    </div>
                </Link>

                <Link to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">FAQ</span>
                    </div>
                </Link>

                <Link to="/connect">
                    <div className="header__option">
                        <span className="header__optionLineOne">Connect to Phantom</span>
                    </div>
                </Link>

            </div>

            <div className='header__icon'>
                <a target="_blank" href="https://twitter.com/blackInk_NFT" rel="noopener noreferrer">
                    <div className="icon">
                        <TwitterOutlined style={{fontSize: '3vh', marginTop: '2%'}} />
                    </div>
                </a>

                <a target="_blank" href="https://discord.gg/RVNQSzqA" rel="noopener noreferrer">
                    <div className='icon'>
                        <img src='Discord.png' alt='Discord' style={{width: '3.5vh', marginTop: '10%'}}/>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default Header;