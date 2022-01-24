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
                    <Col span={9}>
                        <div className='SmallFont'>                            
                            Black Ink is a collection of 999 NFTs on the Solana blockchain.  You will gain access to our minting, sniping and AI bots. Also, holders will verify to be able to join the Black Ink DAO. Things will get exciting from then on...
                        </div> 
                    </Col>

                    <Col span={9}>
                        <img src="NewCollection.png" alt="collection"></img>
                    </Col>
                </Row>

                <img id="roadmap" src="BlackInkRoadMap.png" alt="roadmap"></img>

                <Row justify="space-around" style={{marginBottom: '1.5vh', marginTop: '7vh'}}>
                    <div id="faq" className='BigFont'>FAQ</div>
                </Row>

                <Row justify="space-around" style={{marginBottom: '7vh'}}>
                    <Col span={6}>
                            <div className='CardQ'> 
                                Supply?
                            </div>

                            <div className='CardA'> 
                                Given the fact we want our DAO to be as tightknit as possible there will only be 999 Black Ink NFTs available at mint.
                            </div>
                    </Col>
                    <Col span={6}>
                            <div className='CardQ'> 
                                What is the mint price?
                            </div>

                            <div className='CardA'>
                                We would like to reward early supporters and so our mint price will be 0.7 SOL for the first 400 (Whitelist) This may change, then 1 SOL for the remaining 699 NFTs. 
                            </div>
                    </Col>
                </Row>

                <Row justify="space-around" style={{marginBottom: '7vh'}}>

                    <Col span={6}>
                            <div className='CardQ'> 
                                Mint Date?
                            </div>

                            <div className='CardA'>
                                We have yet to decide on a mint date, largely due to current market and SOL conditions. We all update the discord on that decision in due course.
                            </div>
                    </Col>

                    <Col span={6}>
                            <div className='CardQ'> 
                                Wen Secondary?
                            </div>

                            <div className='CardA'>
                                We will be putting in an application to be listed solely on Magic Eden, we understand the traffic that is seen on ME is far greater than any other platform.
                            </div>
                    </Col>
                </Row>
            
            </div>    
        </div>
    );
};

export default Home;