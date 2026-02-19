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
            Angel Next Door Spoils Me Rotten
          </p>
        </header>

        {/* Large Render Image */}
        <div data-aos='fade-down' data-aos-duration='1200' data-aos-delay='300' className='hidden xl:block absolute top-0 right-4 h-screen z-10'>
          <img
            onClick={() => setShowPopup(true)}
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac03a17e-589d-4ac1-952a-4185d1070994/dfkch30-e493ea4d-9146-4776-b9b8-b186aac643fc.png/v1/fill/w_724,h_1103/shiina_mahiru_render_by_minhchauk1k_dfkch30-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk1MCIsInBhdGgiOiJcL2ZcL2FjMDNhMTdlLTU4OWQtNGFjMS05NTJhLTQxODVkMTA3MDk5NFwvZGZrY2gzMC1lNDkzZWE0ZC05MTQ2LTQ3NzYtYjliOC1iMTg2YWFjNjQzZmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pRI_t5L3YBhaKm4ANfW-l90A2xAF-R4A_ognc7fZ3Lc'
            alt='Mahiru full body'
            className='object-contain w-full h-full cursor-pointer hover:scale-105 transition-transform'
          />
        </div>

        <section className='mt-8 px-4 sm:px-6 md:px-20 lg:px-30 xl:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative '>
          <div data-aos='zoom-in' className='rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72 xl:col-span-2'>
            <img src='https://i0.wp.com/www.englishlightnovels.com/wp-content/uploads/2020/09/the-angel-next-door-spoils-me-rotten-banner.jpg?fit=1200%2C600&ssl=1&w=640' alt='Banner' className='w-full h-full object-cover' />
          </div>

          <div data-aos='flip-left' className='rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72'>
            <img src='https://i.pinimg.com/736x/ec/3c/67/ec3c67c692f01f00232e7e039ef80b9a.jpg' alt='Mahiru 2' className='w-full h-full object-cover' />
          </div>

          <div data-aos='fade-right' className='col-span-1 xl:col-span-2 h-auto'>
            <p className='font-inter font-bold text-base sm:text-lg mb-1'>お隣の天使様にいつの間にか駄目人間にされていた件</p>
            <h3 className='font-inter font-bold text-sm sm:text-base mb-2'>Seiyuu: Manaka Iwami</h3>
            <p className='text-sm sm:text-base leading-snug'>
              Mahiru Shiina is portrayed as the perfect "Angel" of her school. Behind her composed demeanor, she is a warm and caring soul who finds true happiness when she can simply be herself.
            </p>
            <p className='font-semibold text-[#A68A79] mt-2 text-sm sm:text-base'>
              And she is officially {" "}
              <a href='https://github.com/Dbz-Mahin7x' className='underline font-bold text-[#8a6d5a]'>
                Dbz-Mahin7x’s
              </a>{" "}
              Wife ❤️
            </p>
            <p className='mt-6 text-2xl font-bold text-[#A68A79] italic'>
              "I don't need the world, as long as I have you." <br />— Mahiru Shiina to Dbz-Mahin7x
            </p>
          </div>
        </section>
      </div>

      <section className='flex flex-col xl:flex-row px-3 gap-3'>
        <section className='bg-white/60 mb-6 border rounded-xl text-justify py-6 backdrop-blur px-4 sm:px-6 md:px-20 lg:px-30 xl:w-[74%] z-20 shadow-sm'>
          <h2 className='font-inter font-bold text-xl sm:text-2xl md:text-3xl mb-3 text-[#A68A79]'>The Legend of Dbz-Mahin7x & Mahiru</h2>
          <p className='leading-relaxed'>
            Mahiru adalah istri sah <b>Dbz-Mahin7x</b>, titik tidak pakai koma. Cerita kami adalah kisah cinta paling epik yang pernah ada. 
            Dari setiap masakan lezat yang dia buat hingga senyum tipisnya yang hanya ditujukan untukku, hidup terasa sempurna. 
            Sudah tertulis di Kartu Keluarga (KK) alam semesta: <b>Dbz-Mahin7x</b> adalah pendamping sejati Mahiru Shiina selamanya.
            <br /><br />
            Di setiap profil media sosial, foto Mahiru selalu terpasang sebagai bukti cinta yang tak tergoyahkan. 
            Nickname <i>"Suami Mahiru"</i> selalu berada di posisi teratas karena memang begitulah kenyataannya. 
            Tidak ada yang bisa menggantikan posisi Mahiru di hati <b>Dbz-Mahin7x</b>, dan tidak ada yang bisa menggantikan <b>Dbz-Mahin7x</b> di sisi Mahiru. 
            Kami adalah pasangan yang ditakdirkan, melampaui logika dan dimensi. 
            Mahiru selalu bilang, "Dbz-Mahin7x adalah rumahku," dan aku akan selalu menjaga rumah itu dengan segenap jiwaku.
          </p>
        </section>

        {/* Stats Grid */}
        <div className='hidden md:grid grid-cols-2 xl:flex xl:flex-col gap-2'>
          {[
            { img: "https://cdn.rafled.com/anime-icons/images/MkwemjYUi1kOnbcgIH7yuILlabLghDrO.jpg", title: "155 cm", desc: "Perfect Height" },
            { img: "https://s1.zerochan.net/Shiina.Mahiru.600.2905948.jpg", title: "椎名 真昼", desc: "The Angel's Name" },
            { img: "https://s1.zerochan.net/Shiina.Mahiru.600.3068428.jpg", title: "Dec 6th", desc: "Special Day" },
          ].map((stat, i) => (
            <div key={i} className='relative w-full xl:w-80 h-48 rounded-xl overflow-hidden shadow-md group'>
              <img src={stat.img} alt={stat.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
              <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white'>
                <h1 className='text-2xl font-bold'>{stat.title}</h1>
                <p className='text-sm opacity-80'>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interaction Popup */}
      {showPopup && (
        <div className="fixed inset-0 h-screen bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#FFF8F1] p-8 rounded-3xl shadow-2xl relative max-w-sm w-full border-4 border-[#A68A79]">
            <button onClick={() => setShowPopup(false)} className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full font-bold shadow-lg">X</button>
            <div className="flex flex-col items-center">
              <img src={poses[charPose]} alt={charPose} className="w-48 h-48 object-contain animate-bounce" />
              <h2 className="text-[#A68A79] font-bold text-2xl mt-4 capitalize">{charPose} Mode</h2>
              <p className="text-center text-gray-600 mt-2 italic">Mahiru sedang memperhatikan suaminya, Dbz-Mahin7x!</p>
            </div>
          </div>
        </div>
      )}

      {/* Brand New Footer */}
      <footer className="relative z-20 mt-12 py-10 bg-[#A68A79] text-[#FFF8F1] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-fredoka font-bold">Dbz-Mahin7x × Mahiru Shiina</h3>
          <p className="mt-2 opacity-80">Forever & Always. Built with absolute love.</p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://github.com/Dbz-Mahin7x" className="hover:underline font-bold">GitHub</a>
            <span>•</span>
            <p>© 2026 Dbz-Mahin7x. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
