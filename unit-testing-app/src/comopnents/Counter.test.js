import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Counter from "./Counter";

// test case - to check if Counter component renders
// test("renders Counter comopnent", () => {
//     // 1. rendering the counter component
//     render(<Counter />);

//     // 2. finding the text "Counter: 0" in the document
//     const counterText = screen.getByText("Counter: 0");

//     // 3. checking if this text is present in the document
//     expect(counterText).toBeInTheDocument();
// })


// test case - check if clicking the button increments the counter
// test("increments counter on button click", () => {
//     // 1. render the Counter Component
//     render(<Counter />)

//     // 2. find the counter display element
//     const counterValue = screen.getByTestId("counter-value");

//     // 3. find the button element
//     const button = screen.getByRole("button", { name: "Increment" });

//     // 4. check that initial count is 0
//     expect(counterValue).toHaveTextContent("Counter: 0");

//     // 5. click the button
//     fireEvent.click(button);

//     // 6. check that count is now 1
//     expect(counterValue).toHaveTextContent("Counter: 1");

//     // 7. click again and check count is 2
//     fireEvent.click(button);
//     expect(counterValue).toHaveTextContent("Counter: 2")
// })


// test case - check if user is correctly updated
// test("updates input field when user types", () => {
//     // 1. render Counter component
//     render(<Counter />)

//     // 2. select input field
//     const inputField = screen.getByTestId("name-input");

//     // 3. select the paragraph where name is displayed
//     const nameDisplay = screen.getByTestId("name-display");

//     // 4. simulate user typing "Aman"
//     fireEvent.change(inputField, { target: { value: "Aman" } });

//     // 5. check if the input field updates correctly
//     expect(inputField.value).toBe("Aman");

//     // 6. check if the text updates in the paragraph
//     expect(nameDisplay).toHaveTextContent("Hello, Aman");
// })




// mock api response
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({slip: {advice: "Always test your code!"}})
    })
});

// test case - check if api fetch updates the ui
test("fetches and displays advice from API", async () => {
    // 1. render the component
    render(<Counter />);

    // 2. first "Loding..." should be displayed
    expect(screen.getByTestId("advice")).toHaveTextContent("Loading...")

    // 3. wait for api response and chexk if advice appears
    await waitFor(() => {
        expect(screen.getByTestId("advice")).toHaveTextContent("Always test your code!");
    })

    // 4. ensure api gets called only once
    expect(global.fetch).toHaveBeenCalledTimes(1);
})