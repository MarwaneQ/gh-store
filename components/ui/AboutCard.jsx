function AboutCard({
  title,
  shortTitle,
  description,
  features,
  imagesrc,
  reverse,
}) {
  return (
    <div
      className={`flex w-full flex-col justify-between px-10 py-20 md:w-full md:flex-row md:px-24 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className={`flex ${reverse ? "justify-end" : ""} items-center`}>
        <img
          className="h-auto w-full object-cover"
          src={imagesrc}
          alt="About"
        />
      </div>
      <div className="w-full px-10">
        <h5 className="mt-8 text-orange-500">{shortTitle}</h5>
        <h2 className="mt-2 text-6xl font-semibold text-blue-700">{title}</h2>
        <p className="mt-4">{description}</p>
        <ul className="mt-4 list-inside list-disc">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
