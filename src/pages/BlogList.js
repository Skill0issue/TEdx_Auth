import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = () => {
  return (
    <div>
      <Link to="/Blog/1">
        Blog 1
      </Link>
      <Link to="/Blog/2">
        Blog 2
      </Link>



    </div>
  )
}

export default BlogList