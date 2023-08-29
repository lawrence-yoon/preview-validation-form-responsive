/* eslint-disable react/prop-types */
export default function Form({
  name,
  cardNumber,
  expirationMonth,
  expirationYear,
  cvcNumber,
  handleChange = () => {},
  handleConfirm = () => {},
}) {
  return (
    <div className="grid grid-cols-6 w-fit px-7 pt-24 gap-6">
      <label className="flex flex-col col-span-6 text-xs tracking-widest">
        CARDHOLDER NAME
        <input
          id="html"
          name="name"
          type="text"
          maxLength="70"
          placeholder="e.g. Jane Appleseed"
          className="border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] active:border-darkGrayViolet"
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className="flex flex-col col-span-6 text-xs tracking-widest">
        CARD NUMBER
        <input
          id="card-number"
          name="cardNumber"
          type="text"
          maxLength="16"
          placeholder="e.g. 1234 5678 9123 0000"
          className="border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] active:border-darkGrayViolet"
          onChange={handleChange}
          value={cardNumber}
        />
      </label>
      <label className="flex flex-col col-span-3 text-xs tracking-widest whitespace-nowrap">
        EXP. DATE (MM/YY)
        <div className="flex flex-row gap-3">
          <input
            className="w-[4.5rem] border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] active:border-darkGrayViolet"
            name="expirationMonth"
            type="text"
            maxLength="2"
            placeholder="MM"
            onChange={handleChange}
            value={expirationMonth}
          />
          <input
            className="w-[4.5rem] border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] active:border-darkGrayViolet"
            name="expirationYear"
            type="text"
            maxLength="2"
            placeholder="YY"
            onChange={handleChange}
            value={expirationYear}
          />
        </div>
      </label>
      <label className="flex flex-col col-span-3 text-xs tracking-widest">
        CVC
        <input
          className="border border-lightGrayViolet rounded-md px-4 py-2 mt-2 text-[18px] active:border-darkGrayViolet"
          name="cvcNumber"
          type="text"
          maxLength="3"
          placeholder="e.g. 123"
          onChange={handleChange}
          value={cvcNumber}
        />
      </label>
      <button
        className="col-span-6 border p-2 rounded-lg bg-veryDarkGrayViolet text-white text-[18px]"
        type="submit"
        name="submit"
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </div>
  );
}
