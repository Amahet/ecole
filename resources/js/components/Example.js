import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Example extends Component {
    constructor(){
        super();
        this.state = {
            posts:[],
        }
    }
    componentDidMount(){
        axios.get('/posts').then(response=>{
            this.setState({
                posts: response.data
            });
        }).catch(errors=>{
            console.log(errors);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body"> 
                                {this.state.posts.map(
                                    data => 
                                    <div>
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
