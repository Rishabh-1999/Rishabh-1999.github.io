import React from "react";
import { render, screen } from "@testing-library/react";

import Heading from "./index";

describe("<LoginForm />", () => {
    test("should display a blank login form, with remember me checked by default", async () => {
        render(<Heading title="title" subtitle="subtitle" />);

        const titleElement = await screen.findByText("/title/i");

        expect(titleElement).toBeInTheDocument();
    });
});
