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
  Zap,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Database,
  Code,
  Network,
  GraduationCap,
  BookOpen
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

// --- Structured Content Data ---
const PROGRAM_CONTENT = {
  stats: [
    { label: 'Total Courses', val: '40', icon: BookOpen },
    { label: 'Duration', val: '4 Years', icon: Clock },
    { label: 'Credits', val: '180', icon: Award },
    { label: 'Location', val: 'Virginia', icon: MapPin },
  ],
  focusAreas: [
    { title: "Industry-Ready Skills", desc: "Practical, job-ready IT skills aligned with current industry needs and demands.", icon: Target },
    { title: "Three Concentrations", desc: "Choose from Cybersecurity, Enterprise Information Management, or Software Engineering.", icon: Network },
    { title: "High Placement Rate", desc: "Average employment placement rate of approximately 90% for program graduates.", icon: TrendingUp },
  ],
  outcomes: [
    "Apply practical IT skills in real-world professional environments",
    "Design, implement, and manage enterprise information systems",
    "Develop secure software applications and web solutions",
    "Understand cybersecurity principles and network defense",
    "Manage IT projects using industry-standard methodologies",
    "Communicate technical concepts effectively to diverse audiences"
  ],
  careers: [
    "IT Specialist / Analyst",
    "Software Developer",
    "Systems Administrator",
    "Cybersecurity Analyst"
  ],
  whyWust: [
    { 
      title: "90% Placement Rate", 
      desc: "Average employment placement rate of ~90%, connecting graduates with top employers.", 
      icon: TrendingUp, 
      color: "blue" 
    },
    { 
      title: "Industry-Aligned", 
      desc: "Curriculum designed in partnership with tech companies to meet current market demands.", 
      icon: Briefcase, 
      color: "blue" 
    },
    { 
      title: "Hands-On Learning", 
      desc: "Project-based learning with real-world applications and industry tools.", 
      icon: Code, 
      color: "blue" 
    },
    { 
      title: "Expert Faculty", 
      desc: "Learn from experienced IT professionals with extensive industry backgrounds.", 
      icon: Users, 
      color: "blue" 
    },
  ]
};

const UndergradIT = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef({});

  const navigationItems = [
    { id: 'overview', label: 'Program Overview' },
    { id: 'focus', label: 'Program Highlights' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'outcomes', label: 'Outcomes & Careers' },
    { id: 'why-wust', label: 'Why WUST?' },
    { id: 'admissions', label: 'Admissions' }
  ];

  // Scroll Spy Logic
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
     
      {/* --- Mobile Navigation (Sticky Horizontal with Underline Animation) --- */}
      <div className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex overflow-x-auto no-scrollbar px-4">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex-shrink-0 px-4 py-4 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-blue-900' : 'text-slate-500 hover:text-blue-900'
                }`}
              >
                {item.label}
                {/* Underline: Visible if active, slides in on hover if not active */}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] w-full bg-blue-900 transition-transform duration-300 origin-left ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container with Padding */}
      <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex w-full max-w-[1600px] mx-auto">
       
          {/* --- Sidebar Navigation (Desktop) --- */}
          <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-slate-50 border-r border-slate-200 z-40">
            <div className="p-8 pb-4">
              <h1 className="text-4xl font-extrabold text-blue-950 leading-none tracking-tight">BSIT</h1>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-2 pl-1">
                School of Science & Tech
              </p>
            </div>
         
            {/* Simplified Side Navigation */}
            <nav className="flex-1 px-4 space-y-2 mt-6">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 px-4 text-sm font-bold uppercase tracking-wide rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-900 translate-x-1'
                        : 'text-slate-500 hover:bg-slate-200 hover:text-blue-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Quick Apply Box */}
            <div className="p-6">
              <div className="bg-blue-950 text-white p-6 shadow-xl relative overflow-hidden group rounded-xl">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                <p className="text-xs font-bold text-blue-200 uppercase mb-1">Admissions Office</p>
                <p className="text-lg font-bold mb-4">+1 (703) 941-2020</p>
                <button className="w-full bg-white text-blue-950 py-3 font-bold text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors rounded-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </aside>

          {/* --- Main Content Area --- */}
          <main className="flex-1 min-w-0 bg-white">
         
            {/* 1. PROGRAM OVERVIEW (Hero Section) */}
            <section ref={(el) => (sectionsRef.current['overview'] = el)} className="relative border-b border-slate-200">
              <div className="grid lg:grid-cols-2 min-h-[650px]">
             
                {/* Text Area */}
                <div className="p-8 sm:p-10 lg:p-20 flex flex-col justify-center bg-blue-950 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
               
                  <div className="relative z-10">
                    <span className="inline-block py-1 px-3 border border-blue-400 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                      Undergraduate Degree
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                      Bachelor of Science in <span className="text-blue-400">Information Technology</span>
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100/90 mb-10 max-w-lg leading-relaxed font-light">
                      A four-year undergraduate program designed to deliver practical, job-ready IT skills aligned with industry needs. Launch your technology career with WUST.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-blue-950 font-bold px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-widest text-xs sm:text-sm hover:bg-blue-50 transition-transform hover:-translate-y-1 shadow-lg">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hero Image Area */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent lg:bg-blue-950/20 z-10"></div>
                  <img
                    src={images.hero}
                    alt="WUST IT Student Learning"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/95 backdrop-blur px-4 sm:px-6 py-2 sm:py-3 border-l-4 border-blue-600 shadow-xl">
                      <p className="text-blue-950 font-bold text-xs sm:text-sm uppercase flex items-center gap-2">
                        <GraduationCap size={16} /> Career-Ready Education
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-t border-slate-200">
                {PROGRAM_CONTENT.stats.map((stat, i) => (
                  <div key={i} className="p-4 sm:p-6 text-center hover:bg-slate-50 transition-colors group cursor-default">
                    <stat.icon className="mx-auto h-5 w-5 sm:h-6 sm:w-6 text-blue-900 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
                    <p className="text-lg sm:text-xl font-bold text-slate-800">{stat.val}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. PROGRAM HIGHLIGHTS (Detailed Overview) */}
            <section ref={(el) => (sectionsRef.current['focus'] = el)} className="p-8 sm:p-12 lg:p-24 bg-slate-50 scroll-mt-20">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-1 w-12 bg-blue-600"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 uppercase tracking-tight">Program Highlights</h2>
                </div>
             
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  {PROGRAM_CONTENT.focusAreas.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 sm:p-8 border-t-4 border-blue-900 shadow-sm hover:shadow-xl transition-shadow duration-300">
                      <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full mb-6 text-blue-900">
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Degree Structure Box */}
                <div className="mt-12 bg-white p-6 sm:p-8 border-l-4 border-blue-600 shadow-md">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-6 uppercase">Degree Structure</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-3xl font-bold text-blue-900 mb-2">12</p>
                      <p className="text-sm text-slate-600 font-semibold">General Education Courses</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-3xl font-bold text-blue-900 mb-2">24</p>
                      <p className="text-sm text-slate-600 font-semibold">Core IT / Professional Courses</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-3xl font-bold text-blue-900 mb-2">4</p>
                      <p className="text-sm text-slate-600 font-semibold">Electives / Concentration Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. CURRICULUM */}
            <section ref={(el) => (sectionsRef.current['curriculum'] = el)} className="p-8 sm:p-12 lg:p-24 border-t border-slate-200 scroll-mt-20">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 uppercase tracking-tight mb-4">Curriculum & Concentrations</h2>
                  <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
                    40 courses totaling 180 quarter credit hours. Choose one of three concentration tracks to specialize your degree.
                  </p>
                </div>
                <CourseAccordion />
              </div>
            </section>

            {/* 4. OUTCOMES & CAREERS (Combined Section) */}
            <section ref={(el) => (sectionsRef.current['outcomes'] = el)} className="bg-blue-950 text-white scroll-mt-20">
              <div className="grid lg:grid-cols-2">
             
                {/* Image Side - Convocation */}
                <div className="relative min-h-[500px] lg:h-auto overflow-hidden group order-2 lg:order-1">
                  <img
                    src={images.grad}
                    alt="WUST Convocation Ceremony"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-transparent to-transparent opacity-90 lg:opacity-60"></div>
               
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 shadow-2xl">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Award className="text-blue-400 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] sm:text-xs text-blue-200 uppercase tracking-widest font-bold">Graduate Success</p>
                        <p className="text-base sm:text-xl font-bold text-white">~90% employment placement rate for BSIT graduates.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side - Learning Outcomes */}
                <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center order-1 lg:order-2 bg-blue-900/30">
                  <div className="flex items-center gap-3 mb-6 text-blue-400">
                    <Award size={24} />
                    <span className="font-bold uppercase tracking-wider text-sm sm:text-base">Learning Outcomes</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">What You'll Learn</h2>
                  <p className="text-base sm:text-lg text-blue-200 mb-8 leading-relaxed">
                    Gain practical, job-ready skills that prepare you for immediate success in the IT industry.
                  </p>
               
                  <div className="space-y-3">
                    {PROGRAM_CONTENT.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 sm:p-4 bg-blue-900/40 border-l-4 border-blue-500 hover:bg-blue-900/60 transition-colors">
                        <CheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-xs sm:text-sm text-blue-100 leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Pathways Section */}
              <div className="border-t border-blue-800">
                <div className="p-8 sm:p-12 lg:p-20 max-w-5xl mx-auto">
                  <div className="flex items-center gap-3 mb-8 text-blue-400">
                    <Briefcase size={24} />
                    <span className="font-bold uppercase tracking-wider text-sm sm:text-base">Career Pathways</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">Launch Your IT Career</h2>
                  <p className="text-base sm:text-lg text-blue-200 mb-10 leading-relaxed max-w-3xl">
                    Our graduates enter the workforce with practical experience and industry-recognized skills, ready to make an immediate impact.
                  </p>
               
                  <div className="grid sm:grid-cols-2 gap-4">
                    {PROGRAM_CONTENT.careers.map((job, i) => (
                      <div key={i} className="flex items-center justify-between p-4 sm:p-5 bg-blue-900/50 border-l-4 border-blue-500 hover:bg-blue-900 transition-colors cursor-default group">
                        <span className="font-bold tracking-wide text-sm sm:text-base">{job}</span>
                        <ArrowRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all flex-shrink-0" size={16} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 5. WHY WUST (Interactive Cards) */}
            <section ref={(el) => (sectionsRef.current['why-wust'] = el)} className="p-8 sm:p-12 lg:p-24 bg-white overflow-hidden scroll-mt-20">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12 sm:mb-16">
                  <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 uppercase tracking-tight mb-4">Why WUST?</h2>
                  <p className="text-lg sm:text-xl text-slate-500 max-w-2xl">
                    Start your IT career with a program designed for real-world success.
                  </p>
                </div>

                {/* Why WUST Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
                  {PROGRAM_CONTENT.whyWust.map((item, idx) => {
                    return (
                      <div 
                        key={idx} 
                        className="p-6 sm:p-8 bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 flex items-center justify-center rounded-full mb-6 text-blue-600">
                          <item.icon size={28} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 uppercase tracking-wide">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Collage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
               
                  {/* Card 1: Large Left (Community) */}
                  <div className="md:col-span-2 relative group cursor-pointer h-80 md:h-full">
                    {/* Background Layer (Shadow) */}
                    <div className="absolute inset-0 bg-blue-950 transform translate-x-0 translate-y-0 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 rounded-none z-0"></div>
                 
                    {/* Foreground Layer (Image) */}
                    <div className="relative z-10 h-full w-full bg-slate-200 border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <img src={images.collage1} alt="WUST Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   
                      {/* Overlay Text */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent p-6 sm:p-8">
                         <div className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-bold uppercase mb-2">Student Life</div>
                         <h3 className="text-white text-2xl sm:text-3xl font-bold">Vibrant Campus</h3>
                         <p className="text-slate-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm sm:text-base">
                           Join a diverse community of future IT professionals.
                         </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Stack */}
                  <div className="flex flex-col gap-8 md:col-span-1">
                 
                    {/* Card 2: Top Right (Faculty) */}
                    <div className="flex-1 relative group cursor-pointer h-64 md:h-auto">
                      <div className="absolute inset-0 bg-blue-700 transform translate-x-0 translate-y-0 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
                      <div className="relative z-10 h-full w-full bg-white border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <img src={images.collage2} alt="Expert Faculty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <div className="text-center">
                             <Users className="mx-auto text-blue-400 mb-2" size={32} />
                             <h4 className="text-white font-bold text-lg sm:text-xl uppercase">Industry Pros</h4>
                           </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Bottom Right (Events) */}
                    <div className="flex-1 relative group cursor-pointer h-64 md:h-auto">
                      <div className="absolute inset-0 bg-blue-600 transform translate-x-0 translate-y-0 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
                      <div className="relative z-10 h-full w-full bg-white border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <img src={images.collage3} alt="Student Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute top-4 right-4 bg-white text-blue-950 px-3 py-1 font-bold text-xs uppercase border border-blue-950 shadow-sm">
                            Tech Events
                         </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* 6. ADMISSIONS */}
            <section ref={(el) => (sectionsRef.current['admissions'] = el)} className="bg-slate-50 border-t border-slate-200 scroll-mt-20">
              <div className="grid md:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-24 flex flex-col justify-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 uppercase mb-6">Start Your Journey</h2>
                  <p className="text-base sm:text-lg text-slate-600 mb-8">
                    We are accepting applications for the upcoming Fall semester. Begin your path to a rewarding IT career at WUST.
                  </p>
               
                  <div className="grid gap-6 mb-10">
                    <div className="flex items-start gap-4 p-5 sm:p-6 bg-white border border-slate-200 hover:border-blue-500 transition-colors shadow-sm group">
                       <div className="bg-blue-100 p-3 rounded-full text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0"><Phone size={24}/></div>
                       <div>
                          <h4 className="font-bold text-blue-950 text-base sm:text-lg">Call Admissions</h4>
                          <p className="text-slate-500 mt-1 text-sm sm:text-base">+1 (703) 941-2020</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 sm:p-6 bg-white border border-slate-200 hover:border-blue-500 transition-colors shadow-sm group">
                       <div className="bg-blue-100 p-3 rounded-full text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0"><Mail size={24}/></div>
                       <div>
                          <h4 className="font-bold text-blue-950 text-base sm:text-lg">Email Us</h4>
                          <p className="text-slate-500 mt-1 text-sm sm:text-base">admissions@wust.edu</p>
                       </div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-950 text-white font-bold py-4 sm:py-5 uppercase tracking-widest text-xs sm:text-sm hover:bg-blue-600 transition-colors shadow-xl">
                    Start Application
                  </button>
                </div>
             
                {/* Admissions Image */}
                <div className="relative h-[400px] md:h-auto overflow-hidden">
                  <img src={images.admission} alt="Admissions Fair" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Course Accordion ---
const CourseAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    {
      title: "Cybersecurity Concentration",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      courses: [
        { id: "SC 491", name: "Introduction to Cryptography", desc: "Fundamental cryptographic algorithms and protocols for secure communication." },
        { id: "SC 492", name: "Computer & Network Security", desc: "Network defense strategies, firewalls, and intrusion detection systems." },
        { id: "SC 493", name: "Computer & Cyber Forensics", desc: "Digital evidence collection, analysis, and incident response techniques." },
        { id: "SC 494", name: "Applied Cybersecurity", desc: "Hands-on security implementation and threat mitigation strategies." }
      ]
    },
    {
      title: "Enterprise Information Management (EIM)",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      courses: [
        { id: "EIM 491", name: "Enterprise Architecture", desc: "Designing scalable enterprise IT architectures and frameworks." },
        { id: "EIM 492", name: "Enterprise Systems", desc: "Implementation and management of large-scale enterprise solutions." },
        { id: "EIM 493", name: "Management of Information Systems", desc: "Strategic IT management and organizational information systems." },
        { id: "EIM 494", name: "Enterprise Resource Planning", desc: "ERP system design, implementation, and business process integration." }
      ]
    },
    {
      title: "Software Engineering Concentration",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      courses: [
        { id: "SE 491", name: "Software Construction", desc: "Software development best practices and construction techniques." },
        { id: "SE 492", name: "Software Project Management", desc: "Agile methodologies and software project lifecycle management." },
        { id: "SE 493", name: "Software Engineering", desc: "Software design patterns, architecture, and engineering principles." },
        { id: "SE 494", name: "Mobile Application Development", desc: "iOS and Android application design and development." }
      ]
    },
    {
      title: "Core / Professional Courses (Sample)",
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      courses: [
        { id: "CORE", name: "Business Communication", desc: "Professional communication skills for IT professionals." },
        { id: "CORE", name: "Project Management", desc: "Project planning, execution, and team coordination." },
        { id: "CORE", name: "Operating Systems", desc: "OS architecture, process management, and system administration." },
        { id: "CORE", name: "Algorithms", desc: "Algorithm design, analysis, and computational complexity." },
        { id: "CORE", name: "Web Design & Development", desc: "Modern web technologies and full-stack development." },
        { id: "CORE", name: "Database Management Systems", desc: "Database design, SQL, and data management principles." },
        { id: "CORE", name: "Computer Security Fundamentals", desc: "Essential security concepts and threat protection." },
        { id: "CORE", name: "Systems Analysis & Design", desc: "System requirements, modeling, and design methodologies." }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      {categories.map((cat, idx) => (
        <div key={idx} className={`border transition-all duration-300 ${openIndex === idx ? 'border-blue-950 shadow-lg bg-white' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
          <button
            onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`p-2 sm:p-3 transition-colors ${openIndex === idx ? 'bg-blue-950 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {cat.icon}
              </div>
              <span className={`text-sm sm:text-lg font-bold uppercase tracking-wide ${openIndex === idx ? 'text-blue-950' : 'text-slate-600'}`}>
                {cat.title}
              </span>
            </div>
            {openIndex === idx ? <ChevronUp className="text-blue-950 flex-shrink-0" size={20}/> : <ChevronDown className="text-slate-400 flex-shrink-0" size={20}/>}
          </button>
         
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {cat.courses.map((course, cIdx) => (
                  <div key={cIdx} className="bg-white p-4 sm:p-5 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-black text-slate-200 text-xs uppercase tracking-widest">{course.id}</span>
                    </div>
                    <h4 className="font-bold text-blue-950 mb-2 text-sm sm:text-base">{course.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-snug">{course.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UndergradIT;