// import { useState } from "react";
import Form from "./components/Form";
import CompleteVerification from "./components/CompleteVerification";
import { useState, useEffect } from "react";

function App() {
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvcNumber: "",
  });
  // const [errorThrown, setIsErrorThrown] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvcNumber: "",
  });
  const { name, cardNumber, expirationMonth, expirationYear, cvcNumber } =
    cardInfo;
  function handleChange(e) {
    setCardInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function checkName() {
    if (cardInfo.name.length === 0) {
      setErrorMessage((prev) => ({ ...prev, name: "Can't be blank" }));
      console.log("error, cannot be blank");
      return;
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        name: "",
      }));
    }
  }
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
  function checkExpirationMonth() {
    if (cardInfo.expirationMonth.length === 0) {
      setErrorMessage((prev) => ({
        ...prev,
        expirationMonth: "Can't be blank",
      }));
      console.log("error, cannot be blank");
    } else if (cardInfo.expirationMonth.length != 2) {
      setErrorMessage((prev) => ({
        ...prev,
        expirationMonth: "Incomplete field",
      }));
    } else if (isNaN(cardInfo.expirationMonth)) {
      setErrorMessage((prev) => ({
        ...prev,
        expirationMonth: "Wrong format, numbers only",
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        expirationMonth: "",
      }));
    }
  }
  function checkExpirationYear() {
    if (cardInfo.expirationYear.length === 0) {
      setErrorMessage((prev) => ({
        ...prev,
        expirationYear: "Can't be blank",
      }));
      console.log("error, cannot be blank");
    } else if (cardInfo.expirationYear.length != 2) {
      setErrorMessage((prev) => ({
        ...prev,
        expirationYear: "Incomplete field",
      }));
    } else if (isNaN(cardInfo.expirationYear)) {
      setErrorMessage((prev) => ({
        ...prev,
        expirationYear: "Wrong format, numbers only",
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        expirationYear: "",
      }));
    }
  }
  function checkCVCNumber() {
    if (cardInfo.cvcNumber.length === 0) {
      setErrorMessage((prev) => ({ ...prev, cvcNumber: "Can't be blank" }));
      console.log("error, cannot be blank");
    } else if (cardInfo.cvcNumber.length != 3) {
      setErrorMessage((prev) => ({ ...prev, cvcNumber: "Incomplete field" }));
    } else if (isNaN(cardInfo.cvcNumber)) {
      setErrorMessage((prev) => ({
        ...prev,
        cvcNumber: "Wrong format, numbers only",
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        cvcNumber: "",
      }));
    }
  }

  function handleConfirm() {
    checkName();
    checkCardNumber();
    checkExpirationMonth();
    checkExpirationYear();
    checkCVCNumber();
    setIsChecked(true);
    // setIsFirstCheck(false);
  }
  function handleComplete() {
    setIsVerified(false);
  }
  const formattedCardNumber = () => {
    let string = "";
    for (let i = 0; i < cardInfo.cardNumber.length; i += 4) {
      string = string + cardInfo.cardNumber.substring(i, i + 4) + " ";
    }
    return string;
  };
  function completeVerification() {
    setIsVerified(true);
  }
  useEffect(() => {
    if (
      !errorMessage.name &&
      !errorMessage.cardNumber &&
      !errorMessage.expirationMonth &&
      !errorMessage.expirationYear &&
      !errorMessage.cvcNumber &&
      isChecked
    ) {
      // alert("this is where we fire the Check complete element");
      completeVerification();
    }
  }, [errorMessage, isChecked]);

  return (
    <div className="flex flex-col h-screen 2xl:flex-row">
      <div className="flex items-center bg-[url('/images/bg-main-mobile.png')] bg-cover w-screen h-2/6 2xl:bg-[url('/images/bg-main-desktop.png')] 2xl:h-screen 2xl:w-2/6">
        <div className="relative w-full max-w-[375px] min-h-[222px] max-h-[667px] mx-auto 2xl:max-w-full 2xl:h-[434px] 2xl:max-h-full">
          <div className="absolute bg-[url('/images/bg-card-back.png')] bg-cover top-[1.75rem] right-[1.125rem] w-[279px] h-[153px] text-lightGrayViolet 2xl:top-auto 2xl:bottom-[16rem] 2xl:-right-[8.75rem] 2xl:scale-110">
            <p className="absolute top-[4.175rem] right-[2.4rem] text-[10px] tracking-widest">
              {cardInfo.cvcNumber ? cardInfo.cvcNumber : "000"}
            </p>
          </div>
          <div className="absolute bg-[url('/images/bg-card-front.png')] bg-cover bottom-[-2.875rem] left-[1.125rem] w-[279px] h-[153px] text-lightGrayViolet p-5 2xl:bottom-auto 2xl:top-[16rem] 2xl:left-auto 2xl:-right-[5rem] 2xl:scale-110">
            <img className="h-[2rem] w-auto" src="/images/card-logo.svg"></img>
            <p className="pt-8 text-lg font-medium tracking-widest">
              {formattedCardNumber()
                ? formattedCardNumber()
                : "1234 5678 9123 0000"}
            </p>
            <div className="flex flex-row justify-between pt-2 text-[10px] tracking-wider">
              <p className="uppercase">
                {cardInfo.name ? cardInfo.name : "Jane Appleseed"}
              </p>
              <p>
                {(cardInfo.expirationMonth ? cardInfo.expirationMonth : "00") +
                  "/" +
                  (cardInfo.expirationYear ? cardInfo.expirationYear : "00")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {isVerified ? (
        <CompleteVerification handleComplete={handleComplete} />
      ) : (
        <Form
          name={name}
          cardNumber={cardNumber}
          expirationMonth={expirationMonth}
          expirationYear={expirationYear}
          cvcNumber={cvcNumber}
          errorMessage={errorMessage}
          handleChange={handleChange}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default App;
