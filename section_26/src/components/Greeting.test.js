import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting components', () => {
  test('test h2', () => {

    // Arrange
    render(<Greeting />);

    // Act

    //Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('test paragraph if the button is not clicked', () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText('blablabla', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  test('test paragraph if the button is clicked', () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphElement = screen.getByText('change');
    expect(paragraphElement).toBeInTheDocument();
  });

  test('test paragraph is invisible if the button is clicked', () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText('blablabla');
    // expect(paragraphElement).not.toBeInTheDocument();
    expect(paragraphElement).toBeNull();
  });
});