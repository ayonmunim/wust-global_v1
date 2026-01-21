import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Server, 
  Globe, 
  CheckCircle, 
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
// Ensure these files exist in your public/assets folder
const images = {
  hero: "wust (13).jpg",      // Hero: Active classroom/woman speaking
  grad: "wust (11).jpg",      // Outcomes: Convocation/Graduates
  collage1: "wust (14).jpg",  // Why Wust: Students group
  collage2: "wust (1).jpg",   // Why Wust: Speaker
  collage3: "wust (4).jpg",   // Why Wust: Event/Question
  admission: "wust (12).jpg" // Admissions Fair
};

const WustWholeComponent = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef({});

  // Navigation Labels matching the sections below
  const navigationItems = [
    { id: 'overview', label: 'Program Overview' },
    { id: 'focus', label: 'Program Focus' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'outcomes', label: 'Outcomes & Careers' },
    { id: 'why-wust', label: 'Why WUST?' },
    { id: 'admissions', label: 'Admissions' }
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 
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
      const offsetTop = section.offsetTop - 80; 
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- Mobile Navigation (Sticky Top) --- */}
      <div className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === item.id 
                  ? 'text-blue-900 bg-blue-100 px-3 py-1 rounded-full' 
                  : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-[1600px] mx-auto">
        
        {/* --- Sidebar Navigation (Desktop) --- */}
        <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-slate-50 border-r border-slate-200 z-40">
          <div className="p-8 pb-4">
            <h1 className="text-4xl font-extrabold text-blue-950 leading-none tracking-tight">MSCS</h1>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-2 border-l-2 border-blue-600 pl-2">
              School of Science & Tech
            </p>
          </div>
          
          <nav className="flex-1 px-0 space-y-1 mt-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center w-full text-left py-4 px-8 text-sm font-bold uppercase tracking-wide transition-all duration-300 border-l-4 ${
                  activeSection === item.id 
                    ? 'border-blue-950 bg-white text-blue-950 shadow-md pl-10' 
                    : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Apply Box */}
          <div className="p-6">
            <div className="bg-blue-950 text-white p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              <p className="text-xs font-bold text-blue-200 uppercase mb-1">Admissions Office</p>
              <p className="text-lg font-bold mb-4">+1 (703) 941-2020</p>
              <button className="w-full bg-white text-blue-950 py-3 font-bold text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors">
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

              {/* Hero Image Area */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent lg:bg-blue-950/20 z-10"></div>
                <img 
                  src={images.hero} 
                  alt="WUST Classroom Discussion" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/95 backdrop-blur px-6 py-3 border-l-4 border-blue-600 shadow-xl">
                    <p className="text-blue-950 font-bold text-sm uppercase flex items-center gap-2">
                      <Users size={16} /> Interactive Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Bar */}
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

          {/* 2. PROGRAM FOCUS (Detailed Overview) */}
          <section ref={(el) => (sectionsRef.current['focus'] = el)} className="p-12 lg:p-24 bg-slate-50 scroll-mt-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-1 w-12 bg-blue-600"></div>
                <h2 className="text-3xl font-bold text-blue-950 uppercase tracking-tight">Program Focus</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Risk Management", desc: "Identify vulnerabilities and create mitigation strategies for enterprise systems.", icon: Target },
                  { title: "Secure Architecture", desc: "Build resilient cloud and network infrastructures that withstand attacks.", icon: Shield },
                  { title: "Global Compliance", desc: "Navigate the complex landscape of cyber law, ethics, and international standards.", icon: Globe },
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
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-950 uppercase tracking-tight mb-4">Curriculum & Courses</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  A rigorous blend of theoretical foundations and hands-on application. 
                  Click a module below to explore the coursework.
                </p>
              </div>
              <CourseAccordion />
            </div>
          </section>

          {/* 4. OUTCOMES (Convocation Picture) */}
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
                <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Award className="text-yellow-400 h-10 w-10" />
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-widest font-bold">Alumni Success</p>
                      <p className="text-xl font-bold text-white">Graduates employed in top Tech & Defense firms.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6 text-emerald-400">
                  <Briefcase size={24} />
                  <span className="font-bold uppercase tracking-wider">Career Outcomes</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">Prepared for the Demands of Industry</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Upon completion, students are prepared to sit for industry-standard certifications (CISSP, CISM, CEH) and step into mid-to-senior level roles.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Information Security Analyst",
                    "Network Architect",
                    "Cybersecurity Manager",
                    "Penetration Tester"
                  ].map((job, i) => (
                    <div key={i} className="flex items-center p-4 bg-blue-900/50 border-l-4 border-emerald-500 hover:bg-blue-900 transition-colors cursor-default">
                      <span className="font-bold tracking-wide">{job}</span>
                      <ArrowRight className="ml-auto opacity-50" size={16} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. WHY WUST (Interactive Collage Bot) */}
          <section ref={(el) => (sectionsRef.current['why-wust'] = el)} className="p-12 lg:p-24 bg-white overflow-hidden scroll-mt-20">
             <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-5xl font-bold text-blue-950 uppercase tracking-tight mb-4">Why WUST?</h2>
                  <p className="text-slate-500 text-xl max-w-2xl">
                    More than a classroom. An ecosystem of innovation, diversity, and practical experience.
                  </p>
                </div>

                {/* --- Interactive Collage Grid --- */}
                {/* Logic:
                    - 'group' on parent for hover triggers.
                    - 'group-hover:translate' creates the movement.
                    - 'shadow-[8px_8px_0px_#color]' creates the brutalist shadow pop effect.
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
                  
                  {/* Card 1: Large Left (Community) */}
                  <div className="md:col-span-2 relative group cursor-pointer h-80 md:h-full">
                    {/* Background Layer (Shadow) */}
                    <div className="absolute inset-0 bg-blue-950 transform translate-x-0 translate-y-0 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 rounded-none z-0"></div>
                    
                    {/* Foreground Layer (Image) */}
                    <div className="relative z-10 h-full w-full bg-slate-200 border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <img src={images.collage1} alt="WUST Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      
                      {/* Overlay Text */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent p-8">
                         <div className="inline-block px-2 py-1 bg-emerald-500 text-white text-xs font-bold uppercase mb-2">Campus Life</div>
                         <h3 className="text-white text-3xl font-bold">A Global Community</h3>
                         <p className="text-slate-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                           Join students from over 50 countries in the heart of Virginia.
                         </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Stack */}
                  <div className="flex flex-col gap-8 md:col-span-1">
                    
                    {/* Card 2: Top Right (Faculty) */}
                    <div className="flex-1 relative group cursor-pointer h-64 md:h-auto">
                      <div className="absolute inset-0 bg-emerald-600 transform translate-x-0 translate-y-0 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
                      <div className="relative z-10 h-full w-full bg-white border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <img src={images.collage2} alt="Expert Faculty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <div className="text-center">
                             <Zap className="mx-auto text-yellow-400 mb-2" size={32} />
                             <h4 className="text-white font-bold text-xl uppercase">Expert Faculty</h4>
                           </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Bottom Right (Events) */}
                    <div className="flex-1 relative group cursor-pointer h-64 md:h-auto">
                      <div className="absolute inset-0 bg-yellow-500 transform translate-x-0 translate-y-0 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
                      <div className="relative z-10 h-full w-full bg-white border-2 border-blue-950 overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <img src={images.collage3} alt="Student Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute top-4 right-4 bg-white text-blue-950 px-3 py-1 font-bold text-xs uppercase border border-blue-950 shadow-sm">
                            Events
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
              <div className="p-12 lg:p-24 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-blue-950 uppercase mb-6">Start Your Journey</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  We are accepting applications for the upcoming Fall semester. Contact us to schedule a campus tour or discuss requirements.
                </p>
                
                <div className="grid gap-6 mb-10">
                  <div className="flex items-start gap-4 p-6 bg-white border border-slate-200 hover:border-blue-500 transition-colors shadow-sm group">
                     <div className="bg-blue-100 p-3 rounded-full text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Phone size={24}/></div>
                     <div>
                        <h4 className="font-bold text-blue-950 text-lg">Call Admissions</h4>
                        <p className="text-slate-500 mt-1">+1 (703) 941-2020</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white border border-slate-200 hover:border-blue-500 transition-colors shadow-sm group">
                     <div className="bg-blue-100 p-3 rounded-full text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Mail size={24}/></div>
                     <div>
                        <h4 className="font-bold text-blue-950 text-lg">Email Us</h4>
                        <p className="text-slate-500 mt-1">admissions@wust.edu</p>
                     </div>
                  </div>
                </div>

                <button className="w-full bg-blue-950 text-white font-bold py-5 uppercase tracking-widest text-sm hover:bg-emerald-600 transition-colors shadow-xl">
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
  );
};

// --- Sub-Component: Course Accordion ---
const CourseAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    {
      title: "Foundations & Systems",
      icon: <Server className="w-6 h-6" />,
      courses: [
        { id: "CS 501", name: "Intro to Cybersecurity", desc: "Overview of threat landscapes, security models, and risk assessment." },
        { id: "IT 503", name: "Operating Systems", desc: "Process management, memory management, and OS security kernels." },
        { id: "IT 507", name: "Database Design", desc: "Relational DBs, SQL injection prevention, and data integrity." }
      ]
    },
    {
      title: "Security Architecture",
      icon: <Lock className="w-6 h-6" />,
      courses: [
        { id: "CS 532", name: "Secure Cloud Architecture", desc: "Designing resilient systems on AWS/Azure platforms." },
        { id: "CS 538", name: "Secure Software Dev", desc: "Integration of security into the SDLC (DevSecOps)." }
      ]
    },
    {
      title: "Governance & Ethics",
      icon: <Shield className="w-6 h-6" />,
      courses: [
        { id: "CS 544", name: "Cyberlaw & Ethics", desc: "Compliance (GDPR, HIPAA), computer fraud, and ethical hacking." },
        { id: "CS 516", name: "Security Policies", desc: "Developing and enforcing organizational security standards." }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      {categories.map((cat, idx) => (
        <div key={idx} className={`border transition-all duration-300 ${openIndex === idx ? 'border-blue-950 shadow-lg bg-white' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
          <button 
            onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 transition-colors ${openIndex === idx ? 'bg-blue-950 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {cat.icon}
              </div>
              <span className={`text-lg font-bold uppercase tracking-wide ${openIndex === idx ? 'text-blue-950' : 'text-slate-600'}`}>
                {cat.title}
              </span>
            </div>
            {openIndex === idx ? <ChevronUp className="text-blue-950"/> : <ChevronDown className="text-slate-400"/>}
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {cat.courses.map((course, cIdx) => (
                  <div key={cIdx} className="bg-white p-5 border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-black text-slate-200 text-xs uppercase tracking-widest">{course.id}</span>
                    </div>
                    <h4 className="font-bold text-blue-950 mb-2">{course.name}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{course.desc}</p>
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

export default WustWholeComponent;