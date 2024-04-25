import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a <header> element", () => {
  render(<Header />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});


test("renders a <h1> with the blog name", () => {
  render(<Header name="Underreacted" />);
  expect(screen.getByText("Underreacted")).toBeInTheDocument();
});
