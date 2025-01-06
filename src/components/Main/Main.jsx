import React, { useContext } from 'react';
import "./Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../Sidebar/Sidebar';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';
import { Context } from "../../context/Context.jsx";

const Main = () => {
    const { onSent, recentPrompt, showResult,setRecentPrompt , loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className='nav'>
                <p>chatbot</p>
                <FontAwesomeIcon icon={faUser} className='icon'/>
            </div>
            <div className='main-container'>
                {!showResult ? (
                    <>
                        <div className='greet'>
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt='Compass Icon' />
                            </div>
                            <div className='card'>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt='Bulb Icon' />
                            </div>
                            <div className='card'>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt='Message Icon' />
                            </div>
                            <div className='card'>
                                <p>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt='Code Icon' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                           <FontAwesomeIcon icon={faUser} className='icon' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon}></img>
                            {loading ? (<div className='loader'>
                                <hr></hr>   
                                <hr></hr>   
                                <hr></hr>   
                                <hr></hr>   
                            </div >):<>  <p dangerouslySetInnerHTML={{__html:resultData}}></p></>}
                          
                        </div>
                    </div>
                )}
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input 
                            type='text' 
                            placeholder='Enter a prompt here' 
                            onChange={(event) => setInput(event.target.value)} 
                            value={input} 
                        />
                        <div className='search-icons'>
                            <img src={assets.gallery_icon} alt='Gallery Icon' />
                            <img src={assets.mic_icon} alt='Microphone Icon' />
                           { input ? <img 
                                src={assets.send_icon} 
                                alt='Send Icon' 
                                onClick={() => onSent(input)} 
                            />
                          : null }
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so
                        double-check its responses. Your privacy & Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;