import { FC, useState, FormEvent, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  items: Record<number, string>;
}

// eslint-disable-next-line arrow-body-style
const Contact: FC<Props> = ({ items }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState(0);

  useEffect(() => {
    setItem(items[1]);
  });

  const onClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, number, item, qty);
    const data = {
      name,
      email,
      number,
      item,
      qty,
    };
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-2">
      <div className="flex flex-col pt-10 px-10 mb-5">
        <div className="italic text-xl mb-2">For businesses</div>
        <div className="text-4xl font-bold">Get a Quote</div>
        <hr className="my-8" />
        <div>
          <div>Get a quote within 10 minutes from our team.</div>
        </div>
      </div>
      <form onSubmit={onClick} className="flex flex-col gap-y-5 max-w-md">
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-2 py-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg px-2 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Number</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-2 py-3"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Items</label>
          <select
            className="border border-gray-300 rounded-lg px-2 py-3"
            value={item}
            onChange={(e) => {
              console.log(e.target.value);
              setItem(e.target.value);
            }}
          >
            {items &&
              Object.entries(items).map(([key, value]) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col gap-x-4">
          <label className="mb-2">Quantity</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-2 py-3"
            value={qty}
            onChange={(e) => setQty(+e.target.value)}
          />
        </div>
        <button className="px-2 py-3 bg-black rounded-lg text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
