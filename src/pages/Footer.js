import React from 'react'

const Footer = () => {
  return (
    <div id="Footer">
    <div className='FooterList'>
      <h1>Contact us:</h1>
        <ul className='FooterLinks ContactLinks'>
          <li><a href="/#">FaceBook</a></li>
          <li><a href="/#">LinkedIn</a></li>
          <li><a href="/#">Twitter</a></li>
          <li><a href="/#">Email</a></li>
        </ul>
      </div>
      <div className='CopyRights'>
        Copyrights ⓒ Noone (experimental Test Case)
      </div>
    </div>
  )
}

export default Footer