import { products } from "../data/products";
export default function ProductDetails() {
  const product = products[0];
  return (
    <main className="container-page section-space">
      <div className="grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.title}
          className="card h-[500px] w-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold uppercase tracking-widest text-indigo-600">
            {product.category}
          </p>
          <h1 className="mt-3 text-4xl font-black">{product.title}</h1>
          <p className="mt-4 text-3xl font-black">${product.price}</p>
          <p className="mt-6 leading-7 text-slate-500">
            Product description goes here. You will later load this data from a
            route parameter or an API.
          </p>
          <div className="mt-8 flex gap-3">
            <input
              className="w-24 rounded-xl border px-4 py-3"
              value="1"
              readOnly
            />
            <button className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
