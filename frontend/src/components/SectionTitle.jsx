export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-3 text-slate-500">{text}</p>}
    </div>
  );
}
