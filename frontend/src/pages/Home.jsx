import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main>
      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              React practice project
            </span>
            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">
              Build the logic.
              <br />
              <span className="text-indigo-400">You own the code.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              This page is only the UI. Search, filters, cart, forms, routing
              and authentication are deliberately NOT implemented.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#products"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-bold"
              >
                Explore products
              </a>
              <a
                href="#practice"
                className="rounded-xl border border-white/20 px-6 py-3 font-bold"
              >
                See practice tasks
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <img
              className="h-80 w-full rounded-2xl object-cover"
              src={products[0].image}
              alt="Featured product"
            />
          </div>
        </div>
      </section>
      <section id="products" className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Featured"
            title="Products"
            text="The cards are intentionally dumb. You will later add events, state, filtering and API data."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section id="practice" className="bg-white py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="Your mission"
            title="Turn this static UI into a real React app"
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Task
              n="01"
              title="Product state"
              text="Make Add to cart work and show cart count."
            />
            <Task
              n="02"
              title="Search & filter"
              text="Create controlled inputs and filter the product list."
            />
            <Task
              n="03"
              title="Cart logic"
              text="Quantity, remove, subtotal and total."
            />
            <Task
              n="04"
              title="Forms"
              text="Build login, contact and checkout validation."
            />
            <Task
              n="05"
              title="Routing"
              text="Create pages and dynamic product details routes."
            />
            <Task
              n="06"
              title="Persistence"
              text="Save cart and login state in localStorage."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
function Task({ n, title, text }) {
  return (
    <div className="card p-6">
      <span className="text-sm font-black text-indigo-600">{n}</span>
      <h3 className="mt-3 font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}
