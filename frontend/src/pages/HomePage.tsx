import PageContainer from "@/containers/PageContainer";

export default function HomePage() {
  return (
    <PageContainer title="Home">
      <div className="content-container">
        <section className="min-h-[400px] flex w-full">
          <div className="w-1/2">
            <h1 className="font-bold text-2xl xl:text-6xl sm:text-3xl md:text-5xl md:font-extrabold mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed">
              awd
            </h1>
          </div>
          <div className="w-1/2"></div>
        </section>
      </div>
    </PageContainer>
  );
}
