import React from 'react';

const BannerImg = (props) => {
    return (
        <section className="main-image">
            <img src={props.img} alt={props.altText}/>
        </section>
    )
};

export default BannerImg;