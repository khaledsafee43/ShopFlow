import SectionTitle from "../components/SectionTitle";
export default function About() {
  return (
    <main className="container-page section-space">
      <SectionTitle
        eyebrow="Project"
        title="ShopFlow is your React playground"
        text="Do not treat this as a finished application. Treat it as a UI skeleton that you must bring to life."
      />
      <div className="grid gap-5 md:grid-cols-3">
        <Box
          title="Beginner"
          text="Components, JSX, props, events and useState."
        />
        <Box
          title="Intermediate"
          text="Forms, validation, lifting state, Context and localStorage."
        />
        <Box
          title="Advanced"
          text="Routing, API calls, authentication, loading and error states."
        />
      </div>
    </main>
  );
}
function Box({ title, text }) {
  return (
    <div className="card p-7">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}
