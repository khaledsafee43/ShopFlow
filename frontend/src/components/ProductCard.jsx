export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-black">${product.price}</span>
          <span className="text-sm text-amber-500">★ {product.rating}</span>
        </div>
        <button onClick={()=> onAddToCart(product)} className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white">
          Add to cart
        </button>
      </div>
    </article>
  );
}
