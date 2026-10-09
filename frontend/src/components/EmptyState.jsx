export default function EmptyState({
  title = "Nothing here yet",
  text = "This area is intentionally static for your React practice.",
}) {
  return (
    <div className="card border-dashed p-10 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
        🛒
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">{text}</p>
    </div>
  );
}
