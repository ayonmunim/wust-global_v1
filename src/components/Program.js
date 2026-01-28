import React from 'react';
import { GraduationCap, BookOpen, UserCheck, ArrowRight } from "lucide-react";

const GraduateProgramSection = () => {
  const theme = {
    wguDeepNavy: "#001B33",
    wguActionBlue: "#005EB8",
    wguGold: "#FFC20E"
  };

  // Icon mapping
  const iconMap = {
    GraduationCap,
    BookOpen,
    UserCheck
  };

  // Program data - can be replaced with any content
  const programData = {
    category: "Graduate School",
    title: "Designed for Leadership",
    description: "Our program bridges the gap between theory and industry application, equipping you with the skills to lead modern organizations.",
    features: [
      {
        icon: "GraduationCap",
        title: "Applied Learning",
        description: "Master 54 credits of competency-based applications across industries."
      },
      {
        icon: "BookOpen",
        title: "Academic Standards",
        description: "Achieve a 3.0 CGPA through a curriculum built for global success."
      },
      {
        icon: "UserCheck",
        title: "Guided Success",
        description: "Personalized mentorship and support throughout your entire journey."
      }
    ],
    buttonText: "Explore Requirements"
  };

  return (
    <section className="w-full" style={{ backgroundColor: theme.wguDeepNavy }}>
      {/* Container provides the "Two Side Margins" in Dark Blue */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[500px]">
        
        {/* LEFT SIDE: Navy Background */}
        <div className="lg:w-1/2 p-10 md:p-16 text-white flex flex-col justify-center">
          <h6 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
            {programData.category}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {programData.title.split(' ').slice(0, 2).join(' ')} <br />
            {programData.title.split(' ').slice(2).join(' ')}
          </h2>
          
          <div 
            className="w-20 h-1 mb-8" 
            style={{ backgroundColor: theme.wguActionBlue }}
          />
          
          <p className="text-gray-300 text-base leading-relaxed max-w-sm">
            {programData.description}
          </p>
        </div>

        {/* RIGHT SIDE: White Background */}
        <div className="lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center gap-8">
          
          {programData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={index} className="flex gap-5 items-start">
                <div className="p-3 bg-slate-100 rounded-full shrink-0">
                  <IconComponent size={28} className="text-blue-900" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-blue-950 uppercase tracking-wider mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}

          <button 
            className="mt-4 self-start flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-800 hover:text-blue-600 transition-all"
          >
            {programData.buttonText} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GraduateProgramSection;