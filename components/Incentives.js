
import ecoGirl from '../public/images/ecoGirl.jpeg'

/* This example requires Tailwind CSS v2.0+ */
const incentives = [
  {
    name: "Choose Sustainability",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "We made a choice to stand for something important, Sustainability.",
  },
  {
    name: "Minamalist",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "We made a partner when we found Davines - minimalist packaging, environmentally sustainable plant based styling aids and true commitment to giving back to the Mother Earth.",
  },
  {
    name: "Eco-Friendly",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Headbetter sought to provide the most eco-friendly and client conscious product line we could get our hands on.",
  },
];

export default function Incentives() {
  return (
    <div 
    className="bg-white     "
    >
      <div className="max-w-7xl mx-auto   pb-36 pt-36  ">
        <div className="max-w-2xl mx-auto  lg:max-w-none px-4 sm:px-6 ">
          <div className="max-w-3xl relative">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-900">
              Headbetter sources environmentally conscious products that are
              good for our clients and good to the earth.
            </h2>
            <p className="mt-4 font-semibold text-gray-800 dark:text-gray-900">
              One of the most important choices we faced as a salon was how we
              were going to interact with our community and our planet. We
              decided as a collective we were going to put the well being of our
              clients, our community and the earth before our profits.
            </p>

        
            
          </div>
          <div className="relative mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="relative sm:flex-shrink-0  ">
                <span className="block absolute -inset-1  bg-[#ffeac5] w-10 h-10 rounded-full " aria-hidden="true"></span>
                  <img className="relative w-16 h-16 z-10" src={incentive.imageSrc} alt="" />
                  
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-900">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
