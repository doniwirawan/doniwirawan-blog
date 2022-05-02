const YEAR = new Date().getFullYear()

export default {
  titleSuffix: ' – Doni wirawan',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: false,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> <b>© Doni Wirawan.</b>
      <a href="https://twitter.com/doni_wirawans" target="_blank" className="social">Twitter</a>
      <a href="https://linkedin.com/doni_wirawans" target="_blank" className="social">Linkedin</a>
      <a href="https://github.com/doniwirawan" target="_blank" className="social">Github</a>
      <a href="https://instagram.com/doni_wirawans" target="_blank" className="social">Instagram</a>
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
