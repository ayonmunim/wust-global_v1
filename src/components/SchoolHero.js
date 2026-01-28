import React from 'react';
import { GraduationCap, BookOpen, UserCheck, ArrowRight } from "lucide-react";

const WustHeroSection = () => {
  const theme = {
    wguNavy: "#001B33",      
    wguActionBlue: "#005EB8", 
    fontFamily: '"Trebuchet MS", "Lucida Sans", Arial, sans-serif'
  };

  const programs = [
    {
      title: "Graduate Program",
      details: ["Applied Learning Expert", "Master 54 Credits", "Competency Based Apps"]
    },
    {
      title: "Undergrad Program",
      details: ["Academic Standards High", "Achieve 3.0 CGPA", "Global Success Path"]
    },
    {
      title: "Certificate Program",
      details: ["Guided Success Plan", "Personalized Mentorship", "Entire Academic Journey"]
    }
  ];

  return (
    <div className="relative w-full overflow-hidden flex flex-col" style={{ fontFamily: theme.fontFamily }}>
      {/* COMPACT HERO AREA */}
      <div className="relative z-10 w-full min-h-[60vh] flex items-center px-6 md:px-12 lg:px-24 pt-16 pb-32">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
            alt="Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B33]/95 via-[#001B33]/85 to-[#001B33]"></div>
        </div>

        {/* Text content - Smaller Sizes */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            WUST School <br /> of Business
          </h1>
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: theme.wguActionBlue }}></div>
          <p className="text-lg md:text-xl mb-8 text-blue-50 opacity-90 max-w-md">
            Advance your career with an industry-led online business degree.
          </p>
          <button className="px-8 py-3 border-2 border-white text-sm font-bold rounded-none transition-all duration-300 hover:bg-white hover:text-black">
            Get Started
          </button>
        </div>
      </div>

      {/* COMPACT THREE CARDS */}
      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 -mt-20 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 shadow-xl border-b-4 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              style={{ borderRadius: '0px', borderBottomColor: theme.wguActionBlue }}
            >
              <div>
                <h3 className="text-blue-950 font-bold uppercase tracking-widest text-sm mb-2">
                  {prog.title}
                </h3>
                <div className="w-12 h-0.5 mb-6" style={{ backgroundColor: theme.wguActionBlue }}></div>
                
                <div className="space-y-4">
                  {prog.details.map((line, lIdx) => (
                    <div key={lIdx} className="flex items-center gap-3">
                      <div className="shrink-0">
                        {lIdx === 0 && <GraduationCap size={18} className="text-blue-800" />}
                        {lIdx === 1 && <BookOpen size={18} className="text-blue-800" />}
                        {lIdx === 2 && <UserCheck size={18} className="text-blue-800" />}
                      </div>
                      <p className="text-gray-800 text-xs font-semibold leading-tight">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between group-hover:text-blue-700 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest">Details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WustHeroSection;