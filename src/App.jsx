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
  const { name, cardNumber, expirationMonth, expirationYear, cvcNumber } =
    cardInfo;
  function handleChange(e) {
    setCardInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleConfirm() {
    alert("pressed confirm");
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
      <div className="bg-[url('/images/bg-main-mobile.png')] bg-cover w-screen h-2/6 2xl:bg-[url('/images/bg-main-desktop.png')] 2xl:h-screen 2xl:w-2/6">
        <div className="relative w-full max-w-[375px] min-h-[222px] h-full  mx-auto ">
          <div className="absolute bg-[url('/images/bg-card-back.png')] bg-cover top-[1.75rem] right-[1.125rem] w-[279px] h-[153px] text-lightGrayViolet">
            <p className="absolute top-[4.175rem] right-[2.4rem] text-[10px] tracking-widest">
              {cardInfo.cvcNumber ? cardInfo.cvcNumber : "000"}
            </p>
          </div>
          <div className="absolute bg-[url('/images/bg-card-front.png')] bg-cover bottom-[-2.875rem] left-[1.125rem] w-[279px] h-[153px] text-lightGrayViolet p-5">
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
