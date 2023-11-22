import React from "react";
import { render, screen } from "@testing-library/react";

import Announcement from "../client/src/components/Overview/Announcement.jsx";

describe("renders an announcement", () => {
  it("should render the counter button", () => {
    render(<Announcement />);
    expect(screen.queryByText("OFFER")).toBeTruthy();
  });
});
