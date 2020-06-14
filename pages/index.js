import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import React from 'react';
import $ from 'jquery';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script type="text/javascript" src="/static/teste.js"></script>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, <a href="/about">I'm Renon</a>. I'm a Front End Developer. You
          can contact me on renon@renon.com.br
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <div
          className="orbit"
          role="region"
          aria-label="Favorite Space Pictures"
          data-orbit
        >
          <div className="orbit-wrapper">
            <div className="orbit-controls">
              <button className="orbit-previous">
                <span className="show-for-sr">Previous Slide</span>
                &#9664;&#xFE0E;
              </button>
              <button className="orbit-next">
                <span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;
              </button>
            </div>
            <ul className="orbit-container">
              <li className="is-active orbit-slide">
                <figure className="orbit-figure">
                  <img
                    className="orbit-image"
                    src="https://placehold.it/1200x600/999?text=Slide-1"
                    alt="Space"
                  />
                  <figcaption className="orbit-caption">
                    Space, the final frontier.
                  </figcaption>
                </figure>
              </li>
              <li className="orbit-slide">
                <figure className="orbit-figure">
                  <img
                    className="orbit-image"
                    src="https://placehold.it/1200x600/888?text=Slide-2"
                    alt="Space"
                  />
                  <figcaption className="orbit-caption">
                    Lets Rocket!
                  </figcaption>
                </figure>
              </li>
              <li className="orbit-slide">
                <figure className="orbit-figure">
                  <img
                    className="orbit-image"
                    src="https://placehold.it/1200x600/777?text=Slide-3"
                    alt="Space"
                  />
                  <figcaption className="orbit-caption">
                    Encapsulating
                  </figcaption>
                </figure>
              </li>
              <li className="orbit-slide">
                <figure className="orbit-figure">
                  <img
                    className="orbit-image"
                    src="https://placehold.it/1200x600/666&text=Slide-4"
                    alt="Space"
                  />
                  <figcaption className="orbit-caption">
                    Outta This World
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
          <nav className="orbit-bullets">
            <button className="is-active" data-slide="0">
              <span className="show-for-sr">First slide details.</span>
              <span className="show-for-sr" data-slide-active-label>
                Current Slide
              </span>
            </button>
            <button data-slide="1">
              <span className="show-for-sr">Second slide details.</span>
            </button>
            <button data-slide="2">
              <span className="show-for-sr">Third slide details.</span>
            </button>
            <button data-slide="3">
              <span className="show-for-sr">Fourth slide details.</span>
            </button>
          </nav>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>    
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export class Index extends React.Component {
  componentDidMount(){
      const foundation = require('../foundation-sites');
      $(document).foundation();
  }
}