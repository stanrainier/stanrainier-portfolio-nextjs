export const metadata = {
  title: "How I Built My Portfolio with Next.js & Tailwind",
  description: "A breakdown of tools and techniques used in my developer portfolio.",
};
export default function blogNextJS({
  
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="flex flex-col gap-8 ">
      <div className="w-full mx-auto px-4">{children}</div>
    </section>
  );
}
