export default function ProductCard({item}){
  return(<div className="card group">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={item.image} alt={item.name} className="fullbleed transition-transform duration-300 group-hover:scale-105"/>
      {item.tag && <span className="absolute left-3 top-3 badge">{item.tag}</span>}
    </div>
    <div className="p-4">
      <div className="font-medium">{item.name}</div>
      <div className="subtle text-sm mt-1">{item.blurb}</div>
      <div className="flex items-center justify-between mt-3">
        <div className="font-semibold">₹{item.price}</div>
        <a target="_blank" rel="noreferrer" href={item.amazon || '/shop'} className="btn btn-solid">Buy Now</a>
      
        <div className="flex gap-2 mt-3">
          <a target="_blank" rel="noreferrer" href={item.amazon || '/shop'} className="btn btn-solid">Buy on Amazon</a>
          <a target="_blank" rel="noreferrer" href={`https://wa.me/919000000000?text=Hi%20Alice!%20I%20want%20to%20order:%20${encodeURIComponent(item.name)}%20(₹${item.price}).`} className="btn btn-outline">WhatsApp</a>
        </div>
      </div>
    </div>
  </div>)
}
