import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '@/components/layout'
import styles from "../../components/layout.module.css"
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>

      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>first-post</div>
      <h2 >
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}

export default FirstPost