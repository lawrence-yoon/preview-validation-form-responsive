/* eslint-disable react/prop-types */
export default function Form({
  name,
  cardNumber,
  expirationMonth,
  expirationYear,
  cvcNumber,
  errorMessage,
  handleChange = () => {},
  handleConfirm = () => {},
}) {
  return (
    <div className="grid grid-cols-6 w-fit max-w-sm h-fit mx-auto my-auto px-7 pt-20 gap-6">
      <label className="relative flex flex-col col-span-6 text-xs tracking-widest h-fit">
        CARDHOLDER NAME
        <input
          autoFocus
          id="html"
          name="name"
          type="text"
          maxLength="70"
          placeholder="e.g. Jane Appleseed"
          className={`border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] outline outline-2 ${
            errorMessage.name
              ? "outline-errorRed border-transparent"
              : "outline-transparent active:outline-darkGrayViolet focus:outline-darkGrayViolet"
          } `}
          onChange={handleChange}
          value={name}
        />
        {errorMessage.name ? <ErrorLabel message={errorMessage.name} /> : null}
      </label>
      <label className="relative flex flex-col col-span-6 text-xs tracking-widest h-fit">
        CARD NUMBER
        <input
          id="card-number"
          name="cardNumber"
          type="text"
          maxLength="16"
          placeholder="e.g. 1234 5678 9123 0000"
          className={`border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] outline outline-2 ${
            errorMessage.cardNumber
              ? "outline-errorRed border-transparent"
              : "outline-transparent active:outline-darkGrayViolet focus:outline-darkGrayViolet"
          }`}
          onChange={handleChange}
          value={cardNumber}
        />
        {errorMessage.cardNumber ? (
          <ErrorLabel message={errorMessage.cardNumber} />
        ) : null}
      </label>
      <label className="relative flex flex-col col-span-3 text-xs tracking-widest h-fit whitespace-nowrap">
        EXP. DATE (MM/YY)
        <div className="flex flex-row gap-3">
          <input
            className={`w-[4.5rem] border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] outline outline-2 ${
              errorMessage.expirationMonth
                ? "outline-errorRed border-transparent"
                : "outline-transparent active:outline-darkGrayViolet focus:outline-darkGrayViolet"
            }`}
            name="expirationMonth"
            type="text"
            maxLength="2"
            placeholder="MM"
            onChange={handleChange}
            value={expirationMonth}
          />
          <input
            className={`w-[4.5rem] border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] outline outline-2 ${
              errorMessage.expirationYear
                ? "outline-errorRed border-transparent"
                : "outline-transparent active:outline-darkGrayViolet focus:outline-darkGrayViolet"
            }`}
            name="expirationYear"
            type="text"
            maxLength="2"
            placeholder="YY"
            onChange={handleChange}
            value={expirationYear}
          />
        </div>
        {errorMessage.expirationMonth || errorMessage.expirationYear ? (
          <ErrorLabel
            message={
              errorMessage.expirationMonth || errorMessage.expirationYear
            }
          />
        ) : null}
      </label>
      <label className="relative flex flex-col col-span-3 text-xs tracking-widest h-fit">
        CVC
        <input
          className={`border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] outline outline-2 ${
            errorMessage.cvcNumber
              ? "outline-errorRed border-transparent"
              : "outline-transparent active:outline-darkGrayViolet focus:outline-darkGrayViolet"
          }`}
          name="cvcNumber"
          type="text"
          maxLength="3"
          placeholder="e.g. 123"
          onChange={handleChange}
          value={cvcNumber}
        />
        {errorMessage.cvcNumber ? (
          <ErrorLabel message={errorMessage.cvcNumber} />
        ) : null}
      </label>
      <button
        className="col-span-6 border py-2.5 rounded-lg bg-veryDarkGrayViolet text-white text-[18px] h-fit"
        type="submit"
        name="submit"
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </div>
  );
}

function ErrorLabel({ message }) {
  return (
    <label className="absolute text-errorRed text-[11px] tracking-tight -bottom-5">
      {message}
    </label>
  );
}
