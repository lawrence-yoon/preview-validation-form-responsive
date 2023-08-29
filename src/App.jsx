// import { useState } from "react";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvcNumber: "",
  });
  function handleChange(e) {
    setCardInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleConfirm() {
    alert("pressed confirm");
  }
  const { name, cardNumber, expirationMonth, expirationYear, cvcNumber } =
    cardInfo;
  return (
    <div className="flex flex-col h-screen 2xl:flex-row">
      <div className="relative bg-[url('/images/bg-main-mobile.png')] w-screen h-2/6 2xl:bg-[url('/images/bg-main-desktop.png')] 2xl:h-screen 2xl:w-2/6">
        <div className="absolute bg-[url('/images/bg-card-back.png')] bg-cover top-[1.75rem] right-[1.125rem] w-[279px] h-[153px] text-lightGrayViolet">
          <p className="absolute top-[4.175rem] right-[2.4rem] text-[10px] tracking-widest">
            {cardInfo.cvcNumber ? cardInfo.cvcNumber : "000"}
          </p>
        </div>
        <div className="absolute bg-[url('/images/bg-card-front.png')] bg-cover bottom-[-2.875rem] left-[1.125rem] w-[279px] h-[153px] text-lightGrayViolet p-5">
          <img className="h-[2rem] w-auto" src="/images/card-logo.svg"></img>
          <p className="pt-8 text-lg font-medium tracking-widest">
            {cardInfo.cardNumber ? cardInfo.cardNumber : "000000000000000"}
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
      <Form
        name={name}
        cardNumber={cardNumber}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        cvcNumber={cvcNumber}
        handleChange={handleChange}
        handleConfirm={handleConfirm}
      />
    </div>
  );
}

export default App;
