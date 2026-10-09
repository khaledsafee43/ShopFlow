export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-950 py-10 text-slate-300">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-white">ShopFlow</h3>
          <p className="mt-2 text-sm">A React practice e-commerce project.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Practice</h4>
          <p className="mt-2 text-sm">
            Props · State · Forms · Context · Router
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Student task</h4>
          <p className="mt-2 text-sm">
            Make every button and form interactive yourself.
          </p>
        </div>
      </div>
    </footer>
  );
}
