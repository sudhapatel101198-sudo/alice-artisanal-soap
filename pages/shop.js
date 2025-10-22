import Head from 'next/head'
import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'
import data from '@/data/products.json'

export default function Shop(){
  return (
    <Layout>
      <Head>
        <title>Shop – Alice Soaps & Soap Base</title>
        <meta name="description" content="Buy Alice handmade soaps and premium glycerine soap bases. Delivery across India via Amazon."/>
        <meta property="og:title" content="Shop – Alice Soaps & Soap Base"/>
        <meta property="og:description" content="Buy Alice handmade soaps and premium glycerine soap bases. Delivery across India via Amazon."/>
        <meta property="og:type" content="website"/>
      </Head>

      <section className="section bg-white">
        <div className="container">
          <h1 className="h2">Alice Soaps</h1>
      <p className="subtle mt-2">Prefer direct payment? Use our demo checkout (test mode).</p>
      <button onClick={() => {
        if (!window.Razorpay){
          const s = document.createElement('script'); s.src = 'https://checkout.razorpay.com/v1/checkout.js'; s.onload = () => alert('Loaded. Click again to open checkout.'); document.body.appendChild(s); return;
        }
        var rzp = new window.Razorpay({
          key: 'rzp_test_xxxxxxxxxxxx',
          amount: 50000,
          currency: 'INR',
          name: 'Alice Artisanal Soap',
          description: 'Sample Order',
          handler: function (response){ alert('Payment success (demo): ' + response.razorpay_payment_id); },
          prefill: { name: 'Alice Customer', email: 'hello@example.com', contact: '9000000000' },
          theme: { color: '#164A2C' }
        });
        rzp.open();
      }} className="btn btn-outline mt-3">Razorpay Demo</button>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {data.soaps.map(item => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
      <section id="bases" className="section bg-brand-beige">
        <div className="container">
          <h2 className="h2">Alice Soap Base</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {data.bases.map(item => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </Layout>
  )
}
