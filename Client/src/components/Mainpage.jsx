import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import "../App.css";
import axios from 'axios';

const Mainpage = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        const fetchMemes = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/data");
                setMemes(response.data.data);
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchMemes();
    }, []);

    const MemeCard = ({ meme }) => {
        const [isHovering, setIsHovering] = useState(false);

        return (
            <div className="meme-card" key={meme._id}>
                <div className='layer-1' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                    <img className="meme-image" src={meme.image}/>
                </div>
                <div className='details-1' style={{ display: isHovering ? 'block' : 'none' }}>
                    <p className='username'>@{meme.user}</p>
                    <p className="title">{meme.memeTitle}</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='container'>
                <Navbar />
                <div className='Suggestions'>
                    <p id="sgst">Suggestions</p>
                    <button id='sgst-btn'>Technology</button>
                    <button id="sgst-btn">Gaming</button>
                    <button id="sgst-btn">Relationships</button>
                    <button id="sgst-btn">Sports</button>
                </div>
                <div className='filters'>
                    <button id="filter-btn">Pop Culture</button>
                    <button id="filter-btn">Animals and Pets</button>
                    <button id="filter-btn">Food</button>
                    <button id="filter-btn">Technology</button>
                    <button id="filter-btn">Gaming</button>
                    <button id="filter-btn">Relationships</button>
                    <button id="filter-btn">Sports</button>
                    <button id="filter-btn">School</button>
                    <button id="filter-btn">Corporate</button>
                </div>
            </div>
            <div className='meme-container'>
                {memes.map((meme) => (
                    <MemeCard key={meme._id} meme={meme} />
                ))}
            </div>
        </>
    );
};

export default Mainpage;