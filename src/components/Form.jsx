export default function Form() {
  return (
    <div className="grid grid-cols-5 w-[375px]">
      <label className="flex flex-col col-span-5">
        CARDHOLDER NAME
        <input
          id="html"
          name="name"
          type="text"
          maxLength="70"
          placeholder="e.g. Jane Appleseed"
        />
      </label>
      <label className="flex flex-col col-span-5">
        CARD NUMBER
        <input
          id="card-number"
          name="card-number"
          type="text"
          maxLength="16"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </label>
      <label className="flex flex-col col-span-2">
        EXP DATE (MM/YY)
        <div className="flex flex-row">
          <input
            className="w-1/2"
            name="month"
            type="text"
            maxLength="2"
            placeholder="MM"
          />
          <input
            className="w-1/2"
            name="year"
            type="text"
            maxLength="2"
            placeholder="YY"
          />
        </div>
      </label>
      <label className="flex flex-col col-span-3">
        CVC
        <input
          className=""
          name="cvc"
          type="text"
          maxLength="3"
          placeholder="e.g. 123"
        />
      </label>
      <button className="col-span-5" type="submit" name="submit">
        Confirm
      </button>
    </div>
  );
}
