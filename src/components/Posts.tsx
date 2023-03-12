import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const items = [
  "Ketupak",
  "Ketupak",
  "Ketupak",
  "Ketupak",
  "Ketupak",
  "Ketupak",
  "Ketupak",
  "Ketupak",
];

// eslint-disable-next-line arrow-body-style
const Posts: FC<Props> = () => {
  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-8 my-12">
      {items.map((item) => (
        <div>
          <div className="bg-brand h-64 rounded-2xl p-6 mb-2">Image</div>
          <div className="px-2 text-md font-medium">{item}</div>
        </div>
      ))}
      <div className=" text-white flex justify-center items-center h-18">
        <div className="bg-black px-6 py-2 rounded-lg">Order now</div>
      </div>
    </div>
  );
};

export default Posts;
