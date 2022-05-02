const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Doni Wirawan.
      <a href="https://twitter.com/doni_wirawans" className="social">Twitter</a>
      <a href="https://linkedin.com/doni_wirawans" className="social">Linkedin</a>
      <a href="https://github.com/doniwirawan" className="social">Github</a>
      <a href="https://instagram.com/doni_wirawans" className="social">Instagram</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
