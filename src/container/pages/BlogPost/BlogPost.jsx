import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import API from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    getPostAPI = () => {
        API.getNewsBlog().then((rest) => {
            this.setState({
                post: rest
            })
        })
        API.getComments().then((rest) => {
            this.setState({
                comments: rest
            })
        })
    }

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost)
            .then((rest) => {
                this.getPostAPI();
                this.setState({
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
                })
            })
    }

    handleDeleteApi = (data) => {
        API.deleteNewsBlog(data).then(rest => {
            this.getPostAPI();
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log('value obj formBlogPost: ', this.state.formBlogPost);
        })
    }

    handleUpdateApi = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id)
            .then((rest) => {
                this.getPostAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
                })
            })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.handleUpdateApi();
        } else {
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`detail-post/${id}`);
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleDeleteApi} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;