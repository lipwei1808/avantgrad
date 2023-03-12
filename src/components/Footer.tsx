import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line arrow-body-style
const Footer: FC<Props> = () => {
  return (
    <footer className="mt-12 py-8 bg-gray-50">
      <div className="max-w-screen-lg mx-auto">Some copyright stuff</div>
    </footer>
  );
};

export default Footer;
