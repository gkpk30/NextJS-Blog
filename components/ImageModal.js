import { useState } from "react";
import Image from "next/image";

const ImageModal = () => {
  const [open, setOpen] = useState(true);
  return 
  (
    <div className="hidden fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center" >
        {/* //Close button */}
        <a className="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
        onClick={closeModal()} >
            &times;
        </a>
        <Image className="max-w-4xl max-h-[600px] object-cover">

        </Image>



    </div>
  )
};
export default ImageModal;
