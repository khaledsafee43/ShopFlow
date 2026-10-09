export default function Contact() {
  return (
    <main className="container-page section-space">
      <div className="mx-auto max-w-3xl">
        <p className="font-bold uppercase tracking-widest text-indigo-600">
          Contact
        </p>
        <h1 className="mt-2 text-4xl font-black">Tell us what you need</h1>
        <form className="card mt-8 space-y-5 p-6">
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Full name"
          />
          <input
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="min-h-40 w-full rounded-xl border px-4 py-3"
            placeholder="Message"
          />
          <button
            className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white"
            type="button"
          >
            Send message
          </button>
        </form>
      </div>
    </main>
  );
}
