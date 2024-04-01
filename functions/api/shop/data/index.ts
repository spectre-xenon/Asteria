type item = {
  id: number;
  name: string;
  price: number;
  full: string;
};

export const items = [
  {
    id: 0,
    name: "testy name",
    price: 22,
    full: "test.png",
  } satisfies item,

  {
    id: 1,
    name: "testyytyyyy name",
    price: 552,
    full: "tesssst.png",
  } satisfies item,

  {
    id: 666,
    name: "hmm",
    full: "sus.png",
    price: 666,
  } satisfies item,
];
