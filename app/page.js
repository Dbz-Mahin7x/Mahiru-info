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
        <img
          src='https://embed.pixiv.net/artwork.php?illust_id=120547175&mdate=1721007877'
          alt='background Mahiru'
          className='max-h-screen w-full h-full object-cover'
        />
        <img
          src='https://w0.peakpx.com/wallpaper/417/29/HD-wallpaper-anime-mahiru-shiina-the-angel-next-door-spoils-me-rotten.jpg'
          alt='background Mahiru'
          className='max-h-screen w-full h-full object-cover'
        />
        <img
          src='https://c.wallhere.com/photos/36/67/anime_anime_girls_Shiina_Mahiru_Otonari_no_Tenshi_sama_schoolgirl_school_uniform_vertical_bow_tie-2217668.jpg!d'
          alt='background Mahiru'
          className='min-h-screen w-full h-full object-cover'
        />
      </div>

      <div className='min-h-screen mb-8'>
        <header className='pt-8 px-4 sm:px-6 md:px-30 relative z-20'>
          <h1
            data-aos='fade-up'
            className='font-fredoka text-4xl md:text-6xl font-bold text-[#A68A79] leading-tight animate-typing overflow-hidden w-fit whitespace-nowrap border-r-4 border-[#A68A79]'>
            Mahiru Shiina
          </h1>
          <p data-aos='fade-up' className='font-fredoka text-xl md:text-2xl text-[#6E5C52] mt-1'>
            Angel Next Door Spoils Me Rotten
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
            <img
              src='https://i0.wp.com/www.englishlightnovels.com/wp-content/uploads/2020/09/the-angel-next-door-spoils-me-rotten-banner.jpg?fit=1200%2C600&ssl=1&w=640'
              alt='Mahiru 1'
              className='w-full h-full object-cover'
            />
          </div>

          <div className='rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72'>
            <img
              data-aos='flip-left'
              src='https://i.pinimg.com/736x/ec/3c/67/ec3c67c692f01f00232e7e039ef80b9a.jpg'
              alt='Mahiru 2'
              className='w-full h-full object-cover'
            />
          </div>

          <div data-aos='fade-right' className='col-span-1 xl:col-span-2 h-auto'>
            <p className='font-inter font-bold text-base sm:text-lg mb-1'>お隣の天使様にいつの間にか駄目人間にされていた件</p>
            <h3 className='font-inter font-bold text-sm sm:text-base mb-2'>Voice Actress: Manaka Iwami</h3>
            <p className='text-sm sm:text-base leading-snug'>
              Mahiru Shiina is portrayed in the light novel as a graceful and beautiful girl known as "The Angel" at school for her perfect looks and composed
              demeanor. Despite her flawless public image, she is gentle, caring, and secretly lonely, longing to be seen not as an ideal, but simply as herself.
            </p>
            <p className='text-sm sm:text-base leading-snug mt-2'>
              Mahiru Shiina has fair skin that seems to glow softly in the light, like fine porcelain reflecting serenity. Her hair is long, straight, and light
              brown with elegant golden shades—as if reflecting the afternoon sun. Her caramel brown eyes are warm yet sharp, holding both tenderness and
              firmness. Her posture is slender and graceful, making her every movement look like a small, enchanting dance.
            </p>
            <p className='font-semibold text-[#A68A79] mt-2 text-sm sm:text-base'>
              And she is{" "}
              <a href='https://github.com/Dbz-Mahin7x' className='underline'>
                Dbz-Mahin7x's
              </a>{" "}
              Wife ❤️
            </p>
            <p className='mt-6 text-2xl font-bold text-[#A68A79]'>
              "What kind of woman who always change boyfriends?" <br />- Mahiru Shiina
            </p>
          </div>
          <div data-aos='flip-up' className='hidden md:block rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72'>
            <img src='https://i.pinimg.com/736x/41/4f/34/414f3448c918054fac2625478092e825.jpg' alt='Mahiru 3' className='w-full h-full object-cover' />
          </div>
        </section>
      </div>

      <section className='flex px-3 gap-3 flex-col xl:flex-row'>
        <section className='bg-neutral-200/60 mb-6 border rounded-xl text-justify py-6 backdrop-blur px-4 sm:px-6 md:px-20 lg:px-30 xl:w-[74%] z-20'>
          <h2 className='font-inter font-bold text-xl sm:text-2xl md:text-3xl mb-3'>My Story with Mahiru</h2>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              Mahiru is my wife, period. The story of me and Mahiru Shiina is a tale of endless love. We are an inseparable couple, loving each other in such a deep and caring way. I always feel that my life has been so meaningful ever since Mahiru came into my life. Every day with her is a day filled with happiness, and I would do anything to make her happy. Mahiru, my beloved wife, is the one who always fills my days with warmth and love.
            </p>
            <p>
              Every time she cooks, I always say, "This is the most delicious food in the world." I know very well how much she pays attention to detail in everything, even in the meals she prepares. Not only that, Mahiru often surprises me with new recipes, and I'm always the first tester. I love every moment we spend together. Our lives are filled with extraordinary little habits. When Mahiru studies, I'm always by her side, being a timer that reminds her to take breaks.
            </p>
            <p>
              I know what she likes and dislikes, from her favorite menu to the way she ties her hair. I memorize all her habits, even the way she chooses her perfume. Every time she feels tired or stressed, I'm always there to listen and give a comforting hug. Mahiru also always pays attention to me, in small ways that make me feel so special. She often gives me spontaneous hugs, and I know that she always wants to make sure I feel appreciated.
            </p>
            <p>
              Our relationship is filled with sincere love. We support each other in every step of life. When Mahiru feels worried or sad, I'm always there to give her support and affection. I know how important she is in my life, and I always want to be the best husband for her, in this world and in parallel universes. We often talk about the future, including our children. We've already prepared a name for our child, "Mahiru Jr."
            </p>
            <p>
              I always imagine a future filled with happiness with Mahiru, and I'm sure we will continue to love each other, no matter what happens. Mahiru is everything to me, and I'm grateful every day that she is part of my life. Every second with her is an invaluable gift. I know, nothing is more important in my life than Mahiru.
            </p>
            <p className="font-semibold text-[#A68A79] text-center text-lg mt-4">
              Mahiru is my wife, period. <br />
              Mahiru is my forever love. <br />
              It's written in our marriage certificate: I am Mahiru's husband.
            </p>
          </div>
        </section>

        {/* Side Info Cards */}
        <div className='hidden md:grid grid-cols-2 xl:flex xl:flex-col gap-3'>
          <div className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
            <img src='https://cdn.rafled.com/anime-icons/images/MkwemjYUi1kOnbcgIH7yuILlabLghDrO.jpg' alt='Mahiru' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
              <h1 className='text-2xl font-bold tracking-tight'>155 cm</h1>
              <p className='text-sm font-medium opacity-90'>Her height is cute</p>
            </div>
          </div>
          
          <div className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
            <img src='https://s1.zerochan.net/Shiina.Mahiru.600.2905948.jpg' alt='Mahiru' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
              <h1 className='text-2xl font-bold tracking-tight'>椎名 真昼</h1>
              <p className='text-sm font-medium opacity-90'>Japanese Name</p>
            </div>
          </div>
          
          <div className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
            <img src='https://s1.zerochan.net/Shiina.Mahiru.600.3068428.jpg' alt='Mahiru' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
              <h1 className='text-2xl font-bold tracking-tight'>December 6th</h1>
              <p className='text-sm font-medium opacity-90'>Birthday</p>
            </div>
          </div>
          
          <div className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
            <img src='https://s1.zerochan.net/Shiina.Mahiru.600.3068429.jpg' alt='Mahiru' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
              <h1 className='text-2xl font-bold tracking-tight'>Age 16</h1>
              <p className='text-sm font-medium opacity-90'>17 in Light Novel</p>
            </div>
          </div>
          
          <div className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
            <img src='https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/02/angel-next-door-spoils-me-rotten-mahiru-shiina-valentines-visual-e1676143192341.jpg?fit=1460%2C825&ssl=1' alt='Mahiru' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
              <h1 className='text-2xl font-bold tracking-tight'>Blonde/Flaxen</h1>
              <p className='text-sm font-medium opacity-90'>Hair Color</p>
            </div>
          </div>
          
          <div className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
            <img src='https://pbs.twimg.com/media/Fl-B7b5aUAAPLJF?format=jpg&name=4096x4096' alt='Mahiru' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
              <h1 className='text-2xl font-bold tracking-tight'>Caramel</h1>
              <p className='text-sm font-medium opacity-90'>Eye Color</p>
            </div>
          </div>
          
          <div className='relative w-full xl:w-80 h-52 rounded-2xl overflow-hidden shadow-md group'>
            <img src='https://ae03.alicdn.com/kf/S013a060220df43a881f171e6b10508bem.jpg_640x640q90.jpg' alt='Mahiru' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end pb-6 text-white'>
              <h1 className='text-2xl font-bold tracking-tight'>Student</h1>
              <p className='text-sm font-medium opacity-90'>Always learning</p>
            </div>
          </div>
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
              <h2 className="text-[#A68A79] font-bold text-3xl mt-6 capitalize">{charPose} Pose</h2>
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