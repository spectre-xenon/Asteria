import { items } from "./data";

export const onRequest = (context) => {
  const id = context.params.id;
  if (!id) {
    return new Response("Not found", { status: 404 });
  }

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json(item);
};
