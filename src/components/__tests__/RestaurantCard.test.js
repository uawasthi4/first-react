import { render, screen } from "@testing-library/react";
import RestaurantCard, { withTopRatedLabel } from "../RestaurantCard";
import mockData from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card with props data", () => {
  render(<RestaurantCard resData={mockData} />);
  const resName = screen.getByText("Natural Ice Cream");
  expect(resName).toBeInTheDocument();
});

it("Should render with RestaurantCard Component with TopRated Label", () => {
  const TopRatedRestaurantComponent = withTopRatedLabel(RestaurantCard);
  render(<TopRatedRestaurantComponent resData={mockData} />);
  const topRatedLabel = screen.getByText("Top Rated");
  expect(topRatedLabel).toBeInTheDocument();
});
