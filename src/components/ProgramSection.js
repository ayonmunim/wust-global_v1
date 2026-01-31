import React from 'react';
import { ArrowRight, Briefcase, GraduationCap, Award, Star } from "lucide-react";

const GraduateProgramHero = () => {
  const theme = {
    wguNavy: "#001B33",      
    wguActionBlue: "#005EB8", 
    fontFamily: '"Trebuchet MS", "Lucida Sans", Arial, sans-serif'
  };

  const achievements = [
    {
      icon: <Briefcase size={24} />,
      label: "Job Placement",
      value: "83%",
      desc: "Approx. 83% of students secure jobs post-graduation."
    },
    {
      icon: <GraduationCap size={24} />,
      label: "MSIT Outcomes",
      value: "12-Mo",
      desc: "WUST tracks 12-month graduation and employment outcomes."
    },
    {
      icon: <Award size={24} />,
      label: "Top 5 in VA",
      value: "Ranked",
      desc: "Recognized as a top school for MBA & Project Management."
    },
    {
      icon: <Star size={24} />,
      label: "Niche Rating",
      value: "4.83",
      desc: "Highly rated student satisfaction (4.83 out of 5)."
    }
  ];

  return (
    <div className="relative w-full min-h-[85vh] flex flex-col lg:flex-row overflow-hidden bg-[#001B33]" style={{ fontFamily: theme.fontFamily }}>
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
          alt="WUST Graduate Campus"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B33] via-[#001B33]/85 to-transparent"></div>
      </div>

      {/* LEFT CONTENT: Primary CTA Area */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-24 py-20 text-white">
        <p className="text-[11px] font-bold tracking-[0.4em] text-[#005EB8] uppercase mb-4">
          Graduate School Admissions 2026
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 uppercase tracking-tight">
          Designed For <br /> 
          <span className="text-[#005EB8]">Leadership</span> <br />
          & Innovation
        </h1>
        
        <div className="w-24 h-1.5 mb-8 bg-[#005EB8]"></div>
        
        <p className="text-lg md:text-xl mb-10 text-slate-200 max-w-md leading-relaxed font-light">
          Master the complexities of Information Technology and Business with WUST's industry-led graduate credentials.
        </p>
        
        <div className="flex flex-wrap gap-4">
          {/* IMPORTANT HOVER BUTTON FIX */}
          <button className="group flex items-center gap-3 px-10 py-4 bg-[#005EB8] text-white text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:!bg-white hover:!text-black shadow-lg border border-transparent hover:border-white">
            Start Application 
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT: Interactive Circular Accreditation Seals */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-lg">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col items-center justify-center text-center transition-all duration-500"
            >
              {/* The Circle Seal */}
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full border-2 border-white/20 flex flex-col items-center justify-center transition-all duration-500 
                bg-white/5 backdrop-blur-sm
                group-hover:bg-white group-hover:border-[#005EB8] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,94,184,0.4)]"
              >
                {/* Visual Icon */}
                <div className="text-[#005EB8] mb-1 transition-colors duration-300 group-hover:!text-[#001B33]">
                  {item.icon}
                </div>

                {/* Main Value Stat */}
                <h4 className="text-3xl md:text-4xl font-black text-white transition-colors duration-300 group-hover:!text-[#001B33]">
                  {item.value}
                </h4>

                {/* Tracking Label */}
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-300 transition-colors duration-300 group-hover:!text-[#005EB8]">
                  {item.label}
                </p>

                {/* Decorative Dashed Ring on Hover */}
                <div className="absolute inset-2 rounded-full border border-dashed border-[#005EB8]/0 transition-all duration-700 group-hover:border-[#005EB8]/30 group-hover:rotate-90"></div>
              </div>

              {/* Sub-text Description */}
              <div className="mt-4 px-2 max-w-[160px]">
                <p className="text-[10px] leading-tight text-white/40 transition-all duration-300 group-hover:!text-white group-hover:font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Finishing Bottom Decorative Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#005EB8] via-white/20 to-transparent z-10"></div>
    </div>
  );
};

export default GraduateProgramHero;