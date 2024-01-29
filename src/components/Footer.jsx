import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
        <div className='footer d-flex align-items-center justify-content-evenly mt-5'>
          <div className='website ' style={{ width: "400px" }}>
            <h5><i class="fa-solid fa-utensils me-3"></i>Food Circle</h5>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit in quia earum laborum perspiciatis architecto cupiditate deserunt? Veritatis accusantium impedit, harum nesciunt saepe voluptas, repellat sunt amet, quaerat cupiditate pariatur.</p>
          </div>

          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{ textDecoration: "none", color: "black" }}>Home</Link>
          </div>

          <div className='guides d-flex flex-column ms-5'>
            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{ textDecoration: "none", color: "black" }}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ textDecoration: "none", color: "black" }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Bootswatch</Link>
          </div>

          <div className='contactus ms-5'>
            <h4>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter your email' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <Link><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link><i class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link><i class="fa-brands fa-facebook fa-2x"></i></Link>
              <Link><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-5 text-center'>Copyright &#169; 2024 Food Circle, Build with React</p>
    </>
  )
}

export default Footer