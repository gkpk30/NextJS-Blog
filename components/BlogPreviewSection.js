import Image from "next/image";
import Card from "./Card";

/* This example requires Tailwind CSS v2.0+ */
// const posts = [
//     {
//       title: 'Boost your conversion rate',
//       href: '#',
//       category: { name: 'Article', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '6 min',
//       author: {
//         name: 'Roel Aufderehar',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       title: 'How to use search engine optimization to drive sales',
//       href: '#',
//       category: { name: 'Video', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//       date: 'Mar 10, 2020',
//       datetime: '2020-03-10',
//       imageUrl:
//         'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '4 min',
//       author: {
//         name: 'Brenna Goyette',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       title: 'Improve your customer experience',
//       href: '#',
//       category: { name: 'Case Study', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//       date: 'Feb 12, 2020',
//       datetime: '2020-02-12',
//       imageUrl:
//         'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '11 min',
//       author: {
//         name: 'Daniela Metz',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//   ]

export default function BlogCard({ posts }) {
  return (
    <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className=" h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center relative">
          <div className="absolute -top-60 left-10 ">
            <svg
              width="526"
              height="527"
              viewBox="0 0 526 527"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.7" clipPath="url(#clip0_15_95)">
                <path
                  opacity="0.7"
                  d="M102.078 160.247L420.61 159.704"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M89.8415 174.525L428.676 173.671"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M85.3935 188.676L433.948 187.681"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M85.1617 202.774L441.61 201.662"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M81.7041 216.914L449.471 215.632"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M80.2484 231.026L458.718 229.584"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M78.6865 245.143L462.328 243.615"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M77.1461 259.254L470.054 257.59"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M76.0158 273.357L473.572 271.626"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M73.2797 287.496L474.019 285.707"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M72.178 301.6L476.426 299.759"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M71.9107 315.69L478.578 313.821"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
                <path
                  opacity="0.7"
                  d="M69.3587 329.818L461.496 328.162"
                  stroke="#9656B3"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0.3 0.3"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_95">
                  <rect
                    width="372.01"
                    height="370.84"
                    fill="white"
                    transform="translate(267.174 0.816284) rotate(46)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute -top-60 right-0">
            <svg
              width="1786"
              height="1786"
              viewBox="0 0 786 786"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M192.976 36L36 192.976L192.976 349.952L349.952 192.976L192.976 36Z"
                stroke="#a35b6a"
                strokeOpacity="0.18"
                strokeWidth="50"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
            Latest From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>

        {/* Blog Card  */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post, index) => (
            <Card post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
