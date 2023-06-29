import { FC } from "react";

interface pageProps {
  params: { slug: string };
}

const page: FC<pageProps> = ({ params }) => {
  return <div>page</div>;
};

export default page;
