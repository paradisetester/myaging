import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import PostIcons from "../components/post-icons"
import Img from "gatsby-image"
import Layout from "../layouts"

import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
const resolutions = post.featured_media

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />      
					
		<div dangerouslySetInnerHTML={{ __html: post.content }} />       
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
		featured_media{
			localFile{
				childImageSharp{
					resolutions(width:300,height: 300){
						src
						width
						height				
					}
				}
			}
		}	  
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
