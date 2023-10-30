import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface PageContainerProps {
  title: string;
  children: ReactNode;
}
export default function PageContainer({ title, children }: PageContainerProps) {
  return (
    <>
      <Helmet>
        <title>{`${title} | VroomVoyage`}</title>
      </Helmet>
      <div className="mt-navh py-4">{children}</div>
    </>
  );
}
