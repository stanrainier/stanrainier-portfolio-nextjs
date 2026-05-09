export const metadata = {
  title: "How I Built My Portfolio with Next.js & Tailwind",
  description:
    "A breakdown of tools and techniques used in my developer portfolio.",
};
export default function blogNextJS({
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
