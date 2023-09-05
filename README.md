# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: [Frontendmentor.io Page](https://www.frontendmentor.io/solutions/interactive-validation-form-responsive-media-breakpoints-mobile-first-9yydyR02lL)
- Live Site URL: [Vercel Deployment](https://preview-validation-form-responsive.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Responsive media breakpoints
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - React development environment
- [Tailwindcss](https://tailwindcss.com/) - CSS Library

### What I learned

#### Form Validation:

I created some form validation from scratch, with some instruction from webdevsimplified, see useful resources below. This is where the required functionality is programmed in. If the input string does not meet requirements, a stateful error message is created, and associated components that use that state will be affected.

```js
function checkCardNumber() {
  if (cardInfo.cardNumber.length === 0) {
    setErrorMessage((prev) => ({ ...prev, cardNumber: "Can't be blank" }));
    console.log("error, cannot be blank");
  } else if (cardInfo.cardNumber.length != 16) {
    setErrorMessage((prev) => ({ ...prev, cardNumber: "Incomplete field" }));
  } else if (isNaN(cardInfo.cardNumber)) {
    setErrorMessage((prev) => ({
      ...prev,
      cardNumber: "Wrong format, numbers only",
    }));
  } else {
    setErrorMessage((prev) => ({
      ...prev,
      cardNumber: "",
    }));
  }
}
```

### Continued development

Debounce functionality was considered for this project, however seeing that the required functionality of this project needs the form validation function to run when the submit button is clicked. In the future, I want to work with a live updating form validation that will need to utilize debounce. Perhaps for sending the validation message for passwords that require a certain length, a number, and a symbol, to indicated if a password is weak or strong.

### Useful resources

- [WebDevSimplified](https://www.youtube.com/watch?v=In0nB0ABaUk) - Once again Kyle from Web Dev Simplified gets a place in the markdown.

## Author

- Website - [Lawrence Yoon](https://www.larr.dev)
- Frontend Mentor - [@lawrence-yoon](https://www.frontendmentor.io/profile/lawrence-yoon)
