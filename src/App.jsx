// import { useState } from "react";
import Form from "./components/Form";
import CompleteVerification from "./components/CompleteVerification";
import { useState } from "react";

function App() {
  const [errorThrown, setErrorThrown] = useState({
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvcNumber: "",
  });
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
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
  function handleConfirm() {
    if (cardInfo.name.length === 0) {
      setErrorThrown((prev) => ({ ...prev, name: "Can't be blank" }));
    } else {
      setErrorThrown((prev) => ({
        ...prev,
        name: "",
      }));
    }
    if (cardInfo.cardNumber.length === 0) {
      setErrorThrown((prev) => ({ ...prev, cardNumber: "Can't be blank" }));
    } else if (cardInfo.cardNumber.length != 16) {
      setErrorThrown((prev) => ({ ...prev, cardNumber: "Incomplete field" }));
    } else if (isNaN(cardInfo.cardNumber)) {
      setErrorThrown((prev) => ({
        ...prev,
        cardNumber: "Wrong format, numbers only",
      }));
    } else {
      setErrorThrown((prev) => ({
        ...prev,
        cardNumber: "",
      }));
    }
    if (cardInfo.expirationMonth.length === 0) {
      setErrorThrown((prev) => ({
        ...prev,
        expirationMonth: "Can't be blank",
      }));
    } else if (cardInfo.expirationMonth.length != 2) {
      setErrorThrown((prev) => ({
        ...prev,
        expirationMonth: "Incomplete field",
      }));
    } else if (isNaN(cardInfo.expirationMonth)) {
      setErrorThrown((prev) => ({
        ...prev,
        expirationMonth: "Wrong format, numbers only",
      }));
    } else {
      setErrorThrown((prev) => ({
        ...prev,
        expirationMonth: "",
      }));
    }

    if (cardInfo.expirationYear.length === 0) {
      setErrorThrown((prev) => ({ ...prev, expirationYear: "Can't be blank" }));
    } else if (cardInfo.expirationYear.length != 2) {
      setErrorThrown((prev) => ({
        ...prev,
        expirationYear: "Incomplete field",
      }));
    } else if (isNaN(cardInfo.expirationYear)) {
      setErrorThrown((prev) => ({
        ...prev,
        expirationYear: "Wrong format, numbers only",
      }));
    } else {
      setErrorThrown((prev) => ({
        ...prev,
        expirationYear: "",
      }));
    }

    if (cardInfo.cvcNumber.length === 0) {
      setErrorThrown((prev) => ({ ...prev, cvcNumber: "Can't be blank" }));
    } else if (cardInfo.cvcNumber.length != 3) {
      setErrorThrown((prev) => ({ ...prev, cvcNumber: "Incomplete field" }));
    } else if (isNaN(cardInfo.cvcNumber)) {
      setErrorThrown((prev) => ({
        ...prev,
        cvcNumber: "Wrong format, numbers only",
      }));
    } else {
      setErrorThrown((prev) => ({
        ...prev,
        cvcNumber: "",
      }));
    }
    setIsFirstRender(false);
    if (
      !errorThrown.name &&
      !errorThrown.cardNumber &&
      !errorThrown.expirationMonth &&
      !errorThrown.expirationYear &&
      !errorThrown.cvcNumber &&
      !isFirstRender
    ) {
      setIsConfirmed(true);
      alert("this is where we fire the render complete element");
    }
  }
  function handleComplete() {
    alert("continue pressed");
  }
  const formattedCardNumber = () => {
    let string = "";
    for (let i = 0; i < cardInfo.cardNumber.length; i += 4) {
      string = string + cardInfo.cardNumber.substring(i, i + 4) + " ";
    }
    return string;
  };
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
      {isConfirmed ? (
        <CompleteVerification handleComplete={handleComplete} />
      ) : (
        <Form
          name={name}
          cardNumber={cardNumber}
          expirationMonth={expirationMonth}
          expirationYear={expirationYear}
          cvcNumber={cvcNumber}
          errorThrown={errorThrown}
          handleChange={handleChange}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default App;
