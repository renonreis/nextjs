import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Renon'
export const siteTitle = 'renon.dev - WordPress Front-End Developer'

export default function Layout({ children, home }) {
  return (
    <div className="off-canvas-wrapper">
      <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
      </Head>
      <div className="off-canvas position-left" id="offCanvas" data-off-canvas>
        MENU
      </div>
      <div className="off-canvas-content" data-off-canvas-content>
        <div className="grid-container">
          <header>
            <div className="grid-x grid-margin-x grid-padding-y align-middle">
              <div className="cell small-2 large-1">
                <button type="button" className="button" data-toggle="offCanvas" style={{margin: 0,}}>
                  <img src="../images/menu.svg" alt="Vercel Logo" className="logo" />
                </button>
              </div>
              <div className="cell small-4 large-3">
                <Link href="/">
                  <a>Renon.dev</a>
                </Link>
              </div>
              <div className="cell small-6 large-8">
                cell
            </div>
            </div>

          </header>
          <main>{children}</main>
          <footer>
            {'I`m here to stay'}
            <script src="/js/vendor/jquery.js"></script>
            <script src="/js/vendor/what-input.js"></script>
            <script src="/js/vendor/foundation.min.js"></script>            
          </footer>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}          
        </div>
      </div>
    </div>

  )
}