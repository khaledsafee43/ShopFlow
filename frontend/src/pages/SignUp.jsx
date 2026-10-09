export default function SignUp() {
  return (
    <main className="container-page flex min-h-[75vh] items-center justify-center py-16">
      <div className="card w-full max-w-md p-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-indigo-600">ACCOUNT</p>
          <h1 className="mt-2 text-3xl font-black">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">
            The form is intentionally not interactive.
          </p>
        </div>
        <form className="mt-8 space-y-5">
          <label className="block text-sm font-semibold">
            Full Name
            <input
              className="mt-2 w-full rounded-xl border px-4 py-3"
              type="text"
              placeholder="John Doe"
            />
          </label>
          <label className="block text-sm font-semibold">
            Email
            <input
              className="mt-2 w-full rounded-xl border px-4 py-3"
              type="email"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm font-semibold">
            Password
            <input
              className="mt-2 w-full rounded-xl border px-4 py-3"
              type="password"
              placeholder="••••••••"
            />
          </label>
          <label className="block text-sm font-semibold">
            Confirm Password
            <input
              className="mt-2 w-full rounded-xl border px-4 py-3"
              type="password"
              placeholder="••••••••"
            />
          </label>
          <button
            className="w-full rounded-xl bg-slate-900 px-4 py-3 font-bold text-white"
            type="button"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
