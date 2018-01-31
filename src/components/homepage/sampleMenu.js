import React from 'react';

import macaronSamples from './macaronSamples';



const SampleMenu = () => {
    const macaronDailySamples = macaronSamples.map((item, index) => {
        return (
            <article key={index} className={`${item.dayClass} sample-day`}>
                <div className="daily-sample-top">
                    <h4>{item.day}</h4>
                    <p>{item.time}</p>
                </div>
                <div className="daily-sample-mid"><p>{item.flavor1}</p><img src={item.macImg1} alt={item.macAltText1} /></div>
                <div className="daily-sample-bot"><p>{item.flavor2}</p><img src={item.macImg2} alt={item.macAltText2} /></div>
            </article>
        )
    });
    return (
        <section className="weekly-menu-container slider">
            {macaronDailySamples}
        </section>
    )
};

export default SampleMenu;