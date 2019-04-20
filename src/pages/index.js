import React, { Component } from "react"

import { Link, graphql } from 'gatsby'
import Layout from "../layouts"
import PostIcons from "../components/post-icons"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        
       
        {data.allWordpressPost.edges.map(({ node }) => (
			
		   <div css={{ marginBottom: rhythm(2) }} key={node.slug}>	
			  
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>                   
			<PostIcons node={node} css={{ marginBottom: rhythm(1 / 2) }} />
			<div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> 
			<Link to={node.slug} css={{ textDecoration: `none` }}>
              read more
            </Link>  			
          </div>
        ))}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {    
    allWordpressPost(sort: { fields: [date]}) {
      edges {
        node {
          title
          excerpt
          slug
		  ...PostIcons
          featured_media{
				localFile{
					childImageSharp{
						resolutions(width:222,height: 222){
							src
							width
							height				
						}
					}
				}
			}
        }
      }
    }
  }
`
