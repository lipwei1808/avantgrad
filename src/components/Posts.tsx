import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const items = {
  1: "Moon-shaped banner",
  2: "Banner",
  3: "Banner",
  4: "Banner",
  5: "Banner",
  6: "Banner",
  7: "Banner",
  8: "Ketupat",
  9: "Ketupat",
  10: "Ketupat",
  11: "Ketupat",
  12: "Ketupat",
  13: "Basket",
  14: "Basket",
  15: "Basket",
};

// eslint-disable-next-line arrow-body-style
const Posts: FC<Props> = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-12">
      <div className="text-3xl font-bold">Our Products</div>
      <hr className="my-8" />
      <div className="grid grid-cols-3 gap-8">
        {Object.entries(items).map(([key, value]) => (
          <div>
            <div className="rounded-2xl mb-5 shadow-lg overflow-hidden">
              <img
                src={`/images/posts/${key}.png`}
                alt={value}
                className="object-contain"
              />
            </div>
            <div className="px-2 text-md font-bold">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
