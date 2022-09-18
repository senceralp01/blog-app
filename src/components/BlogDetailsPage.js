import React from 'react'
import { Link } from 'react-router-dom'


const BlogDetailsPage = ({ match }) => {
  console.log(match.params.id)
  return (
    <>
      <h1>Blog Details Page: {match.params.id}</h1>
      <Link to="/blogs">Go back</Link>
    </>
  )
}

const mapStatetoProps = (state) => {
  return {
    blog: state.blogs.find((blog) => {
      
    })
  }
}

export default BlogDetailsPage