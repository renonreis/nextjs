import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle} - About</title>
      </Head>
      <section>
        <p>Hello, <a href="/about">I'm Renon</a>. I'm a Front End Developer. You can contact me on renon@renon.com.br</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>            
    </Layout>    
  )
}