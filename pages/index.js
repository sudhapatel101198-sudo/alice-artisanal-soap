import Head from 'next/head'
import Layout from '../components/Layout'
import ProductCard from '@/components/ProductCard'
import data from '@/data/products.json'

export default function Home() {
  const featured = [...data.soaps].slice(0,4)
  return (
    <Layout>
      <Head>
        <title>Alice Artisanal Soap – Handmade Natural Soaps</title>
        <meta name="description" content="Premium handcrafted glycerine soaps and soap bases by Alice. Gentle on skin, kind to Earth."/>
        <meta property="og:title" content="Alice Artisanal Soap – Handmade Natural Soaps"/>
        <meta property="og:description" content="Premium handcrafted glycerine soaps and soap bases by Alice. Gentle on skin, kind to Earth."/>
        <meta property="og:type" content="website"/>
      </Head>

      <section className="hero">
        <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="badge">Handcrafted • Natural • Cruelty‑Free</p>
            <h1 className="h1 mt-3">Pure. Handmade. <span className="text-brand">Naturally Yours.</span></h1>
            <p className="subtle mt-3">Small-batch soaps made with botanicals, nourishing butters and essential oils — gentle on skin, kind to the planet.</p>
            <div className="mt-6 flex gap-3">
              <a href="/shop" className="btn btn-solid">Shop Alice Soaps</a>
              <a href="/shop#bases" className="btn btn-outline">Explore Soap Bases</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featured.map(item => (
              <img key={item.id} src={item.image} alt={item.name} className="rounded-2xl object-cover w-full h-40 md:h-56 shadow"/>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-beige">
        <div className="container">
          <h2 className="h2 text-center">Featured Collection</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {featured.map(item => (<ProductCard key={item.id} item={item}/>))}
          </div>
          <div className="text-center mt-8">
            <a className="btn btn-outline" href="/shop">View All Products</a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="card p-6"><div className="h2">100% Natural</div><p className="subtle mt-2">Cold-processed oils, botanicals & clays.</p></div>
          <div className="card p-6"><div className="h2">Handmade Batches</div><p className="subtle mt-2">Small-batch craft for superior quality.</p></div>
          <div className="card p-6"><div className="h2">Eco Packaging</div><p className="subtle mt-2">Plastic-lite, recyclable wraps.</p></div>
        </div>
      </section>
    </Layout>
  )
}
