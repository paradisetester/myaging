import React from 'react'
import {  Link, StaticQuery} from 'gatsby'
import logo from '../img/logo.png'
import fb from '../img/fb.png'
import twt from '../img/twt.png'
import linkdin from '../img/linkdin.png'
import print from '../img/print.png'

const Footer = () => (
  <StaticQuery  
  query={graphql`
      query {
        allWordpressPage( limit: 2, filter: {slug: { in: ["terms-and-conditions", "privacy-policy"] }}) {
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
      <div className="footer-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-4 footer1">
					<figure className="image">
						<img src={logo} alt="MY AGING AND WELLNESS" />
					</figure>
					<p>So excited that you dropped by!  My Aging And Wellness is about aging well.  It’s not about fighting our age.
					It’s about breathing, staying in touch, letting go of the past, connecting and focusing on what’s important in life.
					And yeah, it’s okay to look as good as you feel while doing it!</p>
				</div>
				<div className="col-sm-3 footer1">
					<h2>About Me</h2>
					<p>I’m a writer, blogger and seriously passionate about aging well and looking the best while doing it!</p>
				</div>
				<div className="col-sm-3 footer1">
					<h2>Menus</h2>
					<ul>
				<li><a className="navbar-item" href="#">Blog</a></li>
				<li><a className="navbar-item" href="/contact-me">Contact me, advertise or I’ll try your product</a></li>
				</ul>
				</div>
				<div className="col-sm-2 footer1">
					<button type="button">GDRP</button>
				</div>
			</div>
		</div>
		<div className="bottom-footer">
			<div className="container">
				<div className="row">
					<div class="col-sm-6 left-menu">
						<ul>
							<li>Myaging and Wellness © 2019</li>
							 {data.allWordpressPage.edges.map(edge => (
							 <li>
								<Link
								className="navbar-item"
								to={edge.node.slug}
								key={edge.node.slug}
							  >{edge.node.title}
							  </Link></li>
							 ))}
						</ul>
					</div>
					<div class="col-sm-6 right-menu">
						<ul>
						
							<li><a href="#"><img src={fb} alt="Facebook" /></a></li>
							<li><a href="#"><img src={twt} alt="Twitter" /></a></li>
							<li><a href="#"><img src={linkdin} alt="Linkdin" /></a></li>
							<li><a href="#"><img src={print} alt="Pinterest" /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	  </div>
    )}
  />
)

export default Footer
