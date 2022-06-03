import React, {useEffect, useState} from 'react'
import Link from 'next/link'





export default function SinglePost() {

  
  //update a post
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [updateMode, setUpdateMode] = useState(false)



  const [post, setPost] = useState({})

  useEffect(() => {
    
  }, [])



  

  
  

  return (
    <div className="lg:col-span-9 xl:col-span-10 font-primary ">
      <div className="singlePostWrapper p-5 pr-0 ">
        {/* check if post.photo exists otherwise stock image */}
        {post.photo ?  
           <img src={PF + post.photo} 
           alt={post.photo.alt} 
           className="singlePostImage w-full lg:h-[35rem] sm:h-80 object-cover rounded-lg lg:object-top sm:object-center" />
          :
          <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="" className="singlePostImage w-full h-80 object-cover rounded-md" />
        // <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" className="singlePostImage w-full h-80 object-cover rounded-md" />
        }
        {/* https://unsplash.com/photos/oM5YoMhTf8E */}
        {/* https://source.unsplash.com/oM5YoMhTf8E/{WIDTHxHEIGHT} */}

       
       
        <h1 className=" md:w-[90%] text-left font-third text-3xl mr-3 mt-5 mb-3">
          {title} 

         
        </h1>
        
        
        {/* {post.category &&  */}
        <div >
          <h3 className='text-textGold font-secondary text-lg uppercase font-bold'>category</h3>
        </div>
        {/* } */}
        
       
        
        <div className=" my-12 flex justify-between text-lg font-fourth mr-20 text-textGold ">
          <span className="singlePostAuthor">Author: <Link className='hover:font-black' href={`/?user=${post.username}`}><b>{post.username}</b></Link> </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
       
            <p className="text-[#666] text-lg first-line:uppercase first-line:tracking-widest
                        first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                        first-letter:mr-3 first-letter:float-left "
            >
              {desc}
            </p>
        
          
      </div>

    </div>
  )
}