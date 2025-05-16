
const BrandLogos = () => {
  const brands = [
    {
      name: "Exide",
      logo: "/lovable-uploads/508f0069-1211-45d4-913b-c3fc62f2e230.png",
    },
    {
      name: "Amaron",
      logo: "/lovable-uploads/463a0e42-ed1c-4932-8ffb-db4758eca5cf.png",
    },
    {
      name: "Luminous",
      logo: "/lovable-uploads/3e813278-5c6d-480e-aa32-5216cff91ba2.png",
    },
  ];

  return (
    <div className="py-8">
      <h3 className="text-center text-gray-600 mb-6 font-medium">Authorized Dealer For</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center">
            <img
              src={brand.logo}
              alt={`${brand.name} Logo`}
              className="h-20 md:h-24 object-contain hover:opacity-90 transition-all"
            />
            <span className="mt-2 text-sm text-gray-500">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
