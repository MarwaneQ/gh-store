function CTA() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-5 items-center justify-between bg-action-bg bg-cover px-3 py-32 md:flex-row md:justify-end md:px-20 lg:px-40">
      <div className=" md:col-span-2"></div>
      <div className=" md:col-span-2 gap-3 flex flex-col">
        <h6 className="rounded-md bg-black p-2 text-base font-semibold text-secondary md:bg-transparent md:text-lg">
          Fusce lobortis porttitor purus
        </h6>
        <h4 className="text-black rounded-md bg-white px-2 text-4xl font-bold md:bg-transparent md:text-5xl">
          Try now for free
        </h4>
      </div>
      <button className="rounded-md bg-secondary py-4 text-xs font-medium text-white transition duration-300 hover:bg-secondary-hover">
        Contact us
      </button>
    </div>
  );
}

export default CTA;
