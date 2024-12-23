const PricingCards = ({ plans = [] }) => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-y-12 px-12 py-20 md:grid-cols-3 md:gap-x-12 md:gap-y-4 md:px-0">
      <h6 className="text-center text-sm font-bold text-gray-800 md:col-span-3">
        Pricing
      </h6>
      <h2 className="text-center text-4xl font-bold text-gray-800 md:col-span-3">
        Choose the right plan for you
      </h2>
      <p className="mb-10 text-center text-sm text-gray-400 md:col-span-3 md:px-8">
        A description about the pricing goes here. This is a longer description
        that provides more details about the pricing options available. It
        explains the benefits and features of each plan, helping users make an
        informed decision.
      </p>
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`w-full transform rounded-xl bg-gray-100 p-8 text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 ${
            plan.highlight
              ? "scale-110 animate-glow border border-secondary hover:scale-110"
              : ""
          } ${plan.additionalClasses}`}
        >
          <h3 className="text-xl font-semibold">{plan.title}</h3>
          <p className="text-4xl font-bold">
            {plan.price}
            <span className="text-xl font-normal">/mo</span>
          </p>
          <p className="mt-3 text-sm text-gray-600">{plan.duration}</p>
          <div className="mt-2 flex flex-col gap-4 border-t-2 border-secondary-hover pt-4">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center space-x-2">
                <span className="text-primary-hover">
                  <feature.icon />
                </span>
                <span className="font-medium text-gray-800">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
          <button
            className={`mt-8 w-full rounded py-2 font-semibold text-black shadow-lg transition-all hover:bg-secondary hover:text-white ${
              index === 1 ? "bg-orange-500 text-white" : "bg-white"
            }`}
          >
            {plan.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
