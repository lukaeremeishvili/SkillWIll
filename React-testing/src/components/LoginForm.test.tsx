import { render, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("should render form with username input and submit button", () => {
    const { getByLabelText, getByRole } = render(<LoginForm />);
    expect(getByLabelText(/username/i)).toBeInTheDocument();
    expect(getByRole("button")).toHaveTextContent("Submit");
  });

  it("should submit form correctly", () => {
    const { getByLabelText, getByRole } = render(<LoginForm />);
    const input = getByLabelText(/username/i) as HTMLInputElement; 
    fireEvent.change(input, { target: { value: "JohnDoe" } });
    fireEvent.click(getByRole("button"));
    expect(input.value).toBe("JohnDoe");
  });
});
