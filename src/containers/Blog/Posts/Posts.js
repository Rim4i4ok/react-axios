import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Posts.css';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount () {

        console.log(this.props);

        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 5);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Rim'
                    }
                })
                this.setState({
                    posts: updatedPosts
                });
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({
                //     error: true
                // });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    render () {
        let posts = <p style={{textAlign: "center"}}>Something wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Link 
                            key={post.id}  
                            to={'/' + post.id}>
                            <Post                                 
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)} />;
                        </Link>
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>     
        );
    }
}

export default Posts;