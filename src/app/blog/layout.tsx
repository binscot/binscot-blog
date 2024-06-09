export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col justify-center gap-4 md:px-20 py-8 md:py-10">
      <div className="inline-block justify-center">{children}</div>
    </section>
  );
}
