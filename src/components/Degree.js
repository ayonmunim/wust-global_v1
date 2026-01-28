import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Server, 
  Globe, 
  Briefcase, 
  ChevronDown, 
  ChevronUp,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  MapPin,
  ArrowRight,
  Target,
  Zap
} from 'lucide-react';

// --- Image Configuration ---
const images = {
  hero: "/wust (13).jpg",
  grad: "/wust (11).jpg",
  collage1: "/wust (14).jpg",
  collage2: "/wust (1).jpg",
  collage3: "/wust (4).jpg",
  admission: "/wust (12).jpg"
};

const Degree = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef({});

  const navigationItems = [
    { id: 'overview', label: 'Program Overview' },
    { id: 'focus', label: 'Program Focus' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'outcomes', label: 'Outcomes & Careers' },
    { id: 'why-wust', label: 'Why WUST?' },
    { id: 'admissions', label: 'Admissions' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; 
      for (const item of navigationItems) {
        const section = sectionsRef.current[item.id];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      const offsetTop = section.offsetTop - 60; 
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- Mobile Navigation --- */}
      <div className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex overflow-x-auto no-scrollbar">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex-shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors hover:text-blue-900"
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] w-full bg-blue-900 transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex w-full max-w-[1600px] mx-auto">
        
        {/* --- Sidebar Navigation (Desktop) --- */}
        <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-slate-50 border-r border-slate-200 z-40">
          <div className="p-6 pb-2">
            <h1 className="text-3xl font-extrabold text-blue-950 leading-none tracking-tight">MSCS</h1>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-2 border-l-2 border-blue-600 pl-2">
              School of Science & Tech
            </p>
          </div>
          
          {/* Navigation Items (Removed flex-1 to keep items grouped at top) */}
          <nav className="px-0 space-y-0.5 mt-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center w-full text-left py-3 px-8 text-sm tracking-wide transition-all duration-200 border-l-4 ${
                  activeSection === item.id 
                    ? 'border-blue-950 bg-white text-blue-950 shadow-sm pl-10 font-bold' 
                    : 'border-transparent text-slate-500 font-normal hover:bg-slate-100 hover:text-blue-900 hover:font-bold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Apply Box - Now positioned right after the nav */}
          <div className="p-4">
            <div className="bg-blue-950 text-white p-5 shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              <p className="text-[10px] font-bold text-blue-200 uppercase mb-1">Admissions</p>
              <p className="text-md font-bold mb-3">+1 (703) 941-2020</p>
              <button className="w-full bg-white text-blue-950 py-2.5 font-bold text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
          
          {/* Fills the remaining space at the bottom */}
          <div className="flex-1" />
        </aside>

        {/* --- Main Content Area --- */}
        <main className="flex-1 min-w-0 bg-white">
          
          {/* 1. PROGRAM OVERVIEW */}
          <section ref={(el) => (sectionsRef.current['overview'] = el)} className="relative border-b border-slate-200">
            <div className="grid lg:grid-cols-2 min-h-[650px]">
              <div className="p-12 lg:p-20 flex flex-col justify-center bg-blue-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 border border-blue-400 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                    Graduate Degree
                  </span>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    Master of Science in <span className="text-blue-400">Cybersecurity</span>
                  </h1>
                  <p className="text-lg text-blue-100/90 mb-10 max-w-lg leading-relaxed font-light">
                    Designed for the modern digital battlefield. Master the art of information assurance, risk management, and secure cloud architecture at WUST.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-blue-950 font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-blue-50 transition-transform hover:-translate-y-1 shadow-lg">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent lg:bg-blue-950/20 z-10"></div>
                <img src={images.hero} alt="WUST Classroom" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/95 backdrop-blur px-6 py-3 border-l-4 border-blue-600 shadow-xl">
                    <p className="text-blue-950 font-bold text-sm uppercase flex items-center gap-2">
                      <Users size={16} /> Interactive Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-t border-slate-200">
              {[
                { label: 'Credits', val: '54', icon: Award },
                { label: 'Duration', val: '18 Months', icon: Clock },
                { label: 'Format', val: 'Hybrid', icon: Globe },
                { label: 'Location', val: 'Virginia', icon: MapPin },
              ].map((stat, i) => (
                <div key={i} className="p-6 text-center hover:bg-slate-50 transition-colors group cursor-default">
                  <stat.icon className="mx-auto h-6 w-6 text-blue-900 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
                  <p className="text-xl font-bold text-slate-800">{stat.val}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. PROGRAM FOCUS */}
          <section ref={(el) => (sectionsRef.current['focus'] = el)} className="p-12 lg:p-24 bg-slate-50 scroll-mt-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-1 w-12 bg-blue-600"></div>
                <h2 className="text-3xl font-bold text-blue-950 uppercase tracking-tight">Program Focus</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Risk Management", desc: "Identify vulnerabilities and create mitigation strategies.", icon: Target },
                  { title: "Secure Architecture", desc: "Build resilient cloud and network infrastructures.", icon: Shield },
                  { title: "Global Compliance", desc: "Navigate cyber law, ethics, and international standards.", icon: Globe },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 border-t-4 border-blue-900 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full mb-6 text-blue-900">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. CURRICULUM */}
          <section ref={(el) => (sectionsRef.current['curriculum'] = el)} className="p-12 lg:p-24 border-t border-slate-200 scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-950 uppercase tracking-tight mb-4">Curriculum & Courses</h2>
              <CourseAccordion />
            </div>
          </section>

          {/* 4. OUTCOMES */}
          <section ref={(el) => (sectionsRef.current['outcomes'] = el)} className="bg-blue-950 text-white scroll-mt-20">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[500px] lg:h-auto overflow-hidden group order-2 lg:order-1">
                <img src={images.grad} alt="Graduation" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Award className="text-yellow-400 h-10 w-10" />
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-widest font-bold">Alumni Success</p>
                      <p className="text-xl font-bold text-white">Graduates employed in top Tech firms.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6 text-emerald-400">
                  <Briefcase size={24} />
                  <span className="font-bold uppercase tracking-wider">Career Outcomes</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">Industry Ready</h2>
                <div className="space-y-4">
                  {["Information Security Analyst", "Network Architect", "Cybersecurity Manager", "Penetration Tester"].map((job, i) => (
                    <div key={i} className="flex items-center p-4 bg-blue-900/50 border-l-4 border-emerald-500 hover:bg-blue-900 transition-colors cursor-default">
                      <span className="font-bold tracking-wide">{job}</span>
                      <ArrowRight className="ml-auto opacity-50" size={16} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. WHY WUST */}
          <section ref={(el) => (sectionsRef.current['why-wust'] = el)} className="p-12 lg:p-24 bg-white overflow-hidden scroll-mt-20">
             <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-5xl font-bold text-blue-950 uppercase tracking-tight mb-4">Why WUST?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
                  <div className="md:col-span-2 relative group cursor-pointer h-80 md:h-full">
                    <div className="absolute inset-0 bg-blue-950 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 z-0"></div>
                    <div className="relative z-10 h-full w-full bg-slate-200 border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <img src={images.collage1} alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-950/90 p-8">
                         <h3 className="text-white text-3xl font-bold">A Global Community</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 md:col-span-1">
                    <div className="flex-1 relative group cursor-pointer h-64 md:h-auto">
                      <div className="absolute inset-0 bg-emerald-600 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
                      <div className="relative z-10 h-full w-full bg-white border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <img src={images.collage2} alt="Faculty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="flex-1 relative group cursor-pointer h-64 md:h-auto">
                      <div className="absolute inset-0 bg-yellow-500 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
                      <div className="relative z-10 h-full w-full bg-white border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <img src={images.collage3} alt="Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </section>

          {/* 6. ADMISSIONS */}
          <section ref={(el) => (sectionsRef.current['admissions'] = el)} className="bg-slate-50 border-t border-slate-200 scroll-mt-20">
            <div className="grid md:grid-cols-2">
              <div className="p-12 lg:p-24 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-blue-950 uppercase mb-6">Start Your Journey</h2>
                <div className="grid gap-6 mb-10">
                  <div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm">
                     <Phone className="text-blue-900" size={24}/>
                     <div>
                        <h4 className="font-bold text-blue-950">Call Admissions</h4>
                        <p className="text-slate-500">+1 (703) 941-2020</p>
                     </div>
                  </div>
                </div>
                <button className="w-full bg-blue-950 text-white font-bold py-5 uppercase tracking-widest text-sm hover:bg-emerald-600 transition-colors shadow-xl">
                  Start Application
                </button>
              </div>
              <div className="relative h-[400px] md:h-auto overflow-hidden">
                <img src={images.admission} alt="Admissions" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const CourseAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const categories = [
    {
      title: "Foundations",
      icon: <Server className="w-6 h-6" />,
      courses: [{ id: "CS 501", name: "Intro to Cybersecurity", desc: "Overview of threat landscapes." }]
    },
    {
      title: "Architecture",
      icon: <Lock className="w-6 h-6" />,
      courses: [{ id: "CS 532", name: "Secure Cloud Architecture", desc: "Designing resilient systems." }]
    }
  ];

  return (
    <div className="space-y-4 max-w-4xl mx-auto text-left">
      {categories.map((cat, idx) => (
        <div key={idx} className={`border transition-all ${openIndex === idx ? 'border-blue-950 bg-white' : 'border-slate-200 bg-white'}`}>
          <button onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)} className="w-full flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 ${openIndex === idx ? 'bg-blue-950 text-white' : 'bg-slate-100'}`}>{cat.icon}</div>
              <span className="text-lg font-bold uppercase tracking-wide">{cat.title}</span>
            </div>
            {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openIndex === idx && (
            <div className="p-6 pt-0 bg-slate-50/50">
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {cat.courses.map((course, cIdx) => (
                  <div key={cIdx} className="bg-white p-5 border-l-4 border-emerald-500 shadow-sm">
                    <h4 className="font-bold text-blue-950">{course.name}</h4>
                    <p className="text-sm text-slate-500">{course.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Degree;