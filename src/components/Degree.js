import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

import { 
  Shield, 
  Lock, 
  Server, 
  Globe, 
  FileText, 
  CheckCircle, 
  Briefcase, 
  ChevronDown, 
  ChevronUp,
  Phone,
  Mail,
  Clock,
  Award,
} from 'lucide-react';

const Degree = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef({});

  const navigationItems = [
    { id: 'overview', label: 'Program Overview' },
    { id: 'focus', label: 'Program Focus' },
    { id: 'curriculum', label: 'Curriculum & Courses' },
    { id: 'outcomes', label: 'Learning & Career' },
    { id: 'benefits', label: 'Why Wust?' },
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
      const offsetTop = section.offsetTop - 80; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

    const styles = {
    fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
    nightOwlBlue: '#003366',
    goldAccent: '#D4A017'
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}>
      
      {/* --- Mobile/Tablet Navigation (Horizontal Sticky) --- */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="overflow-x-auto no-scrollbar">
          <nav className="flex min-w-max">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-4 whitespace-nowrap font-medium transition-colors border-b-2 rounded-none ${
                  activeSection === item.id
                    ? 'border-blue-950 text-blue-950 bg-gray-100'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* --- Main Layout --- */}
      <div className="flex w-full max-w-[1400px] mx-auto border-x border-gray-200">
        
        {/* --- Desktop Sidebar (Aligned & Styled) --- */}
        <aside className="hidden lg:flex flex-col w-72 flex-shrink-0 bg-gray-50 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto scrollbar-thin">
          
          {/* Header Section */}
          <div className="px-6 pt-10 pb-8">
            <h2 className="text-2xl font-bold text-blue-950 uppercase leading-none tracking-tight mb-2">
              Cybersecurity
            </h2>
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
              Master of Science
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1 mb-8">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    // Logic: 
                    // Active: Left Border 4px + Padding Left 20px = 24px indent
                    // Inactive: Padding Left 24px = 24px indent
                    // This keeps text perfectly aligned
                    className={`w-full text-left py-4 pr-6 transition-all duration-200 rounded-none text-sm md:text-base ${
                      activeSection === item.id
                        ? 'bg-white text-blue-950 border-l-4 border-blue-950 font-bold shadow-sm pl-5'
                        : 'text-gray-600 hover:text-blue-950 hover:bg-gray-100 border-l-4 border-transparent pl-6'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / Admissions Box (Full Width in Sidebar) */}
          <div className="p-6 mt-auto">
            <div className="bg-blue-950 text-white p-6 shadow-xl w-full">
              <p className="text-xs font-bold mb-1 text-blue-200 uppercase tracking-wider opacity-80">
                Admissions Office
              </p>
              <p className="text-xl font-bold mb-6 tracking-wide">
                +1 (703) 941-2020
              </p>
              <button className="w-full bg-white text-blue-950 font-bold py-3 px-4 hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider">
                Apply Now
              </button>
            </div>
          </div>
        </aside>

        {/* --- Main Content --- */}
        <main className="flex-1 min-w-0 bg-white">
          
          {/* 1. Overview Section */}
          <section ref={(el) => (sectionsRef.current['overview'] = el)} className="border-b border-gray-200">
            {/* Hero Banner Style */}
            <div className="bg-blue-950 text-white p-12 lg:p-20 rounded-none">
              <div className="inline-block border border-blue-400 px-3 py-1 text-xs font-semibold mb-6 uppercase tracking-widest text-blue-200">
                WUST Graduate School
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-none tracking-tight">
                Master of Science in Cybersecurity
              </h1>
              <p className="text-xl lg:text-2xl mb-10 text-gray-300 font-light max-w-3xl leading-relaxed">
                WUST’s flagship graduate program designed to meet strong domestic and global workforce demand in both public and private sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-950 font-bold py-4 px-10 rounded-none hover:bg-gray-100 transition-colors uppercase tracking-wider text-sm">
                  Start Application
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-none hover:bg-white hover:text-blue-950 transition-colors uppercase tracking-wider text-sm">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
              <div className="p-8 border-r border-gray-200 text-center">
                 <Clock className="w-8 h-8 mx-auto text-blue-950 mb-2" />
                 <p className="text-sm text-gray-500 uppercase">Duration</p>
                 <p className="text-xl font-bold text-blue-950">18 Months</p>
              </div>
              <div className="p-8 border-r border-gray-200 text-center">
                 <Award className="w-8 h-8 mx-auto text-blue-950 mb-2" />
                 <p className="text-sm text-gray-500 uppercase">Credits</p>
                 <p className="text-xl font-bold text-blue-950">54 Quarter Credits</p>
              </div>
              <div className="p-8 border-r border-gray-200 text-center">
                 <Server className="w-8 h-8 mx-auto text-blue-950 mb-2" />
                 <p className="text-sm text-gray-500 uppercase">Format</p>
                 <p className="text-xl font-bold text-blue-950">Hybrid / Online</p>
              </div>
              <div className="p-8 text-center">
                 <Globe className="w-8 h-8 mx-auto text-blue-950 mb-2" />
                 <p className="text-sm text-gray-500 uppercase">Focus</p>
                 <p className="text-xl font-bold text-blue-950">Global Demand</p>
              </div>
            </div>
          </section>

          {/* 2. Program Focus */}
          <section ref={(el) => (sectionsRef.current['focus'] = el)} className="p-12 lg:p-20 border-b border-gray-200 scroll-mt-20">
            <div className="flex items-center space-x-4 mb-10">
              <div className="h-1 w-12 bg-blue-950"></div>
              <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Program Focus</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
              {[
                { title: "Risk Management", desc: "Risk identification, analysis, and mitigation strategies." },
                { title: "System Security", desc: "Securing systems, networks, and data infrastructure." },
                { title: "Governance", desc: "Security policies, standards, and organizational governance." },
                { title: "Secure Architecture", desc: "Building secure software and cloud architectures." },
                { title: "Cyberlaw & Ethics", desc: "Understanding compliance, cyberlaw, and ethical hacking." },
                { title: "Global Defense", desc: "Protecting public and private sectors from domestic and global threats." }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 border-r border-b border-gray-200 hover:bg-blue-50 transition-colors">
                  <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Curriculum Section */}
          <section ref={(el) => (sectionsRef.current['curriculum'] = el)} className="bg-gray-50 p-12 lg:p-20 border-b border-gray-200 scroll-mt-20">
            <div className="mb-12 text-center max-w-3xl mx-auto">
               <h2 className="text-4xl font-bold text-blue-950 mb-4 uppercase tracking-tight">Curriculum & Courses</h2>
               <p className="text-gray-600">The program structure includes Core technical courses plus a Capstone Project. Click on a focus area to see the detailed course list.</p>
            </div>

            <CourseGrid />
          </section>

          {/* 4. Outcomes & Careers */}
          <section ref={(el) => (sectionsRef.current['outcomes'] = el)} className="grid lg:grid-cols-2 scroll-mt-20 border-b border-gray-200">
             {/* Outcomes */}
             <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-blue-950 text-white rounded-none">
                    <CheckCircle size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 uppercase">Learning Outcomes</h2>
                </div>
                <ul className="space-y-6">
                  {[
                    "Identify and analyze threats to modern information systems",
                    "Apply cybersecurity tools, standards, and procedures",
                    "Secure wired and wireless network architecture",
                    "Design and managing organizational security strategies",
                    "Evaluate and recommend security technologies",
                    "Communicate technical security concepts effectively"
                  ].map((outcome, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-6 w-6 flex items-center justify-center border border-blue-950 text-blue-950 font-bold mr-4 text-xs mt-1 shrink-0 rounded-none">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 font-medium">{outcome}</p>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Careers */}
             <div ref={(el) => (sectionsRef.current['careers'] = el)} className="p-12 lg:p-20 bg-blue-950 text-white scroll-mt-20">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-white text-blue-950 rounded-none">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white uppercase">Career Pathways</h2>
                </div>
                <p className="text-blue-200 mb-8 text-lg">Graduates are prepared for mid-level cybersecurity roles in high-demand sectors:</p>
                
                <div className="grid gap-4">
                  {[
                    "Information Security Specialist",
                    "Network & Systems Administrator",
                    "Computer Systems Analyst",
                    "Network Support Specialist"
                  ].map((job, i) => (
                    <div key={i} className="flex items-center p-4 bg-blue-900 border-l-4 border-blue-400 hover:bg-blue-800 transition-colors">
                      <span className="text-lg font-bold tracking-wide">{job}</span>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          <section ref={(el) => (sectionsRef.current['benefits'] = el)} className="p-8 lg:p-12 border-t border-gray-200">
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 mr-4" style={{ backgroundColor: styles.nightOwlBlue }}></div>
              <h2 className="text-3xl font-bold uppercase tracking-tight" style={{ color: styles.nightOwlBlue }}>
                Why Choose WUST?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <TrendingUp size={24} />, title: 'Experienced Faculty', desc: 'All faculty have extensive practical business experience' },
                { icon: <BookOpen size={24} />, title: 'Harvard Business Cases', desc: 'Education designed around solving real Harvard cases' },
                { icon: <GraduationCap size={24} />, title: 'Business Capstone', desc: 'Present solutions to DMV area business professionals' },
                { icon: <CheckCircle size={24} />, title: 'Career-Focused', desc: 'Concentrations tailored to current job market skills' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-3 mr-4" style={{ backgroundColor: styles.nightOwlBlue, color: 'white' }}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: styles.nightOwlBlue }}>{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* 5. Admissions / FAQ */}
          <section ref={(el) => (sectionsRef.current['admissions'] = el)} className="p-12 lg:p-20 scroll-mt-20">
             <div className="bg-gray-100 border border-gray-200 p-12 text-center rounded-none">
                <h2 className="text-3xl font-bold text-blue-950 mb-6 uppercase">Ready to Secure the Future?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our admissions team is here to help you navigate the application process. Contact us to learn more about the MSCS program.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left mb-10">
                  <div className="bg-white p-6 border border-gray-200">
                    <Phone className="w-6 h-6 text-blue-950 mb-3" />
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+1 (703) 941-2020</p>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <Mail className="w-6 h-6 text-blue-950 mb-3" />
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">wust@wust.edu</p>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <Globe className="w-6 h-6 text-blue-950 mb-3" />
                    <h4 className="font-bold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">Alexandria, VA</p>
                  </div>
                </div>

                <button className="bg-blue-950 text-white font-bold py-4 px-12 rounded-none hover:bg-blue-900 transition-colors uppercase tracking-widest text-sm shadow-xl">
                  Contact Admissions
                </button>
             </div>
          </section>

        </main>
      </div>
    </div>
  );
};

// --- Sub-Component for the Course Grid ---
const CourseGrid = () => {
  const courseCategories = [
    {
      id: 1,
      title: "Foundations & Systems",
      icon: <Server className="w-10 h-10 text-blue-400" />,
      description: "Core operating systems and networking fundamentals.",
      courses: [
        { code: "CS 501", title: "Introduction to Cybersecurity" },
        { code: "IT 503", title: "Operating Systems" },
        { code: "IT 507", title: "Database System Design & Management" }
      ]
    },
    {
      id: 2,
      title: "Security Architecture",
      icon: <Lock className="w-10 h-10 text-blue-400" />,
      description: "Designing secure cloud and software environments.",
      courses: [
        { code: "CS 532", title: "Secure Cloud Architecture" },
        { code: "CS 538", title: "Secure Software Development" },
        { code: "ITSM 603", title: "Network & Information Security" }
      ]
    },
    {
      id: 3,
      title: "Risk & Policy",
      icon: <FileText className="w-10 h-10 text-blue-400" />,
      description: "Governance, compliance, and risk management strategies.",
      courses: [
        { code: "CS 516", title: "Security Policy & Standards" },
        { code: "CS 536", title: "Information Security & Risk Management" },
        { code: "CS 544", title: "Cyberlaws & Ethical Hacking" }
      ]
    },
    {
      id: 4,
      title: "Assessment & Capstone",
      icon: <Shield className="w-10 h-10 text-blue-400" />,
      description: "Testing systems and final capstone project application.",
      courses: [
        { code: "CS 540", title: "Security Assessment & Testing" },
        { code: "CS 681", title: "Cybersecurity Capstone" }
      ]
    }
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {courseCategories.map((category) => (
        <div 
          key={category.id} 
          className={`bg-white border transition-all duration-300 rounded-none overflow-hidden ${
            expandedId === category.id 
              ? 'border-blue-950 shadow-2xl ring-1 ring-blue-950 col-span-1 md:col-span-2' 
              : 'border-gray-200 hover:border-blue-300 shadow-sm'
          }`}
        >
          <div className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-blue-950 p-4 rounded-none">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 uppercase tracking-wide">{category.title}</h3>
                <p className="text-gray-500 mt-1">{category.description}</p>
              </div>
            </div>
            
            <button 
              onClick={() => toggleExpand(category.id)}
              className={`flex items-center gap-2 px-6 py-3 font-bold text-sm tracking-wider uppercase transition-colors rounded-none border-2 ${
                expandedId === category.id
                  ? 'bg-blue-950 text-white border-blue-950'
                  : 'bg-transparent text-blue-950 border-blue-950 hover:bg-blue-50'
              }`}
            >
              {expandedId === category.id ? 'Close Courses' : 'View All Courses'}
              {expandedId === category.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          <div 
            className={`transition-all duration-500 ease-in-out bg-gray-50 ${
              expandedId === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="p-8 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Included Courses</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {category.courses.map((course, idx) => (
                  <div key={idx} className="flex items-center bg-white p-4 border-l-4 border-blue-500 shadow-sm">
                    <span className="font-bold text-blue-950 w-24 shrink-0">{course.code}</span>
                    <span className="text-gray-700 font-medium">{course.title}</span>
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

export default Degree;
