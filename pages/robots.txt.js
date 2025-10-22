export default function handler(req, res) {
  const baseUrl = `https://${req.headers.host}`
  const txt = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`
  res.setHeader('Content-Type', 'text/plain')
  res.status(200).send(txt)
}
