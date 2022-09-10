import Card from "../components/Card";
import { useState, useEffect } from "react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ className, categories, posts }) {
  const [blogData, setBlogData] = useState(posts);
  const [currentTabIndex, setCurrentTabIndex] = useState("0");

  const numberOfPosts = Object.keys(posts).length;
 
  //get list of frequency of categories
  const categoryInfo = posts.map((post) => post.categories);

  //////////////////////Flatten the multidimensional array
  const flatten = (arr) => {
    let someNewArray = arr.reduce((acc, item) => {
      //if item is an array
      //or the item will be an item
      if (Array.isArray(item)) {
        acc = acc.concat(flatten(item));
      } else {
        //acc.push(item)
        acc = [...acc, item];
      }
      return acc;
    }, []);
    return someNewArray;
  };


  ////////////////////////Get count of each category using a flatten and reduce method
  const categoriesUsed = flatten(categoryInfo);

          //reduce method sums up the number of instances of each category and creates an array of size 0 
  const numberOfPostsByCategory = categoriesUsed.reduce((acc, cur) => {
    const titleName = cur.categoryTitle;
    if (acc[titleName]) {
      acc[titleName]++;
    } else {
      acc[titleName] = 1;
    }
    return acc;
  }, []);

  // console.log("numberOfPostsByCategory", numberOfPostsByCategory);
  ////////////////////////////////////////////////////////////////////



  ///////////////////////////////////////Didn't use the below. But shorter alternative than numberOfPostsByCategory using reduce method. Useing flatten method and New Set method creates a Unique List of Categories for Tab header
  //get all categories 
  const catList = flatten(categoryInfo).map((item) => item.categoryTitle);
  /////use Set method: Set objects are collections of values. A value in the Set may only occur once; 
  const uniqueCats = [...new Set(catList)];
  /////////////////////////////////////////////////////////////////////////////////

////Get just the number values from the numberOfPostsByCategory and put it into an array (i.e.  [2, 8, 1, 3, 2, 1]). 
  const count = [];
  for (const key in numberOfPostsByCategory) {
    if (Object.hasOwnProperty.call(numberOfPostsByCategory, key)) {
      const element = numberOfPostsByCategory[key];
      count.push(element);
    }
  }
// console.log("count:", count)
 
//Below creates an array of objects called "tabs" that contains the key value pairs of categoryName and count etc
    //"keys" variable: extracts all the keys from the "numberOfPostsByCategory" array
    //"values" variable: extracts the values from the "numberOfPostsByCategory" array
    // The'keys' arrat and a 'values' array are then combined  into an object called 'tabs' using a for loop
  const keys = Object.keys(numberOfPostsByCategory);
  const values = Object.values(numberOfPostsByCategory);
  let tabs = [];
  for (let i = 0; i < keys.length; i++) {
    tabs.push({
      categoryName: keys[i],
      count: "" + values[i],
      current: false,
      href: "#",
    });
  }
  //console.log("tabs" , tabs)
///////////////////////////////////////////////////////////////////////////////
  

  //add 'All' category with total count of posts
  tabs.unshift({
    categoryName: "All",
    count: numberOfPosts,
    current: false,
    href: "#",
  });
  tabs[currentTabIndex].current = true;

  const handleGetFiltered = (category) => {
    
    const currentTabTrueIndex = tabs.findIndex((tab) => tab.current === true);
    tabs[currentTabTrueIndex].current = false;
  
    const currentIndex = tabs.findIndex((tab) => tab.categoryName === category);
    setCurrentTabIndex(currentIndex);
    tabs[currentTabIndex].current = true;
    
  
    if (category === "All") {
      setBlogData(posts);
    } else {
      const blogsFiltered = posts.filter((blog) =>
        blog.categories.some((x) => x.categoryTitle === category)
      );
      
      setBlogData(blogsFiltered);
    }
  };

  

  return (
    <div className={`${className}`}>
      <div className="sm:hidden ">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 dark:text-gray-900 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current).categoryName}
          onChange={(e) => handleGetFiltered(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.categoryName} value={tab.categoryName}>
              {" "}
              {tab.categoryName}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.categoryName}
                href="#"
                className={classNames(
                  tab.current === true
                    ? "border-primary text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                  "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
                onClick={() => handleGetFiltered(tab.categoryName)}
              >
                {tab.categoryName}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current === true
                        ? "bg-indigo-200 dark:bg-indigo-300 dark:text-indigo-900 text-indigo-900"
                        : "bg-gray-100 text-gray-900",
                      "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {blogData.map((blog, index) => (
          <Card post={blog} key={index} />
        ))}
      </div>
    </div>
  );
}
