import GeminiPlanner from "./components/GeminiPlanner";
import Galaxy from "./components/Galaxy";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 font-sans selection:bg-yellow-500 selection:text-black">
      {/* MAIN CONTENT AREA */}
      <main className="relative w-full flex flex-col items-center">
        
        {/* HERO SECTION */}
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-yellow-900/30 pt-20">
            {/* Galaxy Background with mouse effect */}
            <div className="absolute inset-0 z-0">
              <Galaxy 
                mouseRepulsion={true}
                mouseInteraction={true}
                density={1.2}
                glowIntensity={0.5}
                saturation={0.6}
                hueShift={140}
                twinkleIntensity={0.4}
                rotationSpeed={0.08}
                repulsionStrength={3}
                starSpeed={0.7}
                speed={1.2}
                transparent={true}
              />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-neutral-900 to-black z-1"></div>
            
            {/* Animated Spotlight Effect */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/10 to-transparent rotate-12 transform origin-top blur-sm z-2"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/10 to-transparent -rotate-12 transform origin-top blur-sm z-2"></div>

            {/* Main Content */}
            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
              {/* Top Badge */}
              <div className="mb-8 inline-flex items-center justify-center mx-auto">
                <span className="text-yellow-400 text-sm md:text-base font-oswald tracking-widest uppercase px-4 py-2 border border-yellow-500/50 rounded-full backdrop-blur-sm">
                  🎬 Premium Cinema Experience
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-oswald font-bold uppercase tracking-widest drop-shadow-2xl mb-6 animate-in fade-in zoom-in duration-1000">
                Award Night
              </h1>

              {/* Subheading */}
              <h2 className="text-yellow-500/90 text-2xl md:text-4xl font-oswald tracking-[0.2em] uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                Over 500+ Unforgettable Moments
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-playfair italic mb-8 drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Experience the glamour, the lights, and the unforgettable moments of cinema's finest celebration. Join us for an evening of elegance, artistry, and pure entertainment.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <div className="text-center">
                  <p className="text-yellow-400 text-2xl md:text-4xl font-bold">500+</p>
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mt-2">Events Hosted</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-400 text-2xl md:text-4xl font-bold">50K+</p>
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mt-2">Attendees</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-400 text-2xl md:text-4xl font-bold">20+</p>
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mt-2">Years Legacy</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                <button className="px-8 py-3 md:px-10 md:py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50">
                  Book Tickets
                </button>
                <button className="px-8 py-3 md:px-10 md:py-4 border-2 border-yellow-500 text-yellow-400 hover:text-yellow-300 hover:border-yellow-300 font-bold uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
        </div>

        {/* GEMINI AI PLANNER SECTION */}
        <GeminiPlanner />

      </main>
    </div>
  );
}
