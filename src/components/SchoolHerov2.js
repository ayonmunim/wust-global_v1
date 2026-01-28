import React from 'react';
import { GraduationCap, BookOpen, UserCheck, ArrowRight } from "lucide-react";

const WustHeroSection = () => {
  const theme = {
    wguNavy: "#001B33",
    wguGold: "#FFC20E",
    wguActionBlue: "#005EB8",
  };

  const programs = [
    {
      title: "Graduate Program",
      details: [
        "Applied Learning Expert",
        "Master 54 Credits",
        "Competency Based Apps"
      ]
    },
    {
      title: "Undergrad Program",
      details: [
        "Academic Standards High",
        "Achieve 3.0 CGPA",
        "Global Success Path"
      ]
    },
    {
      title: "Certificate Program",
      details: [
        "Guided Success Plan",
        "Personalized Mentorship Support",
        "Entire Academic Journey"
      ]
    }
  ];

  return (
    <div className="relative w-full min-h-[85vh] flex flex-col">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B33] via-[#001B33]/10 to-transparent"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex-grow flex items-center px-6 md:px-12 lg:px-24 pt-20 pb-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            WUST School of Business
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-gray-200">
            Change Your Life With an Online Business Degree
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* THREE CARDS SECTION (Matching your layout request) */}
      <div className="relative z-20 w-full px-4 md:px-12 lg:px-24 -mt-20 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-2xl p-8 border-t-4 transition-transform hover:-translate-y-2"
              style={{ borderTopColor: theme.wguGold }}
            >
              <h3 className="text-blue-950 font-black uppercase tracking-tighter text-xl mb-6 border-b pb-4">
                {prog.title}
              </h3>
              
              <div className="space-y-4">
                {prog.details.map((line, lIdx) => (
                  <div key={lIdx} className="flex items-start gap-3">
                    {lIdx === 0 && <GraduationCap size={18} className="text-blue-700 mt-1 shrink-0" />}
                    {lIdx === 1 && <BookOpen size={18} className="text-blue-700 mt-1 shrink-0" />}
                    {lIdx === 2 && <UserCheck size={18} className="text-blue-700 mt-1 shrink-0" />}
                    <p className="text-gray-700 text-sm font-semibold leading-tight">
                      {line}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-8 flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest hover:gap-4 transition-all">
                View Program <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WustHeroSection;