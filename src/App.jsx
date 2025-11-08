import React, { useEffect} from 'react';
import { User } from 'lucide-react';
import FormInput from "./FormInput";
import ContactForm from "./ContactForm";


// --- 1. Navbar Component (No changes) ---
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-[#FFF7F5]/90 backdrop-blur-sm">
        <img 
            src="/v-films-logo.png" 
            alt="V Films Logo" 
            className="absolute w-[124px] h-[48px]" // Aapka correction
          />
      <div className="container mx-auto flex justify-end items-center gap-6 md:gap-8">
        <a 
          href="#services" 
          className="text-md text-[#0F3255] hover:text-[#E87A5E] transition-colors"
        >
          Services
        </a>
        <a 
          href="#story" 
          className="text-md text-[#0F3255] hover:text-[#E87A5E] transition-colors"
        >
          Their Stories
        </a>
        <a 
          href="#story" 
          className="text-md text-[#0F3255] hover:text-[#E87A5E] transition-colors"
        >
          Our Story
        </a>
        <a 
          href="#varnan" 
          className="text-md text-[#0F3255] hover:text-[#E87A5E] transition-colors"
        >
          Varnan
        </a>
        <button 
          className="px-6 py-2 bg-[#E87A5E] text-white text-md font-medium rounded-full hover:bg-opacity-90 transition-all"
        >
          Let's Talk
        </button>
        <button 
          className="p-2 border border-[#0F3255]/50 rounded-full text-[#0F3255] hover:bg-gray-100"
        >
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}

// --- 2. Hero Section Component (No changes) ---
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Logo */}
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex justify-center items-center">
            
            {/* Background Mandala Image */}
            <img 
              src="/mandala.svg" 
              alt="Mandala Background" 
              className="absolute inset-0 w-full h-full text-[#E87A5E] opacity-70" // Aapka correction
            />
            
            {/* Foreground Logo Image */}
            <img 
              src="/v-films-logo.png" 
              alt="V Films Logo" 
              className="relative z-10 w-60" // Aapka correction
            />
          </div>
        </div>


        {/* Right Side: Content */}
        <div className="flex flex-col justify-center text-left">
          <h1 
            className="font-cursive text-6xl md:text-8xl text-[#0F3255] font-normal leading-normal mb-6"
          >
            Varnan is where stories find their voice and form
          </h1>
          <h2 
            className="font-serif text-3xl text-[#E87A5E] mb-4 centre"
          >
            Films. Brands. Art.
          </h2>
          <p 
            className="text-md text-[#0F3255] opacity-90 max-w-lg leading-relaxed"
          >
            Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
V doesn’t just tell stories - V honors them.
          </p>
        </div>

      </div>
    </section>
  );
}

// --- 3. About Team Component (UPDATED & RESPONSIVE) ---
const AboutTeam = () => {
  return (
    // Section container
    <section id="about" className="relative w-full py-20 px-4 overflow-hidden">
      {/* This is the "scalable canvas".
        - It's centered (mx-auto) and fills the width (w-full).
        - It's capped at 1920px (max-w-[1920px]), your likely design size.
        - aspect-[16/10] (1920/1200) forces its height to scale proportionally with its width.
        - All child elements will now position themselves relative to *this* scaling box.
      */}
      <div className="relative mx-auto w-full max-w-[1920px] aspect-[16/10]">
        
        {/* Yellow Note */}
        {/* BEFORE: className="absolute top-[-17px] left-[170px] w-[620px]" 
          AFTER: Uses percentages. top:(-17/1200), left:(170/1920), w:(620/1920)
        */}
        <img 
          src="yellow-note.png" 
          alt="Yellow note" 
          className="absolute top-[-1.4%] left-[8.8%] w-[32.3%] h-auto" 
        />
        
        {/* India Gate */}
        {/* BEFORE: className="absolute w-[442px] h-[442px] top-[572px] left-[40px]" 
          AFTER: top:(572/1200), left:(40/1920), w:(442/1920), h-auto to keep aspect ratio
        */}
        <img
           src='india-gate.svg'
          className="absolute w-[23%] h-auto top-[47.6%] left-[2.1%]" 
        />
        
        {/* "Branding Experts" arrow */}
        {/* BEFORE: className="absolute top-[500px] left-[692px] w-[197px] h-[226px]" 
          AFTER: top:(500/1200), left:(692/1920), w:(197/1920)
        */}
        <img 
          src="arrow-branding-experts.svg" 
          alt="Branding Experts arrow" 
          className="absolute top-[41.6%] left-[36%] w-[10.3%] h-auto" 
        />
        {/* BEFORE: text-[42px] top-[750px] left-[545px] h-[48px] w-[228px]
          AFTER: text-[clamp(18px,2.2vw,42px)] top:(750/1200), left:(545/1920)
        */}
        <span 
          className="font-cursive font-[400] text-[clamp(18px,2.2vw,42px)] absolute top-[62.5%] left-[28.4%] text-[#103255] whitespace-nowrap"
        >
          Branding Experts
        </span>
        
        {/* Team Silhouette */}
        {/* BEFORE: className="absolute top-[340px] left-[958px] w-[647px] h-[397px]" 
          AFTER: top:(340/1200), left:(958/1920), w:(647/1920)
        */}
        <img 
          src='team-silhouette.svg'
          alt="Team silhouette"
          className="absolute top-[28.3%] left-[49.9%] w-[33.7%] h-auto" 
        />
        
        {/* "Film Makers" callout */}
        {/* BEFORE: className="absolute top-[229px] left-[1107px] w-[151.5px] h-[95px]"
          AFTER: top:(229/1200), left:(1107/1920), w:(151.5/1920)
        */}
        <img 
          src='arrow-film-makers.svg'
          alt="Film Makers arrow" 
          className="absolute top-[19.1%] left-[57.6%] w-[7.9%] h-auto"
        />
        {/* BEFORE: text-[42px] absolute top-[168px] left-[1008px] h-[48px] w-[179px]
          AFTER: text-[clamp(18px,2.2vw,42px)] top:(168/1200), left:(1008/1920)
        */}
        <span className="font-cursive font-[400] text-[clamp(18px,2.2vw,42px)] absolute top-[14%] left-[52.5%] text-[#0F3255] whitespace-nowrap">
          Film Makers
        </span>

        {/* "Art Curators" callout */}
        {/* BEFORE: className="absolute top-[343px] left-[1648px] w-[102px] h-[146px]"
          AFTER: top:(343/1200), left:(1648/1920), w:(102/1920)
        */}
        <img 
          src='arrow-art-curators.svg'
          alt="Art Curators arrow" 
          className="absolute top-[28.5%] left-[85.8%] w-[5.3%] h-auto"
        />
        {/* BEFORE: text-[42px] absolute top-[273px] left-[1683px] h-[48px] w-[167px]
          AFTER: text-[clamp(18px,2.2vw,42px)] top:(273/1200), left:(1683/1920)
        */}
        <span className="font-cursive font-[400] text-[clamp(18px,2.2vw,42px)] absolute top-[22.8%] left-[87.6%] text-[#103255] whitespace-nowrap">
          Art Curators
        </span>

        {/* Bottom Text and Button */}
        {/* BEFORE: className="absolute top-[838px] left-[890px] text-center w-[780px]"
          AFTER: top:(838/1200), left:(890/1920), w:(780/1920)
        */}
        <div className="absolute top-[69.8%] left-[46.3%] text-center w-[40.6%]">
          {/* BEFORE: text-4xl (36px)
            AFTER: text-[clamp(16px,1.9vw,36px)]
          */}
          <h3 className="font-halant text-[clamp(16px,1.9vw,36px)] text-[#0F3255] mb-[2%]">
            Take a closer look at the stories V bring to life.
          </h3>
          {/* BEFORE: text-lg (18px), px-8 (32px), py-3 (12px)
            AFTER: Scaled text and padding
          */}
          <button 
            className="px-[1.6vw] py-[1vh] bg-[#E87A5E] text-white text-[clamp(12px,1vw,18px)] font-medium rounded-full hover:bg-opacity-90 transition-all"
          >
            View Portfolio
          </button>
        </div>
        
      </div>
    </section>
  );
}

// --- 5. NEW Contact Section Component ---
const ContactSection = () => {
  <div>
    <ContactForm/>
    </div>



  // ✅ everything below untouched
  return (
    <section id="contact" className="relative min-h-screen py-24 px-4 overflow-hidden">
      <img 
        src="/rangoli-header.png"
        alt="Rangoli decorative header"
        className="absolute top-0 right-0 z-0 opacity-70 w-[350px] md:w-[350px]" 
      />
      <img 
        src="/rangoli-footer.png"
        className="absolute bottom-0 left-0 z-0 opacity-70 w-[350px] md:w-[300px]" 
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col justify-center text-left text-[#0F3255] max-w-lg pl-12">
          <p className="font-serif text-2xl leading-relaxed">
            Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.
          </p>
          <p className="font-serif text-2xl leading-relaxed">
            Let's catch up over coffee.
          </p>
          <p className="font-serif text-2xl leading-relaxed">
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* ✅ now simply call the form */}
        <div>
          <h2 className="font-halant text-5xl md:text-6xl text-[#0F3255] mb-4">
            Join the Story
          </h2>
          <p className="text-lg text-[#0F3255]/90 mb-10">
            Ready to bring your vision to life? Let's talk.
          </p>

          <ContactForm />

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center justify-start text-sm text-[#0F3255] mt-12">
            <span>vermla@varnanfilms.co.in</span>
            <span>+91 98716 84567</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 6. Main App Component (unchanged) ---
export default function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Halant:wght@400;500;600&family=Island+Moments&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
      .font-serif { font-family: 'Lora', serif; }
      .font-cursive { font-family: 'Island Moments', cursive; }
      .font-halant { font-family: 'Halant', serif; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF7F5] text-[#0F3255] font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutTeam />
        <ContactSection /> 
      </main>
    </div>
  );
}