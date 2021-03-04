import React, { Component } from 'react'
import NewPost from './NewPost'


 class HomePage extends Component {
     
    render() {
        return (
            <div>
                <NewPost />
               <h1>sport car user posts!</h1>
            </div>
        )
    }
}

export default HomePage