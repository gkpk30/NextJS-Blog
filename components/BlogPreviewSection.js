
import Card from "./Card";



export default function BlogPreviewSection({ posts }) {
  return (
    <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-48 lg:pb-48 lg:px-8">
      <div className="absolute inset-0">
        <div className=" h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center relative">
          <h2 className="text-3xl font-primary tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
            Latest From the
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block ml-2">
              <span className="relative text-white text-6xl">blog</span>
            </span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl font-semibold text-gray-500 sm:mt-4">
            Beauty secrets from Headbetter Salon in Los Angeles
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
