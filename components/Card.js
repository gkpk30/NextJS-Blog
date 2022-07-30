import Image from "next/image";
import Link from "next/link";

export default function Card({ post }) {
  
  
  const readTime = (content) => {
    // console.log("for reading time:", content)
    const words = content.split(" ").length;
    // console.log("words: ", words)
    const readingTime = words / 200;
    // console.log("readingTime: ", readingTime.toFixed(0));

    return readingTime.toFixed(0);
  };

  return (
    <div
      key={post.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0 ">
        <Image
          className="h-48 w-full object-cover"
          src={post.coverPhoto.url}
          height={"192px"}
          width={"300px"}
          layout="responsive"
          alt=""
        />
      </div>
      <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {post.categories.map((cat, index) => {
              return (
                <Link href={`/${cat.categoryTitle}`} key={index} >
                  <a className="hover:underline mr-2 lowercase ">
                    {cat.categoryTitle}
                  </a>
                </Link>
              );
            })}
          </p>
          <Link href={`/post/${post.slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-200">
                {post.excerpt}
              </p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center ">
          <div className="flex-shrink-0">
            <Link 
            href={`/author/${post.author.name}`}
            
            >
              <a>
                <span className="sr-only text-gray-500 dark:text-gray-200">
                  {post.author.name}
                </span>
                <Image
                  className="h-10 w-10 rounded-full text-gray-500 dark:text-gray-200"
                  width={40}
                  height={40}
                  src={post.author.avatar.url}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                <Link 
                    href={`/author/${post.author.name}`}
                >
                    <a  className="hover:underline">
                        {post.author.name}
                    </a>
                </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toDateString()}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{readTime(post.content.html)} minute read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
