import React, { Component } from 'react';
import PubSub from 'pubsub-js'

import './list.css'
class List extends Component {

    state = {
        Git: [],
        isFrist: true,
        isLoad: false,
        isError: ''
    }

    componentDidMount() {
        PubSub.subscribe("getSate", (_, data) => {
            console.log(data)
            this.setState(data)
        })
    }

    render() {

        const { Git, isFrist, isLoad, isError } = this.state;
        return (
            <div className="row">
                {
                    isFrist ? <h1>欢迎进入页面</h1> :
                        isLoad ? <h2>正在搜索页面</h2> :
                            isError !== '' ? <h1>{isError}</h1> :
                                Git.map((git) => {
                                    return (
                                        <div className="card" key={git.id}>
                                            <a href={git.html_url} target="_blank" rel="noreferrer">
                                                <img alt="headImg" src={git.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{git.login}</p>
                                        </div>
                                    )
                                })
                }


            </div>
        );
    }
}

export default List;