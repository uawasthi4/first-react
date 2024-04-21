import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResturantMenuData.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load 'burger king' restaurant with 3 'whopper' items", async () => {
  await act(() =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Whopper (3)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("restaurantItems");

  // assert - Should load 3 items under whopper
  expect(foodItems.length).toBe(3);
});

it("Should add 'whopper' items to cart and update the header text", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Whopper (3)");

  fireEvent.click(accordionHeader);

  const cartItemsBeforeAdd = screen.getByText("Cart (0 items)");
  expect(cartItemsBeforeAdd).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  const cartItemsAfterAdd = screen.getByText("Cart (2 items)");
  expect(cartItemsAfterAdd).toBeInTheDocument();
});

it("Should verify 'whopper' items to be present in the cart page", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Whopper (3)");

  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  const cartItemsAfterAdd = screen.getAllByTestId("restaurantItems");

  // assert - Should load 2 items under Cart Page
  expect(cartItemsAfterAdd.length).toBe(7);
});

it("Should clear items present in the cart page", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Whopper (3)");

  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartButton);

  const cartItemsAfterClear = screen.getAllByTestId("restaurantItems");
  expect(cartItemsAfterClear.length).toBe(3);
});
