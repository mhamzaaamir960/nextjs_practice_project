import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
import Layout from "../../components/layout";


export default function FirstPost() {

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
    
    <h2>First Post!</h2>
    <h1><Link href='/'>Back to home</Link></h1>
    </Layout>
    );
  }
