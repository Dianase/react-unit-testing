import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./components/User";



describe("The suite should test user name", () => {

  it("should return Whatever Stranger", () => {
    ////Arrange////
    let container = document.createElement("div");
    document.body.appendChild(container);
    ////Act////
    act(() => {
      render(<User/>, container);
    });
    ////Assert////
    expect(container.textContent).toBe("Whatever Stranger!")
    ////Cleanup////
    unmountComponentAtNode(container)
    container.remove()
    container = null
  });
  it("should return Welcome to unit test", () => {
    ////Arrange////
    let container = document.createElement("div");
    document.body.appendChild(container);
    ////Act////
    act(() => {
      render(<User name="Diana"/>, container);
    });
    ////Assert////
    expect(container.textContent).toBe("Welcome to unit test, Diana!")
    ////Cleanup////
    unmountComponentAtNode(container)
    container.remove()
    container = null
});
})

