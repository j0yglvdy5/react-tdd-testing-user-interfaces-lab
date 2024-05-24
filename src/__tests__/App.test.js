import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App/>);
    // Act
    const topLevelHeading = screen.getByRole("heading",{
        name:/hi, i'm/i, // we're using case-insensitive regular exp to match the text "hi i'm" in the element.
        exact:false, // partial matches will be included.
        level:1, // we expect this to be a top-level <h1> element not a <h2> etc
    })
    // Assert
    expect(topLevelHeading).toBeInTheDocument();

  }),

  test("displays an image with alt text identifying the content of the image",()=>{
    render(<App/>);
    const imgElement = screen.getByAltText(/Joy/i);
    expect (imgElement).toBeInTheDocument();
  }),

  test("displays a second-level heading with the text`About Me`",()=>{
    render(<App/>);
    const secondLevelHeading = screen.getByRole("heading",{
        name:/about me/i,
        exact:false,
        level:2
    })
    expect (secondLevelHeading).toBeInTheDocument();

  })

  test("renders a paragraph for your biography",()=>{
    const {getByText} = render(<App/>)
    const bioParagraph = getByText(/I love coding/i)
    expect (bioParagraph).toBeInTheDocument();
  })

  test("displays a link to your github page",()=>{
    const {getByText} = render(<App/>)
    const githubLink = getByText(/github/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href","https://github.com/j0yglvdy5")
    
  })