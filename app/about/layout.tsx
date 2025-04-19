export const metadata = {
  title: "About",
};
export default function AboutLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="flex flex-col gap-8 py-12">
      <div className="w-full mx-auto px-4">{children}</div>
    </section>
  );
}
