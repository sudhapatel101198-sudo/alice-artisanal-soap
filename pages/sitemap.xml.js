export default function handler(req, res) {
  const baseUrl = `https://${req.headers.host}`
  const urls = ['','/shop','/about','/gallery','/contact'].map(u => `<url><loc>${baseUrl}${u}</loc></url>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(xml)
}
