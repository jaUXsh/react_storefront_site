import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { WindowResizeListener } from 'react-window-resize-listener';

// import macaronSamples from './macaronSamples';
import './carousel.css';
import almond from '../../assets/images/macarons/almond.png';
import caramel from '../../assets/images/macarons/caramel.png';
import chocolate from '../../assets/images/macarons/chocolate.png';
import coconut from '../../assets/images/macarons/coconut.png';
import coffee from '../../assets/images/macarons/coffee.png';
import greenTea from '../../assets/images/macarons/green-tea.png';
import lemon from '../../assets/images/macarons/lemon.png';
import passionFruit from '../../assets/images/macarons/passion-fruit.png';
import pistachio from '../../assets/images/macarons/pistachio.png';
import raspbery from '../../assets/images/macarons/raspbery.png';
import rose from '../../assets/images/macarons/rose.png';
import tiffanyBlue from '../../assets/images/macarons/tiffany-blue.png';
import vanilla from '../../assets/images/macarons/vanilla.png';
import violetCassis from '../../assets/images/macarons/violet-cassis.png';


class SampleMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 1000
        }
    }


    render() {

        const macaronSamples = [
            {
                dayClass: "monday",
                day: "Monday",
                time: "15:00 - 16:00",
                flavor1: "chocolate",
                macImg1: chocolate,
                macAltText1: "chocolate macaron icon",
                flavor2: "coconut",
                macImg2: coconut,
                macAltText2: "coconut macaron icon"
            },
            {
                dayClass: "tuesday",
                day: "Tuesday",
                time: "14:00 - 15:00",
                flavor1: "violet cassis",
                macImg1: violetCassis,
                macAltText1: "violet cassis macaron",
                flavor2: "green tea",
                macImg2: greenTea,
                macAltText2: "green tea macaron icon"
            },
            {
                dayClass: "wednesday",
                day: "Wednesday",
                time: "9:00 - 10:00",
                flavor1: "passion fruit",
                macImg1: passionFruit,
                macAltText1: "passion fruit macaron icon",
                flavor2: "vanilla",
                macImg2: vanilla,
                macAltText2: "vanilla macaron icon"
            },
            {
                dayClass: "thursday",
                day: "Thursday",
                time: "18:00 - 19:00",
                flavor1: "coffee",
                macImg1: coffee,
                macAltText1: "coffee macaron icon",
                flavor2: "pistachio",
                macImg2: pistachio,
                macAltText2: "pistachio macaron icon"
            },
            {
                dayClass: "friday",
                day: "Friday",
                time: "11:00 - 12:00",
                flavor1: "raspbery",
                macImg1: raspbery,
                macAltText1: "raspbery macaron icon",
                flavor2: "lemon",
                macImg2: lemon,
                macAltText2: "lemon macaron icon"
            },
            {
                dayClass: "saturday",
                day: "Saturday",
                time: "13:00 - 14:00",
                flavor1: "rose",
                macImg1: rose,
                macAltText1: "rose macaron icon",
                flavor2: "tiffany blue",
                macImg2: tiffanyBlue,
                macAltText2: "tiffany blue macaron icon"
            },
            {
                dayClass: "sunday",
                day: "Sunday",
                time: "10:00 - 11:00",
                flavor1: "caramel",
                macImg1: caramel,
                macAltText1: "caramel macaron icon",
                flavor2: "almond",
                macImg2: almond,
                macAltText2: "almond macaron icon"
            }
        ];

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