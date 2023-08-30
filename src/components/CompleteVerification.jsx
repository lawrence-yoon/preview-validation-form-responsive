/* eslint-disable react/prop-types */
export default function CompleteVerification({ handleComplete }) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm px-7 pt-24 gap-4">
      <img className="h-[5rem] w-fit" src="/images/icon-complete.svg" />
      <p className="pt-4 text-[1.625rem] tracking-widest">THANK YOU!</p>
      <p className="text-[18px] pb-4 text-darkGrayViolet">
        We&apos;ve added your card details
      </p>
      <button
        className="border w-full py-2.5 rounded-lg bg-veryDarkGrayViolet text-white text-[18px]"
        onClick={handleComplete}
      >
        Continue
      </button>
    </div>
  );
}
