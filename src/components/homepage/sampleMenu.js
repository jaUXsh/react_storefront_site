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

        if (width <= 1000 && width > 400) {
            // create for loop to have multiple articles in one index, return new arr
            const set1Arr = [];
            const set2Arr = [];
            const set3Arr = [];
            for (let index = 0; index < macaronSamples.length; index++) {
                if (index < 3) {
                    set1Arr.push(
                        <article key={index} className={`${macaronSamples[index].dayClass} sample-day`}>
                            <div className="daily-sample-top">
                                <h4>{macaronSamples[index].day}</h4>
                                <p>{macaronSamples[index].time}</p>
                            </div>
                            <div className="daily-sample-mid"><p>{macaronSamples[index].flavor1}</p><img src={macaronSamples[index].macImg1} alt={macaronSamples[index].macAltText1} /></div>
                            <div className="daily-sample-bot"><p>{macaronSamples[index].flavor2}</p><img src={macaronSamples[index].macImg2} alt={macaronSamples[index].macAltText2} /></div>
                        </article>)
                } else if (index >= 3 && index < 6) {
                    set2Arr.push(
                        <article key={index} className={`${macaronSamples[index].dayClass} sample-day`}>
                            <div className="daily-sample-top">
                                <h4>{macaronSamples[index].day}</h4>
                                <p>{macaronSamples[index].time}</p>
                            </div>
                            <div className="daily-sample-mid"><p>{macaronSamples[index].flavor1}</p><img src={macaronSamples[index].macImg1} alt={macaronSamples[index].macAltText1} /></div>
                            <div className="daily-sample-bot"><p>{macaronSamples[index].flavor2}</p><img src={macaronSamples[index].macImg2} alt={macaronSamples[index].macAltText2} /></div>
                        </article>)
                } else if (index === 6) {
                    set3Arr.push(
                        <article key={index} className={`${macaronSamples[index].dayClass} sample-day`}>
                            <div className="daily-sample-top">
                                <h4>{macaronSamples[index].day}</h4>
                                <p>{macaronSamples[index].time}</p>
                            </div>
                            <div className="daily-sample-mid"><p>{macaronSamples[index].flavor1}</p><img src={macaronSamples[index].macImg1} alt={macaronSamples[index].macAltText1} /></div>
                            <div className="daily-sample-bot"><p>{macaronSamples[index].flavor2}</p><img src={macaronSamples[index].macImg2} alt={macaronSamples[index].macAltText2} /></div>
                        </article>)
                }
            }
            return (
                <div>
                    <WindowResizeListener onResize={windowSize => {
                        this.setState({ width: windowSize.windowWidth });
                    }} />
                    <Carousel showThumbs={false} infiniteLoop showStatus={false} className="weekly-menu-container slider">
                        <li className="set-one">{set1Arr}</li>
                        <li className="set-two">{set2Arr}</li>
                        <li className="set-three">{set3Arr}</li>
                    </Carousel>
                </div>
            )
        } else if (width <= 400) {
            return (
                <div>
                    <WindowResizeListener onResize={windowSize => {
                        this.setState({ width: windowSize.windowWidth });
                    }} />
                    <Carousel infiniteLoop showThumbs={false} showStatus={false} className="weekly-menu-container slider">
                        {macaronDailySamples}
                    </Carousel>
                </div>
            )
        }
        else {
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