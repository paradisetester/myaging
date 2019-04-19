import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 2) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-transparent">
        <div className="container">
			<div className="row">
          <div className="col-sm-6 navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="MY AGING AND WELLNESS" />
              </figure>
            </Link>
          </div>
          <div className="col-sm-6 navbar-start">
		  
				 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					  </button>

						  <div className="collapse navbar-collapse" id="navbarSupportedContent">
											<ul className="navbar-nav mr-auto">
											  <li className="nav-item active">
												<a className="nav-link" href="#">Blog</a>
											  </li>
											  <li className="nav-item">
												<a className="nav-link" href="/contact-me">CONTACT ME, ADVERTISE OR I’LL TRY YOUR PRODUCT</a>
											  </li>
											 
											
											</ul>
										   
						  </div>
				</nav>
          </div>
          </div>
        </div>
      </nav>
	 
    )}
  />
)

export default Navbar
