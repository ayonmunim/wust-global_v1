import { GraduationCap, BookOpen, Layers, CheckCircle } from "lucide-react";

const GraduateProgramSection = () => {
  // WGU-style specific colors
  const styles = {
    fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
    nightOwlBlue: "#003366", // Classic academic navy
    goldAccent: "#D4A017",   // Academic gold/yellow
  };

  return (
    <div 
      className="container-fluid p-0" 
      style={{ fontFamily: styles.fontFamily }}
    >
      <div className="row g-0">
        
        {/* COLUMN 1: INTRO (BLUE) */}
        <div 
          className="col-lg-4 text-white p-5 d-flex flex-column justify-content-center"
          style={{ backgroundColor: styles.nightOwlBlue }}
        >
          <div className="fade-in-left">
            <h6 className="text-uppercase fw-bold opacity-50 mb-3" style={{ letterSpacing: '2px' }}>
              Graduate School
            </h6>

            <h2 className="fw-bold mb-4 display-6">
              Designed for Contemporary Organizations
            </h2>

            <div className="d-flex align-items-start mb-4">
              <GraduationCap className="me-3 mt-1 flex-shrink-0" style={{ color: styles.goldAccent }} />
              <p className="mb-0 lh-base opacity-90">
                The graduate degree program includes multidisciplinary theories
                and competency-building applications required across industries
                and cultures.
              </p>
            </div>

            <div className="d-flex align-items-start mb-4">
              <BookOpen className="me-3 mt-1 flex-shrink-0" style={{ color: styles.goldAccent }} />
              <p className="mb-0 lh-base opacity-90">
                Students develop managerial, political, financial, social, and
                organizational skills through applied learning.
              </p>
            </div>
            
            <div className="d-flex align-items-start">
              <Layers className="me-3 mt-1 flex-shrink-0" style={{ color: styles.goldAccent }} />
              <p className="mb-0 lh-base opacity-90">
                Elective tracks allow students to gain specialized knowledge and
                engage in leading-edge community-of-practice techniques.
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 2: REQUIREMENTS (WHITE) */}
        <div className="col-lg-4 bg-white p-5 d-flex flex-column justify-content-center border-end border-light">
          <div className="w-100">
            <h4 
              className="fw-bold mb-4 pb-3 border-bottom" 
              style={{ color: styles.nightOwlBlue }}
            >
              Master’s Degree Requirements
            </h4>

            <ul className="list-unstyled mb-4">
              {[
                "Completed all required courses in the approved curriculum",
                "Successfully completed a minimum of 54 credits",
                "Achieved a minimum CGPA of 3.0",
                "Satisfied all financial and pending obligations",
                "Applied and academically cleared for graduation",
              ].map((item, index) => (
                <li key={index} className="d-flex align-items-start mb-3">
                  <CheckCircle className="me-3 mt-1 flex-shrink-0" size={18} style={{ color: styles.nightOwlBlue }} />
                  <span className="text-secondary fw-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-light p-3 small text-muted fst-italic">
              <p className="mb-1">• Quarter credit hours are indicated in parentheses ( )</p>
              <p className="mb-1">• PR stands for Prerequisite; Advisor approval required</p>
              <p className="mb-0">• Unless specified otherwise, quarter credit hours apply</p>
            </div>
          </div>
        </div>

        {/* COLUMN 3: VISUALS (IMAGES UP AND DOWN) */}
        
        <div className="col-lg-4 d-flex flex-column">
            {/* Top Image */}
            <div className="flex-grow-1 overflow-hidden position-relative" style={{ minHeight: '300px' }}>
                <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Students collaborating"
                    className="w-100 h-100 object-fit-cover"
                    style={{ 
                        transition: 'transform 0.5s ease',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="position-absolute bottom-0 start-0 bg-white p-3 m-0" style={{ maxWidth: '80%' }}>
                    <p className="mb-0 fw-bold text-uppercase small" style={{ color: styles.nightOwlBlue }}>Collaborative Learning</p>
                </div>
            </div>

            {/* Bottom Image */}
            
            <div className="flex-grow-1 overflow-hidden position-relative" style={{ minHeight: '300px' }}>
                <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
                    alt="Strategic Planning"
                    className="w-100 h-100 object-fit-cover"
                    style={{ 
                        transition: 'transform 0.5s ease',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                 <div className="position-absolute top-0 end-0 bg-white p-3 m-0 text-end" style={{ maxWidth: '80%' }}>
                    <p className="mb-0 fw-bold text-uppercase small" style={{ color: styles.nightOwlBlue }}>Strategic Application</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default GraduateProgramSection;