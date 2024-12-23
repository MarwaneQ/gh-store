const partners = [
  {
    name: "Amazon",
    logo: "gupex-logo.webp",
  },
  {
    name: "Google",
    logo: "yalidine-logo.png",
  },
  {
    name: "Microsoft",
    logo: "zr.png",
  },
];

function Partners() {
  return (
    <div className="0 mx-auto flex flex-col items-center justify-between gap-12 pb-16 pt-10 md:max-w-screen-lg">
      <h4 className="text-5xl font-bold text-primary">Our Partners</h4>
      <div className="flex w-full flex-col items-center justify-evenly gap-4 md:flex-row">
        {partners.map((partner, index) => (
          <div key={index} className="w-40">
            <img src={`/assets/images/${partner.logo}`} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
