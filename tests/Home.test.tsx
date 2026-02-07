import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home"
import React from "react";
import { vi } from "vitest";

// Mock the HeroExperience component.
vi.mock("../src/components/HeroExperience", () => ({
  default: () => <div data-testid="hero-experience" />,
}));

// Mock framer-motion.
vi.mock("framer-motion", () => ({
    motion: {
      main: ({ children }: any) => <main>{children}</main>,
    },
  }));  

//   Test suite
describe("Home page", () => {
    // ensures the main banner content render
    it("renders the banner content", () => {
      render(<Home />); // `render` mounts a React component into a fake DOM (jsdom)
  
      // Assert that text containing "software" is visible
      expect(
        screen.getByText(/software/i) // `screen` lets us query the DOM the way a user would
      ).toBeInTheDocument();
    });
  
    // Ensure the page uses a semantic <main> landmark.
    it("uses a main landmark for accessibility", () => {
      render(<Home />);
  
      const main = screen.getByRole("main");
      // Assert that the main landmark exists in the document
      expect(main).toBeInTheDocument();
    });
  });
  