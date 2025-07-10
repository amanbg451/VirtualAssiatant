import React, { useRef, useState } from 'react';
import { RiImageAddLine } from 'react-icons/ri';
import Card from '../components/Card';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/authBg.png";

function Customize() {
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const inputImage = useRef()

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file));
  }

  return (
    <div className="w-full h-[100vh] p-[20px] bg-gradient-to-t from-black to-[#030353] flex justify-center items-center flex-col">
      <h1 className='text-white text-[30px] mb-10 text-center'>Select Your <span className='text-blue-400'>Assitant Image</span></h1>
      <div className="w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />
        <div onClick={() => inputImage.current.click()} className="w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-blue-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ">
          {!frontendImage && <RiImageAddLine className='text-white w-[25px] h-[25px] ' />}\
          {frontendImage && <img src={frontendImage} alt="custom" className='w-full h-full object-cover' />}

        </div>
        <input onChange={handleImage} type="file" accept='image/*' ref={inputImage} hidden />
      </div>
      <button className='mt-5 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-blue-300 transition duration-300 cursor-pointer '>Next</button>
    </div>

  );
}

export default Customize;
