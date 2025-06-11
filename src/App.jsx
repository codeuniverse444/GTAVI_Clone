import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(()=>{
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
   

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove *1.7 ,
      });
      gsap.to(".girl2", {
        x: xMove *1.7 ,
        y: yMove *1.7 ,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && ( 
      <div className="main w-full rotate-[-10deg] scale-[1.5] ">   {/*content will only be showned when value of showcontent will be true(&&) */}
        <div className='landing overflow-hidden relative w-full h-screen bg-black'>
          <div className='navbar absolute top-0 left-0 z-[10] w-full py-8 px-8 '>
            <div className='logo flex gap-5'>
              <div className='lines flex flex-col gap-1'>
                <div className='line w-10 h-1 bg-white'></div>
                <div className='line w-8 h-1 bg-white'></div>
                <div className='line w-5 h-1 bg-white'></div>
              </div>
              <h3 className='text-xl -mt-[7px] text-white'>Rockstar</h3>
            </div>
          </div>

          <div className='imagesdiv relative overflow-hidden w-full h-screen'>
            <img className='absolute sky scale-[1.3] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
            <img className='bg absolute scale-[1.7] rotate-[-3deg] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />

            <div className='text text-white absolute flex flex-col gap-2 top-10 left-1/2 -translate-x-1/2 '>
              <h1 className='text-[8rem] leading-none -ml-30'>grand</h1>
              <h1 className='text-[8rem] leading-none -ml-15'>theft</h1>
              <h1 className='text-[8rem] leading-none -ml-30'>auto</h1>
            </div>
            <img className='character absolute -bottom-[60%] left-1/2 -translate-x-1/2 scale-[0.6]' src="./girlbg.png" alt="" />
          </div>

          <div className='btmbar text-white absolute bottom-0 left-0 w-full py-11 px-8 bg-gradient-to-t from-black to-transparent'>
            <div className='flex gap-2 items-center'>
              <i className="text-2xl ri-arrow-down-line"></i>
              <h3 className='text-l'>Scroll Down</h3>
            </div>
            <img className=' absolute h-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="./ps5.png" alt="" />
          </div>
        </div>

        {/* page2 */}
        <div className='w-full h-screen flex items-center justify-center bg-black'>
          <div className='cntnr flex text-white w-full h-[80%] '></div>
          <div className='limg relative w-1/2 h-full'>
            <img className='absolute girl2 top-1/2 -left-1/2 scale-[1.3] -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
          </div>
          <div className='rg w-[40%] '>
            <h1 className=' text-white mr-10 text-6xl'>Still Running,</h1>
            <h1 className='text-white mr-10 text-6xl'>Not Hunting</h1>
            <p className='text-white mr-10 text-l mt-10 font-[Helvetica_Now_Display]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate voluptates magnam nemo natus reprehenderit iste. Facilis dignissimos consequuntur ex est, delectus nam.</p>
            <p className='text-white mr-10 text-l mt-3 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, tempore. Accusantium, nesciunt architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugiat ullam vel laborum suscipit. Tempora.</p>
            <button className='bg-yellow-500 px-7 py-7 mt-10 text-black text-l  hover:bg-white'>Download Now</button>
          </div>
        </div>

        {/* page3 */}
       <div className="w-full min-h-screen bg-black px-8 py-12 flex justify-center items-start">
        <div className="flex flex-wrap gap-8 max-w-7xl w-full justify-center">
          {/* Card 1 - GTA Online */}
           <div className="bg-black text-white border border-gray-700 w-full md:w-[320px] flex flex-col items-center p-6 rounded">
           <img src="./bg2.png" alt="GTA Online" className="w-full mb-6" />
           <h2 className="text-xl font-bold mb-2 text-center">Grand Theft Auto Online</h2>
           <p className="mb-3 text-center">Includes <span className="font-semibold">GTA Online</span></p>
           <div className="flex gap-3 text-2xl justify-center mb-3">
       </div>
           <p className="text-xs text-gray-400 mb-4 text-center">Story mode upgrade available in game</p>
            <button className="w-full bg-black text-white border border-white px-4 py-2 mt-auto hover:bg-white hover:text-black transition"> SELECT PLATFORM </button>
        </div>

         {/* Card 2 - GTA V */}
       <div className="bg-black text-white border border-gray-700 w-full md:w-[320px] flex flex-col items-center p-6 rounded">
           <img src="./bg3.png" alt="GTA V" className="w-full mb-6" />
            <h2 className="text-xl font-bold mb-2 text-center">Grand Theft Auto V</h2>
           <p className="mb-3 text-center">Includes <span className="font-semibold">GTAV Story Mode</span> & <span className="font-semibold">GTA Online</span></p>
          <div className="flex gap-2 text-2xl justify-center mb-4">
       </div>
         <button className="w-full bg-black text-white border border-white px-4 py-2 mt-auto hover:bg-white hover:text-black transition"> SELECT PLATFORM</button>
       </div>
       </div>
       </div>
      </div>
      )}
      
    </>
  );
}

export default App;
