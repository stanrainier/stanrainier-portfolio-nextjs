export const metadata = {
  title: "Angular vs. React: My Full-Stack Developer Perspective",
  description:
    "Comparing two powerful frontend frameworks through real-world use.",
};

export default function AngularVsReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}
