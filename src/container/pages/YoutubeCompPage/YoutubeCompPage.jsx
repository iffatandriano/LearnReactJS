import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Channel</p>
                <hr />
                <YoutubeComp
                    time="7.12"
                    title="Tutorial React Js - Bagian 1"
                    desc="2x ditonton, 2 hari yang lalu"
                />
                <YoutubeComp
                    time="8.02"
                    title="Tutorial React Js - Bagian 2"
                    desc="200x ditonton, 10 hari yang lalu"
                />
                <YoutubeComp
                    time="5.04"
                    title="Tutorial React Js - Bagian 3"
                    desc="2000x ditonton, 4 hari yang lalu"
                />
                <YoutubeComp
                    time="4.12"
                    title="Tutorial React Js - Bagian 4"
                    desc="10K ditonton, 14 hari yang lalu"
                />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;