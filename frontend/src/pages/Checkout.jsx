export default function Checkout() {
  return (
    <main className="container-page section-space">
      <h1 className="text-4xl font-black">Checkout</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <form className="card space-y-5 p-6 lg:col-span-2">
          <h2 className="text-xl font-bold">Shipping information</h2>
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Full name"
          />
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Phone"
          />
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Address"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border px-4 py-3" placeholder="City" />
            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Postal code"
            />
          </div>
          <button
            type="button"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white"
          >
            Place order
          </button>
        </form>
        <aside className="card h-fit p-6">
          <h2 className="font-bold">Your order</h2>
          <p className="mt-5 text-sm text-slate-500">
            No real order logic yet.
          </p>
          <div className="mt-6 flex justify-between font-black">
            <span>Total</span>
            <span>$0.00</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
