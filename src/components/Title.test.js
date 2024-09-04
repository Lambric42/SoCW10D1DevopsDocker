import React from "react";
import Title from "./Title";
import { render, screen } from "@testing-library/react";

test("renders title", () => {
  render(<Title text="Hello" />);
  const titleElement = screen.getByText(/hello/i);
  expect(titleElement).toBeInTheDocument();
});
