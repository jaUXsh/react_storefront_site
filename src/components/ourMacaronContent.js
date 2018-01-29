import React from 'react';

const OurMacaronContent = () => {
    const pStyle = {
        padding: "0"
    };
    return (
        <div className="main-content">
            <div className="main-text">
                <h3>Our macarons are freshly made by hand</h3>
                <p>The vivid hues of our unique macarons reflect the natural flavors and essences that infuse the ganache filling of these delicious almost cookies - each has its own personality, and all of them are made to savour for their delicacy and unique character.</p>
                <h3>Classics</h3>

                <div className="main-text-with-background-image">
                    <ul>
                        <li>caribbean chocolate</li>
                        <li>coconut</li>
                        <li>columbian coffee</li>
                        <li>green tea</li>
                        <li>lemon</li>
                        <li>madagascar vanilla</li>
                        <li>passion fruit</li>
                        <li>rose</li>
                        <li>rasbery</li>
                        <li>tiffany blue</li>
                        <li>sicilian pistachio</li>
                        <li>sweet wedding almond</li>
                        <li>violet cassis</li>
                        <li>salted caramel</li>
                    </ul>
                </div>
                <p style={pStyle}>After purchase we recommend keeping macarons in the refrigerator; let them come to room temperature before serving - about 10 minutes. For best degustation, our macarons should be consumed within 3 days.</p>
            </div>
        </div>
    )
};


export default OurMacaronContent;