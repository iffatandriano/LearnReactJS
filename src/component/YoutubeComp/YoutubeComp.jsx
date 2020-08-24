import React from 'react';
import './YoutubeComp.css';

const Youtube = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://www.nesabamedia.com/wp-content/uploads/2019/09/Pengertian-Gambar-Ilustrasi.jpeg" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

Youtube.defaultProps = {
    time: '00.00',
    title: 'title here',
    desc: 'desc here'
}

export default Youtube;