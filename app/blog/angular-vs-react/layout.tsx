export const metadata = {
  title: "Angular vs. React: My Full-Stack Developer Perspective",
  description: "Comparing two powerful frontend frameworks through real-world use.",
};

export default function AngularVsReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-8 py-16 px-4">
      <div className="w-full max-w-3xl">{children}</div>
    </section>
  );
}
