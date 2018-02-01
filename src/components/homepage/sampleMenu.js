import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { WindowResizeListener } from 'react-window-resize-listener';

import macaronSamples from './macaronSamples';
import './carousel.css';


class SampleMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 1000
        }
    }


    render() {
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

        const { width } = this.state;

        if (width < 1000) {
            return (
                <div>
                    <WindowResizeListener onResize={windowSize => {
                        this.setState({ width: windowSize.windowWidth });
                    }} />
                    <Carousel showStatus={false} infiniteLoop className="weekly-menu-container slider">
                        {macaronDailySamples}
                    </Carousel>
                </div>
            )
        } else {
            return (
                <section className="weekly-menu-container">
                    <WindowResizeListener onResize={windowSize => {
                        this.setState({ width: windowSize.windowWidth });
                    }} />
                    {macaronDailySamples}
                </section>
            )
        }

    }

};

export default SampleMenu;