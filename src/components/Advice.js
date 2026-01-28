import React from 'react';
import { ArrowRight } from 'lucide-react';

const Advice = () => {
  // WGU-specific color palette
  const theme = {
    wguDeepNavy: "#001B33", // The darker background color
    wguCardNavy: "#002F51", // The slightly lighter card color
    wguGold: "#FFC20E",
  };

  const faculty = [
    {
      name: "Dr. Sarah Jenkins",
      title: "Dean of Business Management",
      quote: "Our curriculum is designed not just to teach business, but to forge leaders who can navigate the complexities of global markets with ethics and agility.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Prof. Michael Chen",
      title: "Head of Marketing Department",
      quote: "At WUST, we are obsessed with student success. We've built a community-of-practice where faculty and students collaborate on real-world strategic challenges.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Dr. Robert Berg",
      title: "Professor of Leadership",
      quote: "Seeing a student apply a foundational theory to achieve an excellent outcome in their professional life is the ultimate affirmation of our mission.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <section 
      className="w-full py-24 px-6 md:px-12 lg:px-24 text-white overflow-hidden"
      style={{ backgroundColor: theme.wguDeepNavy }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Header Content */}
        <div className="lg:w-1/3 text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            What Our <br /> Faculty Are <br /> Saying
          </h2>
          <div className="w-16 h-[2px] bg-white mb-8"></div>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Our faculty brings a wealth of industry experience and academic excellence, 
            ensuring your education is relevant and rigorous.
          </p>
          <a 
            href="#" 
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-300 transition-colors"
          >
            SEE ALL FACULTY <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Side: Staggered Cards */}
        <div className="lg:w-2/3 w-full relative flex flex-col gap-6">
          
          {/* Card 1: Aligned Start */}
          <div 
            className="self-start md:ml-0 w-full md:max-w-xl p-8 flex items-start gap-6 shadow-2xl rounded-sm transition-transform hover:-translate-y-1"
            style={{ backgroundColor: theme.wguCardNavy }}
          >
            <img src={faculty[0].image} alt={faculty[0].name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/20" />
            <div>
              <p className="italic text-gray-100 mb-4 leading-relaxed font-light">"{faculty[0].quote}"</p>
              <p className="font-bold text-sm tracking-wide">— {faculty[0].name}, {faculty[0].title}</p>
            </div>
          </div>

          {/* Card 2: Aligned End (The Stagger) */}
          <div 
            className="self-end md:mr-0 w-full md:max-w-xl p-8 flex items-start gap-6 shadow-2xl rounded-sm transition-transform hover:-translate-y-1"
            style={{ backgroundColor: theme.wguCardNavy }}
          >
            <img src={faculty[1].image} alt={faculty[1].name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/20" />
            <div>
              <p className="italic text-gray-100 mb-4 leading-relaxed font-light">"{faculty[1].quote}"</p>
              <p className="font-bold text-sm tracking-wide">— {faculty[1].name}, {faculty[1].title}</p>
            </div>
          </div>

          {/* Card 3: Aligned Center/Start */}
          <div 
            className="self-start md:ml-12 w-full md:max-w-xl p-8 flex items-start gap-6 shadow-2xl rounded-sm transition-transform hover:-translate-y-1"
            style={{ backgroundColor: theme.wguCardNavy }}
          >
            <img src={faculty[2].image} alt={faculty[2].name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/20" />
            <div>
              <p className="italic text-gray-100 mb-4 leading-relaxed font-light">"{faculty[2].quote}"</p>
              <p className="font-bold text-sm tracking-wide">— {faculty[2].name}, {faculty[2].title}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advice;