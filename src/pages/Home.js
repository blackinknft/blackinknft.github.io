import React from 'react';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import "../css/Home.css";
import "../css/Header.css";
import {TwitterOutlined} from '@ant-design/icons';

const Home = () => {

    return (
        <div>
            <div className="header">
                <img className="header__logo" 
                        src="BlackInkAva.png" alt="icon">
                </img>

                <div className="header__nav">
                    <a href="#home">
                        <div className="header__option">
                            <span className="header__optionLineOne">Home</span>
                        </div>
                    </a>

                    <a href="#aboutus">
                        <div className="header__option">
                            <span className="header__optionLineOne">About Us</span>
                        </div>
                    </a>

                    <a href="#roadmap">
                        <div className="header__option">
                            <span className="header__optionLineOne">Road Map</span>
                        </div>
                    </a>

                    <a href="#faq">
                        <div className="header__option">
                            <span className="header__optionLineOne">FAQ</span>
                        </div>
                    </a>

                </div>

                <div className='header__icon'>
                    <a target="_blank" href="https://twitter.com/blackInk_NFT" rel="noopener noreferrer">
                        <div className="icon">
                            <TwitterOutlined style={{fontSize: '2.5vw', marginTop: '5%'}} />
                        </div>
                    </a>

                    <a target="_blank" href="https://discord.gg/RVNQSzqA" rel="noopener noreferrer">
                        <div className='icon'>
                            <img src='Discord.png' alt='Discord' style={{width: '2.5vw', marginTop: '15%'}}/>
                        </div>
                    </a>

                </div>
            </div>

            <div className="home"> 
                <div id="home" className='bg'>
                    <img src="BlackInkWebBg.png" alt="background"></img>   
                </div>

                <Row justify="space-around" style={{marginBottom: '1.5vh', marginTop: '7vh'}}>
                    <div id="aboutus" className='BigFont'>About Us</div>
                </Row>

                <Row justify="space-around" style= {{marginBottom: '14vh'}}>
                    <div className='SmallFont'>                            
                        Black Ink is an exclusive NFT collection of 3000+ ink splatters. Holders of black ink will gain access to a unique auto minter, aiming to create the most efficient mint process possible.
                    </div>
                </Row>

                <img id="roadmap" src="BlackInkRoadMap.png" alt="roadmap"></img>

                <Row justify="space-around" style={{marginBottom: '1.5vh', marginTop: '7vh'}}>
                    <div id="faq" className='BigFont'>FAQ</div>
                </Row>

                <Row justify="space-around" style={{marginBottom: '7vh'}}>
                    <Col span={6}>
                            <div className='CardQ'> 
                                What more do holders get?
                            </div>

                            <div className='CardA'> 
                                At Black Ink we prioritize our community. Our goal is to create a cartridge inks where we can all share ideas with one another, and ride to the moon together. Your thoughts are our actions. We are committed to adding long term value to our holders. 
                            </div>
                    </Col>
                    <Col span={6}>
                            <div className='CardQ'> 
                                What is the minting cost?
                            </div>

                            <div className='CardA'>
                                Each black ink will cost 1.1  sol
                            </div>
                    </Col>
    
                </Row>
            
            </div>    
        </div>
    );
};

export default Home;