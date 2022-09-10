import Link from "next/link";



export default function BlogSection({ latestPosts }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-fourth tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight">
            Subscribe
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500 dark:text-gray-300">
              Get weekly articles in your inbox on the latest industry secrets
              from HeadBetter.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {latestPosts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toDateString()}
                </time>
              </p>
              <div  className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-3">
                <Link href={`/post/${post.slug}`}>
                  <a className="text-base font-semibold dark:text-gray-300 text-gray-700 hover:text-gray-600">
                    Read full story
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
