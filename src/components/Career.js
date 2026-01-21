
import { ArrowRight } from 'lucide-react';

export default function CareerInfoSection() {
  return (
    <section
      className="bg-white py-16 px-4 md:px-8"
      style={{ fontFamily: "'Trebuchet MS', Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <header>
            <span className="text font-bold tracking-widest uppercase text-sm">
              WUST Education
            </span>
            <h2 className="text text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 leading-tight">
              Unlock Your <span className="relative inline-block">Potential</span>
              <br />
              With A WUST Education
            </h2>
          </header>

          <div className="space-y-4 text-slate-600 text-lg leading-relaxed max-w-xl">
            <p>
              At WUST, we believe in providing pathways to success. Our programs are designed
              to equip you with the skills needed to thrive in a diverse global landscape.
            </p>
            <p>
              Explore our cutting-edge career paths and find endless job opportunities that
              align with your professional goals.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary font-semibold hover:underline mt-4 italic"
            >
              *WUST 2024 Annual Report
            </a>
          </div>
        </div>

        {/* Right Side: Cards */}
        <div className="flex flex-col gap-6">

          {/* Card 1 */}
          <div className="relative group overflow-hidden h-64 shadow-lg focus-within:ring-2 focus-within:ring-white">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              alt="Career Paths"
              className="
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
                group-active:scale-105
                group-focus-within:scale-105
              "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-4">
                Explore Diverse Career Paths
              </h3>
              <button className="inline-flex items-center gap-2 px-6 py-2 border-2 border-white text-white font-semibold hover:bg-white hover:!text-black transition">
                Learn More <ArrowRight size={18} /> 
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden h-64 shadow-lg focus-within:ring-2 focus-within:ring-white">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
              alt="Job Opportunities"
              className="
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
                group-active:scale-105
                group-focus-within:scale-105
              "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-4">
                Discover Global Job Opportunities
              </h3>
              <button className="inline-flex items-center gap-2 px-6 py-2 border-2 border-white text-white font-semibold hover:bg-white hover:!text-black transition">
                Search Now <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
