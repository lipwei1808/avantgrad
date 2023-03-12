import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line arrow-body-style
const Contact: FC<Props> = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="text-2xl font-medium mb-5">Get a Quote</div>
      <div className="flex flex-col gap-y-5 max-w-md">
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-2 py-3"
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg px-2 py-3"
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Number</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-2 py-3"
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Items</label>
          <select className="border border-gray-300 rounded-lg px-2 py-3">
            <option>Item 1</option>
          </select>
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Quantity</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-2 py-3"
          />
        </div>
        <button className="px-2 py-3 bg-black rounded-lg text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
