import React from 'react';

function Card({ data }) {
    const scroll = (direction) => {
        const container = document.querySelector('.containerop');
        container.scrollBy({ top: direction === 'up' ? -100 : 100, behavior: 'smooth' });
    };

    return (<>
        <div className="card-container">
            {/*<button onClick={() => scroll('up')} className="scroll-button up-button">▲</button>*/}
            <div className="container">
                {data.map((item, index) => (
                    <div key={index} className="card8">
                        <div className="image-black" style={{ backgroundImage: `url(${item.link})` }}></div>
                        <div className="card-content8">
                            <h2>{item.title}</h2>
                            <p>{item.location}</p>
                            <div className="wrap-btn8">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/*<button onClick={() => scroll('down')} className="scroll-button down-button">▼</button>*/}
        </div>
        </>
    );
}

export default Card;
