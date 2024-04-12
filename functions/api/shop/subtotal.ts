import { items } from "./data";

export const onRequest = async (context) => {
  const request: Request = context.request;
  const res = await request.json();

  const subtotal = Object.keys(res)
    .map((key) => {
      if (items[key]) return items[Number(key)].price * res[key].amount;
    })
    .reduce((a, b): number => a + b, 0);

  return Response.json({ subtotal });
};
