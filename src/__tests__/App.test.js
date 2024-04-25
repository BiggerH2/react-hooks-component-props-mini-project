import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  // Check if specific elements are rendered within the App component
  const header = container.querySelector("header");
  const aside = container.querySelector("aside");
  const main = container.querySelector("main");

  // Ensure that each element is present in the rendered output
  expect(header).toBeInTheDocument();
  expect(aside).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});
