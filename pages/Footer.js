import React from 'react'
const YEAR = new Date().getFullYear()


const Footer = () => {
  return (
    <footer className='container prose prose-sm md:prose dark:prose-dark center'>
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <time>{YEAR}</time> <b>© Doni Wirawan.</b>
        <a href="https://twitter.com/doni_wirawans" target="_blank" className="social">Twitter</a>
        <a href="https://linkedin.com/in/doniwirawan/" target="_blank" className="social">Linkedin</a>
        <a href="https://github.com/doniwirawan" target="_blank" className="social">Github</a>
        <a href="https://instagram.com/doni_wirawans" target="_blank" className="social">Instagram</a>
      </small>
    </footer>
  )
}

export default Footer