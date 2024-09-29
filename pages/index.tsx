import type { NextPage } from 'next';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from '../components/carousel/Carousel';
import Head from 'next/head';

// Import images for the carousel
import card1 from '../public/Haal e Dil.jpg';
import card2 from '../public/Ishq Rang.jpg';
import card3 from '../public/Maa Da Ladla.jpg';
import card4 from '../public/Meri Kahani.jpg';
import card5 from '../public/Mor Chaal.jpeg';
import card6 from '../public/Mujhe Pyaar Hua Tha.jpeg';
import card7 from '../public/Shehar E Muhabbat.jpg';
import card8 from '../public/Tere Ishq Ke Naam.jpeg';
import card9 from '../public/Zindagi Meri.jpg';
import card10 from '../public/Zulm.jpg';

const Home: NextPage = () => {
  const [message, setMessage] = useState<string>('You make the world a more beautiful place just by being in it. 🌍🌸');
  const [showVideo, setShowVideo] = useState(false);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('Haal_e_Dil');
  const [audioPlayed, setAudioPlayed] = useState(false);

  // Function to load episodes based on the number of .txt files
  const loadEpisodes = async () => {
    const response = await fetch(`/api/episodes?title=${selectedTitle}`);
    const data = await response.json();
    setEpisodes(data);
  };

  useEffect(() => {
    loadEpisodes();
    const messages = [
      "Your smile is the most beautiful curve on your body. 😊✨",
      "You radiate beauty both inside and out. 🌟💖",
      "Your natural beauty takes my breath away every single day. 🌺💫",
      "You are like a flower that blooms with grace and elegance. 🌸🌼",
      "You light up every room you enter with your stunning presence. 💎🌟",
      "Beauty is not in the face; beauty is a light in the heart, and your heart shines so bright. ❤️🌟",
      "Every moment spent with you is a moment filled with beauty. 🌹✨",
      "You are a masterpiece, crafted with care and perfection. 🎨❤️",
      "Your inner beauty radiates more brightly than any diamond. 💎✨",
      "You are beautiful just the way you are, never forget that. 🌷💖",
      "Having you in my life makes every day brighter. 🌞💖",
      "Just knowing you are around brings a smile to my face. 😊❤️",
      "You are the reason I believe in true friendship. 🤝💛",
      "Every moment spent with you is a treasure. 🌟✨",
      "Your happiness means the world to me. 🌍💖",
      "You are my confidant, my rock, and my greatest support. 🪨🤗",
      "I cherish every memory we create together, and I look forward to many more. 📸❤️",
      "You have a special place in my heart. 💖🗝️",
      "Your friendship is a gift I treasure every day. 🎁💛",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. 💪🌈",
      "You are capable of amazing things, don't ever doubt that. 🌟🔥",
      "The future belongs to those who believe in the beauty of their dreams. 🌠🌼",
      "Keep pushing forward; your hard work and determination will lead you to great heights. 🚀💫",
      "Don't watch the clock; do what it does. Keep going. ⏰➡️🏃‍♀️",
      "You have the power within you to rise above any situation or struggle. 🌟🦅",
      "The only limit to your impact is your imagination and commitment. 🌠💪",
      "Your journey is just beginning, keep moving forward. 🛤️✨",
      "Every step you take is a step closer to your dreams. 👣🌈",
      "Believe you can and you're halfway there. 💪🌟",
      "Stay positive, work hard, and make it happen. 🌟💼",
      "You are braver than you believe, stronger than you seem, and smarter than you think. 🦁💡",
      "The harder you work for something, the greater you'll feel when you achieve it. 🏅🌟",
      "Your only limit is you. 🌠💪",
      "Success is not the key to happiness. Happiness is the key to success. 🌈💖",
      "You are the architect of your own destiny. 🏛️🌟",
      "Dream big and dare to fail. 🌌✨",
      "Your passion and dedication will take you places. 🌍🔥",
      "Every day is a new opportunity to grow and become better. 🌱🌟",
      "You have the power to create the life you want. 💪🌈",
      "Life is better with you by my side. 👫🌟",
      "You bring joy and laughter into my life. 😂❤️",
      "Thank you for being you and for being amazing. 🙏💖",
      "I am grateful for every moment we share. 🌟❤️",
      "You are the sparkle in my life. ✨💛",
      "You are the sunshine that brightens my day. 🌞❤️",
      "You make the world a more beautiful place just by being in it. 🌍🌸",
      "I appreciate you more than words can express. 💖🌟",
      "You have a heart of gold. 💛✨",
      "I am so lucky to have you in my life. 🍀❤️",
      "Thank you for being a constant source of strength and inspiration. 💪🌟",
      "Your elegance and grace are unmatched. 👑🌟",
      "You have a kind heart that makes you truly beautiful. 💖🌸",
      "Your beauty is timeless and unique. ⏳🌹",
      "Your eyes sparkle like the stars in the night sky. 🌌✨",
      "Your beauty brings joy to everyone around you. 😊🌸",
      "You are a beautiful person inside and out. 💖🌟",
      "Your laughter is the most beautiful sound in the world. 😂❤️",
      "You have a radiant smile that lights up the darkest days. 😁🌟",
      "Your beauty is as endless as the ocean. 🌊🌺",
      "You are a true work of art, beautiful in every way. 🖼️❤️",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, [selectedTitle]);

  const handleImageClick = (title: string) => {
    setSelectedEpisode(0);
    setSelectedTitle(title);
    setShowVideo(true);
  };

  const handleEpisodeClick = (index: number) => {
    setSelectedEpisode(index);
  };

  const imagesItems = [
    <Image key={card1.src} src={card1} alt='Haal e Dil' className="w-full h-full" onClick={() => handleImageClick('Haal_e_Dil')} />,
    <Image key={card2.src} src={card2} alt='Ishq Rang' className="w-full h-full" onClick={() => handleImageClick('Ishq_Rang')} />,
    <Image key={card3.src} src={card3} alt='Maa Da Ladla' className="w-full h-full" onClick={() => handleImageClick('Maa_Da_Ladla')} />,
    <Image key={card4.src} src={card4} alt='Meri Kahani' className="w-full h-full" onClick={() => handleImageClick('Meri_Kahani')} />,
    <Image key={card5.src} src={card5} alt='Mor Chaal' className="w-full h-full" onClick={() => handleImageClick('Mor_Chaal')} />,
    <Image key={card6.src} src={card6} alt='Mujhe Pyaar Hua Tha' className="w-full h-full" onClick={() => handleImageClick('Mujhe_Pyaar_Hua_Tha')} />,
    <Image key={card7.src} src={card7} alt='Shehar E Muhabbat' className="w-full h-full" onClick={() => handleImageClick('Shehar_E_Muhabbat')} />,
    <Image key={card8.src} src={card8} alt='Tere Ishq Ke Naam' className="w-full h-full" onClick={() => handleImageClick('Tere_Ishq_Ke_Naam')} />,
    <Image key={card9.src} src={card9} alt='Zindagi Meri' className="w-full h-full" onClick={() => handleImageClick('Zindagi_Meri')} />,
    <Image key={card10.src} src={card10} alt='Zulm' className="w-full h-full" onClick={() => handleImageClick('Zulm_')} />,
  ];

  useEffect(() => {
    const handlePlayAudio = () => {
      if (!audioPlayed) {
        setupAudio();
      }
    };

    const setupAudio = () => {
      const audio = new Audio('/Welcome to ShiFlix.mp3');
      audio.volume = 0.9 // Adjust volume if needed
      audio.loop = false; // Ensure the audio does not loop
    
      // Start playing the audio
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    
      // Set audioPlayed to true to prevent further playback
      setAudioPlayed(true);
    };
    
  
    // Add event listener for user interaction
    window.addEventListener('click', handlePlayAudio);
  
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('click', handlePlayAudio);
    };
  }, [audioPlayed]);
  

  return (
    <div className='h-screen w-screen overflow-hidden bg-bg text-white'>
      <Head>
        <title>SayemiFlix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header  className='fixed top-0 w-full x-20' />
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 pt-40 text-center'>
        {!showVideo && (
          <div className='md-19 flex-col justify-center space-y-6'>
            <h1 className='text-4xl font-bold md:text-5xl'>{message}</h1>
            <p className='text-center text-s opacity-75'>⭐ Welcome to your magical world ⭐</p>
          </div>
        )}

        {showVideo && selectedEpisode !== null && episodes.length > 0 ? (
          <div className='video-selection flex flex-col items-center'>
            <div className='video-container rounded-lg overflow-hidden'>
              <div dangerouslySetInnerHTML={{ __html: episodes[selectedEpisode].embeddingCode }} />
            </div>

            <div className='episodes-list-container mt-4 w-full max-w-md overflow-y-auto max-h-96'>
  <div className='episodes-list grid grid-cols-2 gap-4'>
    {episodes.map((episode, index) => (
      <div
        key={index}
        className='episode-item bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded flex items-center justify-between cursor-pointer'
        onClick={() => handleEpisodeClick(index)}
      >
        <div className='flex items-center'>
          <img src='/play.png' alt='play button' className='w-6 h-6 mr-2' />
          <span className='text-white font-semibold'>Episode {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Carousel items={imagesItems} />
        )}
      </main>
      {!audioPlayed && (
        <p>Click anywhere to start the music</p>
      )}
    </div>
  );
};

export default Home;
