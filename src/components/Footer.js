import React from 'react'
import "./FooterStyles.css"
import cnlogo from "../images/cn.png"
 
export default function Footer() {
  return (
    <div className='footer-bottom'>
      <div className='cnlogo-container'>
        <a href="https://www.codingninjas.com/"><img src={cnlogo} className='cnlogo'/></a>
      </div>
      <div className='info'>
        <table>
          <tr>
            <td><h3>CODING NINJAS</h3></td>
            <td><h3>PRODUCTS</h3></td>
            <td><h3>COMMUNITY</h3></td>
          </tr>
          <tr>
            <td>About Us</td>
            <td>Courses</td>
            <td>CodeStudio</td>
          </tr>
          <tr>
            <td>Privacy Policy</td>
            <td>Try courses for Free</td>
            <td>Blog</td>
          </tr>
          <tr>
            <td>Terms & Condition</td>
            <td>Career Camp</td>
            <td>Events</td>
          </tr>
          <tr>
            <td>Pricing & Refund Policy</td>
            <td>Hire Talent</td>
            <td>Campus Ninjs</td>
          </tr>
          <tr>
            <td>Bug Bounty</td>
            <td></td>
            <td>Affiliate</td>
          </tr>
          <tr>
            <td>Customers</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Press Release</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className='contacts'>
      <table>
        <tr>
          <td><h3>FOLLOW US ON</h3></td>
        </tr>
        <tr>
        <td>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
            <i class="far fa-paper-plane"></i>
          </td>
        </tr>
        <tr>
          <td><h3>CONTACT US</h3></td>
        </tr>
        <tr>
          <td className='contacts-td2'><i class="fas fa-phone-alt"></i>1800-123-3598</td>
        </tr>
        <tr>
          <td className='contacts-td2'><i class="fas fa-envelope"></i>contact@codingninjas.com</td>
        </tr>
      </table>
      </div>
    </div>
  )
}