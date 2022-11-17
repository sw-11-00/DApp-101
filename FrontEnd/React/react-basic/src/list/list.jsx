import React, { Component } from 'react';

import './list.css'
class List extends Component {




    render() {

        const { Git, isFrist, isLoad, isError } = this.props;
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