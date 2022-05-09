const YEAR = new Date().getFullYear()
import Comment from './pages/_comment'

export default {
  titleSuffix: ' – Doni Wirawan',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: false,
  footer: (
    <>
      <small style={{ display: 'block', marginTop: '8rem' }}>
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
    </>
  )
}
