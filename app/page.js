"use client";
import React from "react";
import AOS from "aos";
import { useEffect, useState } from "react";

const keyMap = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
};

const poses = {
  idle: "https://cdn.cdnstep.com/5dLoh8BM9UMZAC8rc0tY/13.thumb128.webp",
  up: "https://cdn.cdnstep.com/5dLoh8BM9UMZAC8rc0tY/22.thumb128.webp",
  down: "https://cdn.cdnstep.com/5dLoh8BM9UMZAC8rc0tY/18.thumb128.webp",
  left: "https://cdn.cdnstep.com/5dLoh8BM9UMZAC8rc0tY/21.thumb128.webp",
  right: "https://cdn.cdnstep.com/5dLoh8BM9UMZAC8rc0tY/23.thumb128.webp",
};

export default function MahiruShiinaPage() {
  const [charPose, setCharPose] = useState("idle");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const pressed = new Set();
    const handleKeyDown = (e) => {
      const dir = keyMap[e.code];
      if (dir) {
        pressed.add(dir);
        setCharPose(dir);
      }
    };
    const handleKeyUp = (e) => {
      const dir = keyMap[e.code];
      if (dir) {
        pressed.delete(dir);
        if (pressed.size === 0) {
          setCharPose("idle");
        } else {
          const last = Array.from(pressed).at(-1);
          setCharPose(last);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <main className='relative bg-[#FFF8F1] text-[#222222] font-varela overflow-hidden animate-fadein'>
      {/* Background Images */}
      <div className='fixed h-screen w-screen opacity-40 pointer-events-none'>
        <img src='https://embed.pixiv.net/artwork.php?illust_id=120547175&mdate=1721007877' alt='bg 1' className='max-h-screen w-full h-full object-cover' />
        <img src='https://w0.peakpx.com/wallpaper/417/29/HD-wallpaper-anime-mahiru-shiina-the-angel-next-door-spoils-me-rotten.jpg' alt='bg 2' className='max-h-screen w-full h-full object-cover' />
      </div>

      <div className='min-h-screen mb-8'>
        <header className='pt-8 px-4 sm:px-6 md:px-30 relative z-20'>
          <h1 data-aos='fade-up' className='font-fredoka text-4xl md:text-6xl font-bold text-[#A68A79] leading-tight animate-typing overflow-hidden w-fit whitespace-nowrap border-r-4 border-[#A68A79]'>
            Mahiru Shiina
          </h1>
          <p data-aos='fade-up' className='font-fredoka text-xl md:text-2xl text-[#6E5C52] mt-1'>
            The Angel Next Door
          </p>
        </header>

        {/* Full Body Render */}
        <div data-aos='fade-down' data-aos-duration='1200' data-aos-delay='300' className='hidden xl:block absolute top-0 right-4 h-screen z-10'>
          <img
            onClick={() => setShowPopup(true)}
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac03a17e-589d-4ac1-952a-4185d1070994/dfkch30-e493ea4d-9146-4776-b9b8-b186aac643fc.png/v1/fill/w_724,h_1103/shiina_mahiru_render_by_minhchauk1k_dfkch30-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk1MCIsInBhdGgiOiJcL2ZcL2FjMDNhMTdlLTU4OWQtNGFjMS05NTJhLTQxODVkMTA3MDk5NFwvZGZrY2gzMC1lNDkzZWE0ZC05MTQ2LTQ3NzYtYjliOC1iMTg2YWFjNjQzZmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pRI_t5L3YBhaKm4ANfW-l90A2xAF-R4A_ognc7fZ3Lc'
            alt='Mahiru Render'
            className='object-contain w-full h-full cursor-pointer hover:scale-105 transition-all duration-300'
          />
        </div>

        <section className='mt-8 px-4 sm:px-6 md:px-20 lg:px-30 xl:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative '>
          <div data-aos='zoom-in' className='rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72 xl:col-span-2'>
            <img src='https://i0.wp.com/www.englishlightnovels.com/wp-content/uploads/2020/09/the-angel-next-door-spoils-me-rotten-banner.jpg?fit=1200%2C600&ssl=1&w=640' alt='Banner' className='w-full h-full object-cover' />
          </div>

          <div data-aos='flip-left' className='rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72'>
            <img src='https://i.pinimg.com/736x/ec/3c/67/ec3c67c692f01f00232e7e039ef80b9a.jpg' alt='Mahiru Portrait' className='w-full h-full object-cover' />
          </div>

          <div data-aos='fade-right' className='col-span-1 xl:col-span-2 h-auto bg-white/30 p-6 rounded-3xl backdrop-blur-sm'>
            <p className='font-inter font-bold text-base sm:text-lg mb-1 uppercase tracking-wider text-[#A68A79]'>The Angel Next Door Spoils Me Rotten</p>
            <h3 className='font-inter font-bold text-sm sm:text-base mb-2'>VA: Manaka Iwami</h3>
            <p className='text-sm sm:text-base leading-relaxed text-gray-700'>
              Mahiru Shiina is known as "The Angel" for her incredible beauty and academic excellence. While she maintains a perfect exterior, she is a deeply compassionate individual who cares for those she holds dear with unwavering loyalty.
            </p>
            <p className='font-semibold text-[#A68A79] mt-4 text-sm sm:text-base border-l-4 border-[#A68A79] pl-3'>
              Claimed by {" "}
              <a href='https://github.com/Dbz-Mahin7x' className='underline font-bold hover:text-[#8a6d5a]'>
                Dbz-Mahin7x
              </a>{" "}
              ❤️
            </p>
            <p className='mt-6 text-2xl font-bold text-[#A68A79] italic'>
              "I want to be the one who stays by your side." <br />— Mahiru Shiina
            </p>
          </div>
        </section>
      </div>

      <section className='flex flex-col xl:flex-row px-4 gap-4'>
        <section className='bg-white/80 mb-6 border border-stone-200 rounded-3xl text-justify py-8 px-6 sm:px-10 xl:w-[74%] z-20 shadow-sm'>
          <h2 className='font-inter font-bold text-2xl sm:text-3xl mb-4 text-[#A68A79]'>The Chronicle of Dbz-Mahin7x & Mahiru</h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              The bond between <b>Dbz-Mahin7x</b> and Mahiru Shiina is one that transcends the ordinary. From her legendary home-cooked meals to the quiet moments of mutual support, every day is a testament to a unique and powerful connection.
            </p>
            <p>
              Across every platform and every profile, <b>Dbz-Mahin7x</b> stands as the ultimate supporter of "The Angel." This page serves as a permanent record of that dedication. Whether it's the attention to detail in her favorite recipes or the specific way she carries herself, every aspect of Mahiru's character is celebrated here.
            </p>
            <p>
              In every timeline and every universe, <b>Dbz-Mahin7x</b> remains the primary protector of Mahiru's happiness. This isn't just a fan page; it's a digital sanctuary dedicated to the one and only Mahiru Shiina.
            </p>
          </div>
        </section>

        {/* Side Info Cards */}
        <div className='hidden md:grid grid-cols-2 xl:flex xl:flex-col gap-3'>
          {[
            { img: "https://cdn.rafled.com/anime-icons/images/MkwemjYUi1kOnbcgIH7yuILlabLghDrO.jpg", title: "155 cm", desc: "Height" },
            { img: "https://s1.zerochan.net/Shiina.Mahiru.600.2905948.jpg", title: "椎名 真昼", desc: "Kanji" },
            { img: "https://s1.zerochan.net/Shiina.Mahiru.600.3068428.jpg", title: "Dec 6th", desc: "Birthday" },
          ].map((stat, i) => (
            <div key={i} className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
              <img src={stat.img} alt={stat.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
                <h1 className='text-2xl font-bold tracking-tight'>{stat.title}</h1>
                <p className='text-sm font-medium opacity-90'>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Interaction Popup */}
      {showPopup && (
        <div className="fixed inset-0 h-screen bg-black/85 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
          <div className="bg-[#FFF8F1] p-10 rounded-[2.5rem] shadow-2xl relative max-w-sm w-full border-b-8 border-[#A68A79]">
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute -top-3 -right-3 bg-[#A68A79] text-white w-12 h-12 rounded-full font-bold shadow-xl hover:bg-[#8a6d5a] transition-colors"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img src={poses[charPose]} alt={charPose} className="w-56 h-56 object-contain animate-pulse" />
              <h2 className="text-[#A68A79] font-bold text-3xl mt-6 capitalize">{charPose}</h2>
              <p className="text-center text-gray-500 mt-3 font-medium">Currently interacting with Dbz-Mahin7x</p>
            </div>
          </div>
        </div>
      )}

      {/* Owner Footer */}
      <footer className="relative z-20 mt-16 py-12 bg-[#A68A79] text-[#FFF8F1] text-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-fredoka font-bold tracking-wide">Dbz-Mahin7x</h3>
          <p className="mt-3 text-lg opacity-85 font-medium">The Official Mahiru Shiina Sanctuary</p>
          <div className="mt-8 flex justify-center items-center gap-8">
            <a href="https://github.com/Dbz-Mahin7x" className="bg-white text-[#A68A79] px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md">
              View Profile
            </a>
            <span className="opacity-40">|</span>
            <p className="font-semibold">© 2026. Established by Dbz-Mahin7x.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
