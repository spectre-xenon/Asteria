import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { useFetch } from "@/hooks";

const MockApp = ({ url }: { url: string }) => {
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>error</h1>;

  return <h1>{JSON.stringify(data)}</h1>;
};

describe("useFetch tests", async () => {
  it("Replaces 'loading...' with content and Fetchs correctly", async () => {
    const workingUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const expectedResult = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    render(<MockApp url={workingUrl} />);

    expect(screen.getByRole("heading").textContent).toBe("loading...");

    await waitForElementToBeRemoved(() =>
      screen.getByRole("heading", { name: "loading..." }),
    );

    expect(screen.getByRole("heading").textContent).toMatch(
      JSON.stringify(expectedResult),
    );
  });

  it("Handles errors", async () => {
    const badUrl = "https://jsonplaceholder.typicode.com/todoos/1";

    render(<MockApp url={badUrl} />);

    await waitForElementToBeRemoved(() =>
      screen.getByRole("heading", { name: "loading..." }),
    );

    expect(screen.getByRole("heading").textContent).toBe("error");
  });
});
