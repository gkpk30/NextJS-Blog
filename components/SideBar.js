import axios from "axios"
import React, {useEffect, useState} from 'react'
import MyPhoto from '../assets/images/man-suit-gray-min.jpeg'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    

  return (
   
        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <nav aria-label="Sidebar" className="sticky top-6 ">
              {/* Your content */}
              
                <div className="pt-28" >
                    <div className="border-y-2 py-2 flex justify-center mb-4">
                        <span className=" font-medium text-gray-900 ">About Me</span>
                    </div>
                    <img src={MyPhoto} alt=""  />
                    <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum nobis commodi. Quidem rem alias reiciendis perferendis nesciunt modi libero.
                    </p>


                </div>
                <div className="category section">
                    <span className=" border-y-2 py-2 flex justify-center my-4 font-medium text-gray-900">Categories</span>
                    <ul className="flex  flex-wrap  gap-y-4 justify-between">
                        
                        {cats.map(cat =>
                            <Link to={`/?cat=${cat.name}`} key={cat._id}>
                                <li className="w-1/2 text-center" key={cat._id}>{cat.name}</li>
                            </Link>
                        )}
                        
                    </ul>
                </div>
                <div className="border-y-2 py-2 flex justify-center my-4 font-medium text-gray-900">
                    <span>Folow us</span>
                    
                </div>
                <div className="flex justify-center space-x-4 ">
                    <i className="text-2xl"><AiFillFacebook/></i>
                    <i className="text-2xl"><AiFillInstagram/></i>
                    
                </div>
            </nav>
        </div>
    
  )
}