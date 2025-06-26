export const metadata = {
  title: "Creative Protfolio",
};
export default function CreativeLayout({
  
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
