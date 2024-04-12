import { Navigate, useParams } from "react-router-dom";
import { useFetch } from "@/hooks";
import { useContext, type FC } from "react";
import { item } from "@/types";
import { cartContext } from "@/Root";

const Item: FC = () => {
  const { cartDispatch } = useContext(cartContext);
  const { id } = useParams();

  const { data, isLoading, error } = useFetch<item>(`/api/shop/${id}`);

  if (isLoading) return <h1>Loadin...</h1>;
  if (error) return <Navigate to="/error" />;

  return (
    <div className="flex w-screen items-center justify-center p-10 md:p-20">
      <div className="flex h-full flex-col gap-10 md:flex-row">
        <img
          className="h-96 w-full flex-grow-0 rounded-2xl object-cover p-2 md:h-[450px] md:flex-1"
          src={data?.full}
          alt={data?.name}
        />
        <div className="flex flex-1 flex-col justify-center gap-6">
          <div className="flex  justify-between text-2xl">
            <p className="flex-1">{data?.name}</p>
            <p className="flex-1 text-end text-grey">
              <span className="text-accent">{data?.price}</span> Zing
            </p>
          </div>
          <p className="px-4 text-grey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam odio
            aut saepe quo natus, doloremque odit pariatur harum quos molestiae,
            suscipit vitae ipsa distinctio animi, consequuntur eligendi quia
            quidem esse qui est excepturi. Accusantium, modi facilis fugit
            doloribus labore culpa aperiam saepe nisi sit, quis eveniet
            obcaecati explicabo, atque hic. Ut dolor veritatis, soluta minima
            quis inventore exercitationem placeat, illo quidem ipsam quae ipsa
            autem adipisci cupiditate non, labore modi maiores laborum quisquam
            necessitatibus facere! Modi, veniam mollitia. Possimus quo numquam
            neque! Tenetur alias dicta voluptatem, quidem impedit ad recusandae
            suscipit accusamus, iusto deserunt necessitatibus dolorem aliquam
            autem. Necessitatibus, sunt!
          </p>
          <div className="w-full md:w-auto">
            <button
              className="w-full rounded-full bg-white px-12 py-3 text-black transition-transform ease-in-out hover:scale-105 md:w-auto"
              onClick={() => {
                cartDispatch({ type: "incrementAndUpdate", id: Number(id) });
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Item };
