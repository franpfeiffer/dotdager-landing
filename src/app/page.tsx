// te quiero mucho guille rauch gracias por dejarme hostear imgs gratis
'use client';

import Image from 'next/image';
import { GiPickle } from 'react-icons/gi';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { SiInstagram, SiTiktok, SiDiscord, SiSpotify, SiTwitch } from 'react-icons/si';
import { FaGuitar, FaCat, FaCode, FaBook, FaMusic, FaYoutube, FaGithub } from 'react-icons/fa';

const content = {
    en: {
        name: 'Dot Rager',
        tagline: 'Programmer, sausage taster, professional lumberjack player and cute trans',
        about: 'About Me',
        boutmyself: 'A little bit about myself',
        aboutText: "Hi, I'm Mariano Villa. I'm passionate about content creation, programming, and exploring the intersection of technology and philosophy. In my free time, I look for desperate single ladies in my area, and I enjoy a juicy, delicious, beautiful, giant, veiny...what was I talking about? Doesn't matter. I'm a self-proclaimed fan of falopa, ugly trans women, and VB.",
        interests: 'Passions',
        goto: 'Go to',
        projectDescriptions: [
            {
                title: 'Dot Dager',
                description: 'A YouTube channel where I make dick jokes and other things related to programming.',
                link: 'https://youtube.com/@DotDager',
            },
            {
                title: 'El Antro de Dager',
                description: "A YouTube channel where I talk about philosophy relating it to movies and games (there're also dick jokes).",
                link: 'https://youtube.com/@ElAntroDeDager',
            },
            {
                title: 'Dager Music',
                description: 'A YouTube channel where I make covers and music in general (less dick jokes but there are still some).',
                link: 'https://youtube.com/@DagerMusic',
            },
        ],
        projects: 'Featured Projects',
        socials: 'Connect',
        sendMessage: 'Send Message',
        mailMessage: 'Super serious email, please don\'t spam',
        lumber: 'THE BEST GAME EVER',
        lumberjack: "Hi I'm the dev, I scored a 234(don't laugh) if you beat it I'll give you a kiss, not gonna tell you where 😙",
    },
    es: {
        name: 'Dot Rager',
        tagline: 'Programador, catador de salchicas, jugador profesional de lumberjack y trava lindo',
        about: 'Sobre Mí',
        boutmyself: 'Un poquito mas mi',
        aboutText: 'Holi, soy Mariano Villa. Me apasiona crear contenido, programar y explorar la intersección entre tecnología y filosofía. En mis tiempos libres, busco solteras desesperadas en mi area, degusto de jugosos, deliciosos, hermosos, gigantes, venosos... de que hablaba? No importa. Fanatico declarado de la falopa, los travas feos y de VB.',
        interests: 'Pasiones',
        projects: 'Proyectos Destacados',
        goto: 'Pasate',
        projectDescriptions: [
            {
                title: 'Dot Dager',
                description: 'Canal de YouTube donde hago chistes de pitos y otras cosas relacionadas con la programación.',
                link: 'https://youtube.com/@DotDager',
            },
            {
                title: 'El Antro de Dager',
                description: "Un canal de YouTube donde hablo de filosofia relacionandola con peliculas y jueguito (tambien hay chistes te pitos).",
                link: 'https://youtube.com/@ElAntroDeDager',
            },
            {
                title: 'Dager Music',
                description: 'Un canal de YouTube donde hago musiquita (menos chistes de pitos pero alguno que otro hay).',
                link: 'https://youtube.com/@DagerMusic',
            },
        ],
        socials: 'Conectar',
        sendMessage: 'Enviar Mensaje',
        mailMessage: 'Email super serio, por favor no spam',
        lumber: 'EL MEJOR JUEGO DEL MUNDO WACHO',
        lumberjack: "Holi soy el dev, hice 234(no te burles) si me pasas te doy una beso, pero no te digo donde 😙",
    },
};

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, ...props }, forwardedRef) => {
  return (
    <span
      ref={forwardedRef}
      className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
      {...props}
    >
      {children}
    </span>
  )
})


const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="text-3xl font-semibold mb-6 text-center text-purple-200">{children}</h2>
);

const ProjectCard = ({ title, description, link, goto }: { title: string; description: string; link: string; goto: string }) => (
  <div className="bg-purple-700 rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-purple-200 mb-4">{description}</p> 
    <a href={link} target="_blank" className="text-purple-300 hover:text-white transition-colors">
        {goto} →
    </a>
  </div>
);

const SocialLink = ({ Icon, href }: { Icon: React.ElementType; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-110 transition-transform"
  >
    <Icon className="text-3xl text-purple-300 hover:text-white" />
  </a>
);

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
}

const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <VisuallyHidden>
          <DialogTitle>Video Player</DialogTitle>
        </VisuallyHidden>
        {videoSrc ? (
          <video
            src={videoSrc}
            controls
            className="w-full h-auto"
            autoPlay
          />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-500">
            No video selected
          </div>
        )}
      </DialogContent>
    </Dialog>
);


export default function Home() {
    const [language, setLanguage] = useState<'en' | 'es'>('en');
    const [mounted, setMounted] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentBanner, setCurrentBanner] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    const interests = [
        { icon: FaCode, name: 'Code' },
        { icon: FaGuitar, name: 'Guitar' },
        { icon: FaCat, name: 'Bri Marcos' },
        { icon: GiPickle, name: 'Juicy Pickles' },
        { icon: FaBook, name: 'Philosophy' },
        { icon: FaMusic, name: 'Music' },
    ];

    const profileImages = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6eokCp0N3WsVC0qaEqvY09gkbZRg1S.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mbgnriOz2OMtoawYsqXvf6LFqvS0LU.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rb0B56RwWADljzmudjo7E8DUnBmPnz.png"
    ];
    const banners = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VIQA46HXR8ew0x7t2AYF66CzbazJzI.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-banner.jpg-vceDBum0HOjJ5GJZpIILhiai6HYs9F.jpeg"
    ];
    const images = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-06-01%2017-55-42_1732155487729-2heHjiJNVv7dhbiIQZXRn1PKrtWyNt.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sequence%2001_1732155524020.jpg-YCHey2M16px0OgUSlKm4piUmM2tURe.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DangharTemplate_1732155469765-CSDWnJzCAiYiuGP2UOfYBznXOS1o3G.png"
    ];

    const videos = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dager-video-1-xX19hBEKTjUWsJ6VhrA4MClsw5pI1x.mp4",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dager-video-2-lBaccSQ3KqP03xwZgZrR6B0Uzdlmu6.mp4",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dager-video-3-BbEHdwyBvdt7I51xz2Fhwra3inEIn9.mp4"
    ];


    useEffect(() => {
        setMounted(true)
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
        }, 3000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length)
        }, 5000) 
        return () => clearInterval(interval)
    });
 
    const handleImageClick = (index: number) => {
        setSelectedVideo(videos[index])
    };

    const handleCloseModal = () => {
        setSelectedVideo(null)
    }

    return (
    <div className="min-h-screen bg-[#4a3b63] text-white">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={banners[currentBanner]}
          alt="Dot Dager Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 -mt-32 pb-12">
        <div className="relative z-10 bg-[#2d2442] rounded-lg shadow-2xl p-8">
          {mounted && (
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="absolute top-4 right-4 text-3xl font-medium text-purple-200 hover:text-white transition-colors"
            >
              {language === 'en' ? '🧉' : '🏳️‍🌈'}
            </button>
          )}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg bg-[#2d2442]">
                <Image
                  src={profileImages[currentImageIndex]}
                  alt="Dot Dager"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
                {content[language].name}
              </h1>
              <p className="text-lg text-purple-200 mb-6">{content[language].tagline}</p>
            </div>
          </div>
          <div className="mb-12">
            <SectionTitle>{content[language].about}</SectionTitle>
            <p className="text-wrap text-xl text-purple-100">{content[language].aboutText}</p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-purple-200">
              {content[language].interests}
            </h2>
            <div className="mb-12 grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
                {interests.map((interest, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 relative"
                        onMouseEnter={() => setHoveredItem(interest.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        >
                    <interest.icon className="text-5xl text-purple-300" />
                    <span
                        className={`text-sm text-center text-purple-200 absolute -bottom-11 transition-opacity duration-300 ${
                        hoveredItem === interest.name ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                    {interest.name}
                    </span>
                </div>
              ))}
          </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-purple-200">
              {content[language].boutmyself}
            </h2>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                <div 
                    key={index} 
                    className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => handleImageClick(index)}
                    >
                <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                />
            </div>
            ))}
        </div>
            <VideoModal 
                isOpen={!!selectedVideo} 
                onClose={handleCloseModal} 
                videoSrc={selectedVideo || ""}
            />
        </div>
        </div>
          <div className="mb-12">
            <SectionTitle>{content[language].projects}</SectionTitle>
            <div className="grid md:grid-cols-3 gap-6">
                {content[language].projectDescriptions.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                        goto={content[language].goto} 
                    />
                ))}
            </div>
          </div>
          <div className="mb-12 w-full max-w-xl h-full max-h-xs mx-auto my-8 bg-[#2d2442] rounded-lg shadow-xl overflow-hidden">
            <SectionTitle>{content[language].lumber}</SectionTitle>
                <div className="aspect-[9/16] w-full">
                <iframe
                    src="https://tbot.xyz/lumber/"
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    title="lumberjack"
                />
        <p className="text-center text-xs text-purple-200 mt-2">
            {content[language].lumberjack}
        </p>
        </div>
          </div>
          <div className="mb-12">
            <SectionTitle>{content[language].socials}</SectionTitle>
            <div className="flex flex-wrap justify-center gap-6">
              <SocialLink Icon={SiInstagram} href="https://instagram.com/dager.32" />
              <SocialLink Icon={SiTiktok} href="https://tiktok.com/@elantrodedager" />
              <SocialLink Icon={FaYoutube} href="https://youtube.com/@DotDager" />
              <SocialLink Icon={SiDiscord} href="https://discord.gg/4NFk6TamAB" />
              <SocialLink Icon={FaGithub} href="https://github.com/MarianoVilla" />
              <SocialLink Icon={SiSpotify} href="https://open.spotify.com/artist/6bkClBMJd4qKxJp0J5vHsz" />
              <SocialLink Icon={SiTwitch} href="https://twitch.tv/dagerxiv" />
            </div>
            <p className="text-center text-purple-200 text-sm mt-4">Email: wacho_paja_96@hotmail.com ({content[language].mailMessage})</p>
          </div>
        </div>
      </div>
    </div>
  );
}

