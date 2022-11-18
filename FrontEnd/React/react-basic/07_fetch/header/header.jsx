import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Header extends Component {

     search = async() =>{
        const {KeyValue:{value:keyWord}} = this;

        PubSub.publish("getSate",{isFrist:false,isLoad:true})

        try {
            const wang = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
            const users = await wang.json();
            console.log(users.items);
        } catch (error) {
            
        }
            
    
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={ c => this.KeyValue = c} type="text" placeholder="输入关键词进行搜索"/>&nbsp;
                    <button onClick = {this.search}>搜索</button>
                </div>
            </section>
        )
    }
}