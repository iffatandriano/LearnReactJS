//libraries
import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';

//pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeComp from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';

//style
import './Home.css';

class Home extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                        <Link to="/youtube-comp">Youtube</Link>
                        <Link to="/hooks" >Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postId" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-comp" component={YoutubeComp} />
                    <Route path="/hooks" component={Hooks} />
                </Fragment>
            </Router >
        )
    }
}

export default GlobalProvider(Home);