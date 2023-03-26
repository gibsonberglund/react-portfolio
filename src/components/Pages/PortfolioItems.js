import React from 'react';
import BetReadImg from '../../assets/images/betterreadsscreenshot.png';
import CrypGifImg from '../../assets/images/crypto-gif-screenshot.png';
import PreWImg from '../../assets/images/prework-image.png';

function PortfolioItems() {
    return (
        <section className="work" id="work">
            <h2>My Projects</h2>
            <div className='portfoliocards'>
                <div className='project'>
                    <h2>Better Reads</h2>
                    <a href="https://even-better-reads.herokuapp.com/login">
                        <img src={BetReadImg} className="album" alt="thumbnail of better-reads search page"></img>
                    </a>
                    <p>A digital reading list and book search engine</p>
                    <a href="https://github.com/moxamadfarax/better_reads">Better Reads Github Repo</a>
                </div>
                <div className='project'>
                    <h2>Crypto-Gif</h2>
                    <a href="https://jajohnson0201.github.io/Crypto-MEMES/">
                        <img src={CrypGifImg} className="workimage" alt="screenshot of the Crypto-Gif website"></img>
                    </a>
                    <p>A meme-based cryptocurrency price tracker</p>
                    <a href="https://github.com/jajohnson0201/Crypto-MEMES">Crypto-Gif Github Repo</a>
                </div>
                <div className='project'>
                    <h2>Prework Study Guide</h2>
                    <a href="https://gibsonberglund.github.io/prework-study-guide/">
                        <img src={PreWImg} className="workimage" id="prework" alt="thumbnail of prework study guide"></img>
                    </a> 
                    <p>I'm not even going to use this</p>
                    <a href="https://github.com/gibsonberglund/prework-study-guide">Change this one</a>
                </div>
            </div>
        </section>
    )
    }

export default PortfolioItems;