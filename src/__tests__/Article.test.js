
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders a <small> with the date of the post", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  // Use queryAllByText to handle multiple elements with the same text
  const smallElements = screen.queryAllByText(/December 15, 2020/);
  // Select the specific small element without the additional emojis and "read" text
  const small = smallElements.find(element => !element.textContent.includes("read"));
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(
    <Article
      title={"Components 101"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  // Use queryAllByText to handle multiple elements with the same text
  const smallElements = screen.queryAllByText(/January 1, 1970/);
  // Ensure that the specific small element containing the default date is not present
  expect(smallElements.length).toBe(0);
});
