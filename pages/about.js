import Head from 'next/head'
import Layout from '@/components/Layout'
export default function About(){
  return (
    <Layout>
      <Head>
        <title>About – Alice Artisanal Soap</title>
        <meta name="description" content="Our craft, care and commitment to natural skincare."/>
        <meta property="og:title" content="About – Alice Artisanal Soap"/>
        <meta property="og:description" content="Our craft, care and commitment to natural skincare."/>
        <meta property="og:type" content="website"/>
      </Head>

      <section className="section bg-leaves bg-cover bg-center">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h2">Our Craft • Our Care • Our Commitment</h1>
            <p className="subtle mt-3">At Alice, we believe skincare should be simple, pure, and handcrafted. Our soaps are made in small batches using natural oils, butters, and botanicals — free from harsh chemicals and artificial colours.</p>
            <p className="subtle mt-3">We source responsibly, wrap minimally, and craft consistently in India.</p>
          </div>
          <img src="/WhatsApp_Image_2025-10-21_at_6.30.21_PM.jpeg" alt="Craft" className="rounded-2xl shadow w-full"/>
        </div>
      </section>
    </Layout>
  )
}
