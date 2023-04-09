import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  items: Record<number, string>;
}

// eslint-disable-next-line arrow-body-style
const Posts: FC<Props> = ({ items }) => {
  return (
    <div className="max-w-screen-lg mx-auto my-12">
      <div className="text-3xl font-bold">Our Products</div>
      <hr className="my-8" />
      <div className="grid grid-cols-3 gap-8">
        {items &&
          Object.entries(items).map(([key, value]) => (
            <div key={value}>
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
