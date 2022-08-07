
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";



export const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl3uirm1te1df01xk03pcdmi5/master"
);

const QUERY = gql`
  {
    stylists {
      name
      position
      bio {
        html
      }
      avatar {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { stylists} = await graphcms.request(QUERY);
  return {
    props: {
      stylists
    },
  };
}
export default function Artists({stylists}) {
 

  return (
    <div className="relative">
      <div className="hidden sm:block absolute -top-20 right-0 bg-gradient-to-r from-gray-400 to-third sm:h-[40rem] opacity-20 lg:h-[50rem] w-1/2 sm:w-1/3  z-10 "></div>
      <div className="relative bg-gradient-to-r from-third to-secondary dark:from-gray-900   dark:to-primary-dark mx-auto max-w-7xl w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8  text-center lg:py-48 lg:text-left z-20">
        <div className="flex flex-col sm:flex-row gap-5 ">
          <div className="flex flex-col sm:w-1/2 ">
            <div className="text-sm mb-8 font-bold text-gray-300">ABOUT US</div>
            <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-red-200 dark:from-primary dark:to-gray-50 font-primary text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"> HeadBetter is where the heart is </h1>
          </div>
          <div className="flex flex-col sm:w-1/2 leading-7 ">
            <p className="text-left text-gray-50">
              HeadBetter Salon is a boutique person collective of influential
              Hairstylists who specialize in Balayage Highlights, Extension,
              HairCutting and Red Carpet Styling. We are located in the heart of
              Sherman Oaks on Ventura Boulevards hottest block for Fashion,
              Culture and Nightlife
            </p>
            <button className="mt-8 text-gray-100 text-left bg-primary hover:bg-primary-dark p-2 rounded-lg w-fit z-20 ">
              Meet our team, the finest Los Angeles has to offer.
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-600 dark:text-gray-400">
                THE TEAM
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Headbetter Salon is a collective of hairdressers. We have chosen
                people that care about their clients to fill our chairs. We have
                fun while we work. We found that the more honest and successful
                a hairdresser was, the less they put on arrogant heirs. We rid
                the salon of false pretense and let our art speak for itself.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
              >
                {stylists.map((stylist) => (
                  <li key={stylist.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src={stylist.avatar.url}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="text-gray-500 dark:text-gray-300 font-semibold font-primary">{stylist.name}</h3>
                            <p className="text-indigo-600">{stylist.position}</p>
                          </div>
                          <div className="text-lg">
                            {/* <p className="text-gray-500">{stylist.bio.html}</p> */}
                            <div className="text-gray-500 dark:text-gray-400 "  dangerouslySetInnerHTML={{ __html: stylist.bio.html }} />
                          </div>
                          <ul role="list" className="flex space-x-5">
                            <li>
                              <a
                                // href={stylist.twitterUrl}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Twitter</span>
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                // href={stylist.linkedinUrl}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
