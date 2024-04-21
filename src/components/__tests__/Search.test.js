import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load searched cards with 'pizza' as search text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsFromSearch = screen.getAllByTestId("resCard");
  expect(resCardsFromSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  // assert - screen should load 3 cards
  expect(resCardsAfterSearch.length).toBe(3);
});

it("Should filter top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(resCardsBeforeFilter.length).toBe(20);

  const searchBtn = screen.getByRole("button", {
    name: "Top rated restaurants",
  });

  fireEvent.click(searchBtn);

  const resCardsAfterFilter = screen.getAllByTestId("resCard");
  expect(resCardsAfterFilter.length).toBeGreaterThan(10);
});
