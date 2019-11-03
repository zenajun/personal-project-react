import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DisplayListItem from "../components/DisplayListItem";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Testing component", () => {
  it("...", () => {
    act(() => {
      render(
        <DisplayListItem
          repoTitle={"Title of repo"}
          url={"link works"}
          repoRoot={"root"}
          repoDescription={"description"}
        />,
        container
      );
    });
    const link = container.querySelector("a");
    const span = container.querySelector("span");

    expect(link.textContent).toBe("Title of repo");
    expect(link.hasAttribute("href", "link works"));
    expect(span.textContent).toBe("rootdescription");
  });
  it("...", () => {
    act(() => {
      render(
        <DisplayListItem
          repoTitle={""}
          url={""}
          repoRoot={""}
          repoDescription={""}
        />,
        container
      );
    });
    const link = container.querySelector("a");
    const span = container.querySelector("span");

    expect(link.textContent).toBe("");
    expect(link.hasAttribute("href", ""));
    expect(span.textContent).toBe("");
  });
});
