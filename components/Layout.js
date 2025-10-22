import Link from 'next/link'
export default function Layout({children}){
  return(<div className="min-h-screen flex flex-col">
    <header className="header">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Alice Artisanal Soap" className="h-10 w-auto"/>
          <div className="font-serif text-xl text-brand">Alice <span className="font-sans text-gray-800">Artisanal</span></div>
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/" className="navlink">Home</Link>
          <Link href="/shop" className="navlink">Shop</Link>
          <Link href="/about" className="navlink">About</Link>
          <Link href="/gallery" className="navlink">Gallery</Link>
          <Link href="/contact" className="navlink">Contact</Link>
        </nav>
      </div>
    </header>
    <main className="flex-1">{children}</main>
    <footer className="border-t">
      <div className="container py-8 grid md:grid-cols-3 gap-8">
        <div><div className="font-serif text-lg text-brand">Alice Artisanal Soap</div><p className="subtle mt-2">Handmade in India • Gentle on skin, kind to Earth.</p></div>
        <div><div className="font-medium mb-2">Quick Links</div><ul className="space-y-1 text-sm subtle"><li><Link className="hover:text-brand" href="/shop">Shop</Link></li><li><Link className="hover:text-brand" href="/about">About</Link></li><li><Link className="hover:text-brand" href="/gallery">Gallery</Link></li></ul></div>
        <div><div className="font-medium mb-2">Contact</div><ul className="space-y-1 text-sm subtle"><li>Email: hello@aliceartisanal.com</li><li>Phone: +91-90000 00000</li><li>Gwalior, Madhya Pradesh</li></ul></div>
      </div>
      <div className="text-center text-xs subtle pb-6">© {new Date().getFullYear()} Alice Artisanal Soap</div>
    </footer>
  </div>)
}
