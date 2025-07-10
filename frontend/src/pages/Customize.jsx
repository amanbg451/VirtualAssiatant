import React, { useContext, useRef, useState } from 'react';
import { RiImageAddLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/authBg.png";
import { UserDataContext } from '../context/UserContext';

function Customize() {
  const { serverUrl,
    userData,
    setUserData,
    frontendImage,
    setFrontendImage,
    backendImage,
    setBackendImage,
    selectedImage, setSelectedImage } = useContext(UserDataContext)
  const inputImage = useRef()
  const navigate = useNavigate();

  const handleImage = (e) => {
    // e.preventDefault();
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
        <div onClick={() => { inputImage.current.click(), setSelectedImage("input") }}
          className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-blue-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage == "input" ? "border-4 border-white shadow-2xl shadow-blue-950" : null} `}>
          {!frontendImage && <RiImageAddLine className='text-white w-[25px] h-[25px] ' />}
          {frontendImage && <img src={frontendImage} alt="custom" className='w-full h-full object-cover' />}

        </div>
        <input onChange={handleImage} type="file" accept='image/*' ref={inputImage} hidden />
      </div>
      {selectedImage && <button className='mt-5 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-blue-300 transition duration-300 cursor-pointer' onClick={() => navigate("/customize2")}>Next</button>}

    </div>

  );
}

export default Customize;
