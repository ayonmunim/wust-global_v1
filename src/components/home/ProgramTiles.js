import Link from "next/link";
import Container from "@/components/layout/Container";
import { HOME } from "@/config/home";
import { GraduationCap, BookOpen, UserCheck, ArrowRight } from "lucide-react";

export default function ProgramTiles() {
  const tiles = HOME.tiles ?? [];

  // Theme constants matching our previous component
  const theme = {
    wguNavy: "#001B33",
    wguActionBlue: "#005EB8",
    fontFamily: '"Trebuchet MS", "Lucida Sans", Arial, sans-serif'
  };

  // Helper to pick an icon based on index or title
  const getIcon = (index) => {
    if (index === 0) return <GraduationCap size={18} className="text-blue-800" />;
    if (index === 1) return <BookOpen size={18} className="text-blue-800" />;
    return <UserCheck size={18} className="text-blue-800" />;
  };

  return (
    <div className="relative -mt-24 pb-12 z-20" style={{ fontFamily: theme.fontFamily }}>
      <Container>
        <div className="flex justify-center">
          <div
            className="grid gap-6 w-full max-w-7xl"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            }}
          >
            {tiles.map((t, idx) => (
              <div
                key={t.title}
                className="group bg-white p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                style={{ borderRadius: '0px' }} // Sharp corners
              >
                <div>
                  {/* Title Section */}
                  <h3 className="text-blue-950 font-bold uppercase tracking-widest text-sm mb-3">
                    {t.title}
                  </h3>
                  
                  {/* WGU Signature Blue Line */}
                  <div className="w-12 h-0.5 mb-6" style={{ backgroundColor: theme.wguActionBlue }}></div>

                  {/* Program Items */}
                  <div className="space-y-4">
                    {(t.items ?? []).map((item, itemIdx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-4 group/item py-1"
                      >
                        <div className="shrink-0 transition-transform group-hover/item:scale-110">
                          {getIcon(itemIdx)}
                        </div>
                        <span className="text-gray-800 text-xs font-semibold leading-tight border-b border-transparent group-hover/item:border-blue-800 transition-all">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <Link
                  href={t.href}
                  className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between group-hover:text-blue-700 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Explore Details
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}