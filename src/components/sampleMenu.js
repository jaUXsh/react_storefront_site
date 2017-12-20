import React from 'react';

import macaronSamples from './macaronSamples';



const SampleMenu = () => {
    const macaronDailySamples = macaronSamples.map( (item, index) => {
        return (
            <article key={index} className={item.dayClass}>
                <div className="not-colored-section">
                    <h4>{item.day}</h4>
                    <p>{item.time}</p>
                </div>
                <div className="not-colored-div"><p>{item.flavor1}</p><img src={item.macImg1} alt={item.macAltText1}/></div>
                <div className="colored-div"><p>{item.flavor2}</p><img src={item.macImg2} alt={item.macAltText2}/></div>
            </article>
        )
    } );
    return (
        <section className="weekly-menu-container">
            {macaronDailySamples}
        </section>
    )
};

export default SampleMenu;