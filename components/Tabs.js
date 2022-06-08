/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/


// const tabs = [
//   { name: "Blonde", href: "#", count: "12", current: false },
//   { name: "Product", href: "#", count: "6", current: false },
//   { name: "Color Correction", href: "#", count: "4", current: true },
//   { name: "Offers", href: "#", current: false },
//   { name: "Style", href: "#", current: false },
// ];

// console.log("tabs: " , tabs)

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ className, categories, posts }) {

 


  
  // console.table("all Posts: ", posts)
  // console.log("categories prop: ", categories)
  
  //get list of frequency of categories
  const categoryInfo = posts.map(post => post.categories)

  // console.log("categoryInfo: ", categoryInfo)

  //////////////////////Flatten the multidimensional array
  const flatten = (arr) => {
    let someNewArray = arr.reduce((acc, item) =>{
      //if item is an array 
      //or the item will be an item
      if(Array.isArray(item)){
        acc =  acc.concat(flatten(item));
      }
      else{
        //acc.push(item)
        acc = [...acc, item]
      }
      return acc;
    }, [])
      return someNewArray
  }

  console.log("flatten(categoryInfo): ", flatten(categoryInfo))

  ////////////////////////Get count of each caegory used
  const categoriesUsed =  flatten(categoryInfo);

  const numberOfPostsByCategory = categoriesUsed.reduce((acc, cur) => {
    const titleName = cur.categoryTitle
    if(acc[titleName]) {
      acc[titleName] ++;
    } else {
      acc[titleName] = 1;
    }
    return acc;
  }, [])

  console.log("numberOfPostsByCategory :" , numberOfPostsByCategory)
  ////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////findUnique List of Categories
  const catList = flatten(categoryInfo).map(item => item.categoryTitle)

  const uniqueCats = [...new Set(catList)]
  console.log("Unique Cats: ", uniqueCats)

  // console.log("CatList: " , catList )

 const count = []
 for (const key in numberOfPostsByCategory) {
   if (Object.hasOwnProperty.call(numberOfPostsByCategory, key)) {
     const element = numberOfPostsByCategory[key];
     count.push(element)
     
   }
 }

//  const tabs = uniqueCats.map((category , index) => { return {name: category , href: "#", count: count[index].toString(), current : "false" }})

// console.log(tabs)



const keys = Object.keys(numberOfPostsByCategory);
const values = Object.values(numberOfPostsByCategory);
let tabs = [];
for (let i = 0; i < keys.length; i++) {
    tabs.push({ categoryName: keys[i], count: '' + values[i], current: false , href: '#'});
}

console.log("new Obj" ,tabs);

tabs[0].current = true;
tabs.push()

 

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
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current).categoryName}
        >
          {tabs.map((tab) => (
              <option key={tab.categoryName}>{tab.categoryName}</option>
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
                  tab.current 
                    ? "border-primary text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                  "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.categoryName}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current
                        ? "bg-indigo-100 text-indigo-600"
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
    </div>
  );
}
