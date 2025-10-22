import Head from 'next/head'
import Layout from '../components/Layout'
export default function Gallery(){
  const imgs = [
    "/WhatsApp_Image_2025-10-21_at_6.30.22_PM.jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.22_PM_(1).jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.21_PM.jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.21_PM_(1).jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.20_PM.jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.19_PM.jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.18_PM.jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.18_PM_(1).jpeg",
    "/WhatsApp_Image_2025-10-21_at_6.30.18_PM_(2).jpeg",
  ]
  return (
    <Layout>
      <Head>
        <title>Gallery – Alice Artisanal Soap</title>
        <meta name="description" content="Explore Alice product photography and ingredients."/>
        <meta property="og:title" content="Gallery – Alice Artisanal Soap"/>
        <meta property="og:description" content="Explore Alice product photography and ingredients."/>
        <meta property="og:type" content="website"/>
      </Head>

      <section className="section bg-white">
        <div className="container">
          <h1 className="h2">Gallery</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {imgs.map((src,i)=>(
              <img key={i} src={src} alt={"Alice Soap "+(i+1)} className="rounded-2xl w-full h-64 object-cover shadow"/>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
