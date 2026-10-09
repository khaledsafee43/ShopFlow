import { Minus, Plus, Trash2 } from "lucide-react";
import EmptyState from "../components/EmptyState";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
export default function Cart({ cartItems, onUpdateQty, onRemoveToCart }) {
  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  }, [cartItems]);

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;
  return (
    <main className="container-page section-space">
      <h1 className="text-4xl font-black">Shopping Cart</h1>
      <p className="mt-2 text-slate-500">
        Start with this empty state. Your first task is to make products appear
        here.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <EmptyState
              title="Your cart is empty"
              text="Connect ProductCard to cart state, then render cart items here."
            />
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="card flex gap-4 p-4 sm:p-5">
                  <div className="product-art grid h-28 w-28 shrink-0 place-items-center rounded-2xl text-5xl">
                    {item.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
                          {item.category}
                        </span>
                        <h3 className="mt-1 truncate font-black">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          ${item.price} each
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveToCart(item.id)}
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="grid h-9 w-9 place-items-center hover:bg-slate-50"
                          disabled={item.qty <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="grid h-9 w-9 place-items-center border-x border-slate-200 text-sm font-black">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item + 1)}
                          className="grid h-9 w-9 place-items-center hover:bg-slate-50"
                          disabled={item.qty >= item.stock}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <strong className="text-lg font-black">
                        ${item.price.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <aside className="card h-fit p-6">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-t pt-3 font-black">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-12">
            <NavLink
              to="/checkout"
              className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white"
            >
              Checkout
            </NavLink>
          </div>
        </aside>
      </div>
    </main>
  );
}
