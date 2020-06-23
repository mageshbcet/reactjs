import React, { Component } from 'react'
import axios from 'axios'

class HttpGet extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      errorMsg: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8888/drupal891/api/events')
    .then(response => {
      this.setState ({
        posts: response.data
      })
      console.log(response)
    })
    .catch(
      error => {
        this.setState({
          errorMsg: 'Error in retriving data'
        })
       
      }
    ) 
  }
  render() {
    const { posts} = this.state

    return (
    <div>
      { posts.length ?  posts.map( post => <div key={post.nid[0].value}><h3>{post.title[0].value}</h3><p>{post.body[0].value}</p></div>) : <div>{this.state.errorMsg}</div> }
    </div>
    )
  }
}
export default HttpGet