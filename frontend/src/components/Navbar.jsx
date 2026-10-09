import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <p className="text-xl font-black tracking-tight">
          Shop<span className="text-indigo-600">Flow</span>
        </p>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className="rounded-xl border px-4 py-2 text-sm font-semibold"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="rounded-xl bg-indigo-600/60 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
}
