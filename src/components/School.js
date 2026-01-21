import React, { useState } from 'react';

const ProgramCard = ({ program }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div style={styles.cardHeader}>
        <div style={styles.categoryBadge}>
          {/* Black Icon */}
          <span style={styles.icon}>●</span>
          <span style={styles.categoryText}>{program.category}</span>
        </div>
      </div>

      {/* Interactive Navy Blue Line */}
      <div style={{
        ...styles.interactiveLine,
        width: isHovered ? '100%' : '40px' 
      }}></div>

      {/* Program Title */}
      <h2 style={styles.title}>{program.title}</h2>

      {/* View Degree Link */}
      <a href="#" style={styles.link}>VIEW DEGREE</a>
      
      {/* Short Description */}
      <p style={styles.description}>{program.description}</p>

      {/* Key Info (Top 2 items) */}
      {program.keyInfo && program.keyInfo.length > 0 && (
        <div style={styles.keyInfo}>
          <ul style={styles.infoList}>
            {program.keyInfo.slice(0, 2).map((info, idx) => (
              <li key={idx} style={styles.infoItem}>
                <span style={styles.infoIconInline}>🎓</span> <strong>{info.label}:</strong> {info.value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Expanded Details */}
      {isExpanded && (
        <div style={styles.expandedDetails}>
          
          {/* Skills */}
          {program.skills && program.skills.length > 0 && (
            <div style={styles.detailSection}>
              <div style={styles.detailIconSection}>
                <span style={styles.detailIcon}>💡</span>
                <h3 style={styles.detailHeading}>Skills You Will Learn</h3>
              </div>
              <ul style={styles.skillsList}>
                {program.skills.map((skill, idx) => (
                  <li key={idx} style={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Remaining Key Info */}
          {program.keyInfo && program.keyInfo.length > 2 && (
             <div style={styles.detailSection}>
                <div style={styles.detailIconSection}>
                  <span style={styles.detailIcon}>ℹ️</span>
                  <h3 style={styles.detailHeading}>Additional Info</h3>
                </div>
                <ul style={styles.infoList}>
                  {program.keyInfo.slice(2).map((info, idx) => (
                    <li key={idx} style={styles.infoItem}>
                      <strong>{info.label}:</strong> {info.value}
                    </li>
                  ))}
                </ul>
             </div>
          )}

          {/* Core Courses */}
          {program.courses && program.courses.length > 0 && (
            <div style={styles.detailSection}>
              <div style={styles.detailIconSection}>
                <span style={styles.detailIcon}>📚</span>
                <h3 style={styles.detailHeading}>Core Courses</h3>
              </div>
              <div style={styles.coursesGrid}>
                {program.courses.map((course, idx) => (
                  <div key={idx} style={styles.courseItem}>
                    <strong style={styles.courseCode}>{course.code}</strong> – {course.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concentration Tracks */}
          {program.concentrations && program.concentrations.length > 0 && (
            <div style={styles.detailSection}>
              <div style={styles.detailIconSection}>
                <span style={styles.detailIcon}>🎯</span>
                <h3 style={styles.detailHeading}>Concentration Tracks</h3>
              </div>
              <p style={styles.detailIntro}>Students select one concentration area:</p>
              {program.concentrations.map((conc, idx) => (
                <div key={idx} style={styles.concentrationBlock}>
                  <h4 style={styles.concentrationTitle}>{conc.name}</h4>
                  <div style={styles.coursesGrid}>
                    {conc.courses.map((course, cidx) => (
                      <div key={cidx} style={styles.courseItem}>
                        <strong style={styles.courseCode}>{course.code}</strong> – {course.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Learning Outcomes */}
          {program.outcomes && program.outcomes.length > 0 && (
            <div style={styles.detailSection}>
              <div style={styles.detailIconSection}>
                <span style={styles.detailIcon}>✓</span>
                <h3 style={styles.detailHeading}>Learning Outcomes</h3>
              </div>
              <ul style={styles.outcomesList}>
                {program.outcomes.map((outcome, idx) => (
                  <li key={idx} style={styles.outcomeItem}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Career Pathways */}
          {program.careers && program.careers.length > 0 && (
            <div style={styles.detailSection}>
              <div style={styles.detailIconSection}>
                <span style={styles.detailIcon}>💼</span>
                <h3 style={styles.detailHeading}>Career Pathways</h3>
              </div>
              <div style={styles.careerGrid}>
                {program.careers.map((career, idx) => (
                  <div key={idx} style={styles.careerItem}>{career}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div style={styles.actions}>
        <button 
          style={styles.detailsBtn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'LESS DETAILS' : 'MORE DETAILS'}
          <span style={styles.arrow}>{isExpanded ? '▲' : '▼'}</span>
        </button>
        <button style={styles.applyBtn}>APPLY NOW</button>
      </div>
    </div>
  );
};

const ProgramCardsView = () => {
  const programs = {
    graduate: [
      {
        category: 'CYBERSECURITY',
        title: 'Master of Science in Cybersecurity – M.S.',
        description: "Flagship program designed to meet global workforce demand in public and private sectors.",
        keyInfo: [
          { label: 'Duration', value: '18 months' },
          { label: 'Credits', value: '54 quarter credits' },
          { label: 'Structure', value: 'Core technical courses + Capstone Project' }
        ],
        skills: [
          'Risk identification, analysis, and mitigation',
          'Securing systems, networks, and data',
          'Security policies, standards, and governance',
          'Secure software and cloud architectures',
          'Cyberlaw, ethics, and compliance'
        ],
        courses: [
          { code: 'CS 501', name: 'Introduction to Cybersecurity' },
          { code: 'CS 516', name: 'Security Policy & Standards' },
          { code: 'CS 532', name: 'Secure Cloud Architecture' },
          { code: 'CS 544', name: 'Cyberlaws & Ethical Hacking' },
          { code: 'CS 681', name: 'Cybersecurity Capstone' }
        ],
        outcomes: [
          'Identify and analyze threats to modern information systems',
          'Apply cybersecurity tools, standards, and procedures',
          'Design and manage organizational security strategies'
        ],
        careers: [
          'Information Security Specialist',
          'Network & Systems Administrator',
          'Computer Systems Analyst'
        ]
      },
      {
        category: 'INFORMATION TECHNOLOGY',
        title: 'Master of Science in Information Technology – M.S.',
        description: 'Prepares professionals to design, manage, and lead IT systems and teams in global organizations.',
        keyInfo: [
          { label: 'Duration', value: '18 months' },
          { label: 'Credits', value: '54 quarter credits' },
          { label: 'Structure', value: 'Core + Concentration + Capstone' }
        ],
        skills: [
          'IT leadership and management',
          'Analytical and problem-solving skills',
          'Communication and team management',
          'Ethical and professional IT practice'
        ],
        courses: [
          { code: 'IT 501', name: 'Management of Information Technology' },
          { code: 'IT 505', name: 'Network Systems Design & Management' },
          { code: 'IT 511', name: 'IT Team Management' }
        ],
        concentrations: [
          {
            name: 'IT Systems & Management (ITSM)',
            courses: [
              { code: 'ITSM 603', name: 'Network & Information Security' },
              { code: 'ITSM 605', name: 'Mobile & Cloud Computing' }
            ]
          },
          {
            name: 'Data Management & Analytics (DMA)',
            courses: [
              { code: 'DMA 605', name: 'Data Management' },
              { code: 'DMA 609', name: 'Advanced Business Analytics' }
            ]
          },
          {
             name: 'Software Design & Management (SDM)',
             courses: [
               { code: 'SDM 601', name: 'Managing Software Development' },
               { code: 'SDM 605', name: 'Architectures for Software Systems' }
             ]
           }
        ],
        careers: [
            'IT Manager', 'Systems Architect', 'Database Administrator'
        ]
      },
      {
        category: 'DATA SCIENCE & AI',
        title: 'M.S. in Applied Data Science and AI',
        description: 'Combines theoretical foundations with hands-on learning in AI, machine learning, and big data.',
        keyInfo: [
          { label: 'Duration', value: '18 months' },
          { label: 'Credits', value: '54 quarter credits' }
        ],
        skills: [
          'Data Science & Advanced Analytics',
          'Artificial Intelligence & Machine Learning',
          'Advanced Python, SQL & NoSQL',
          'Big Data platforms & Cloud systems'
        ],
        careers: [
          'Data Scientist',
          'Machine Learning Engineer',
          'AI-driven Data Engineer'
        ]
      },
      {
        category: 'SOFTWARE ENGINEERING',
        title: 'M.S. in Applied Software Engineering',
        description: 'Emphasizes real-world application of the full software development lifecycle and secure systems.',
        keyInfo: [
          { label: 'Duration', value: '18 months' },
          { label: 'Credits', value: '54 quarter credits' }
        ],
        skills: [
          'Enterprise Java & OOP',
          'Full-Stack (React, TS)',
          'Cloud Computing & DevOps',
          'Secure Software Testing'
        ]
      }
    ],
    undergraduate: [
      {
        category: 'INFORMATION TECHNOLOGY',
        title: 'Bachelor of Science in Information Technology – B.S.',
        description: 'Delivers practical, job-ready IT skills aligned with current industry needs.',
        keyInfo: [
          { label: 'Duration', value: '4 years' },
          { label: 'Credits', value: '180 quarter credits' },
          { label: 'Placement', value: '~90% Employment Rate' }
        ],
        skills: [
            'Business Communication',
            'Project Management',
            'Systems Analysis & Design',
            'Database Management'
        ],
        concentrations: [
          {
            name: 'Cybersecurity',
            courses: [{ code: 'SC 494', name: 'Applied Cybersecurity' }]
          },
          {
            name: 'Enterprise Information Management',
            courses: [{ code: 'EIM 492', name: 'Enterprise Systems' }]
          },
          {
            name: 'Software Engineering',
            courses: [{ code: 'SE 493', name: 'Software Engineering' }]
          }
        ]
      }
    ]
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Graduate & Bachelor's Degrees</h1>
      
      {/* Graduate Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Graduate Programs</h2>
        <div style={styles.grid}>
          {programs.graduate.map((program, idx) => (
            <ProgramCard key={`grad-${idx}`} program={program} />
          ))}
        </div>
      </div>

      {/* Undergraduate Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Undergraduate Programs</h2>
        <div style={styles.grid}>
          {programs.undergraduate.map((program, idx) => (
            <ProgramCard key={`undergrad-${idx}`} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f5f5f5',
    padding: '40px 20px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  pageTitle: {
    fontSize: '36px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#1a1a1a',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  section: {
    maxWidth: '1400px',
    margin: '0 auto 60px auto'
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#003366', 
    marginBottom: '24px',
    paddingBottom: '12px',
    borderBottom: '2px solid #e0e0e0',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    // THIS IS THE FIX: Prevents empty neighbors from stretching when one expands
    alignItems: 'flex-start' 
  },
  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '0', 
    transition: 'all 0.3s ease',
    border: '1px solid #eee',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  categoryBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  icon: {
    fontSize: '14px',
    color: 'black' // Black Icon
  },
  categoryText: {
    fontWeight: '700',
    fontSize: '13px',
    letterSpacing: '1px',
    color: '#666',
    textTransform: 'uppercase',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  interactiveLine: {
    height: '3px',
    background: '#003366', 
    marginBottom: '20px',
    transition: 'width 0.4s ease-in-out',
    borderRadius: '2px'
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '16px',
    lineHeight: '1.3',
    minHeight: '64px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  link: {
    display: 'inline-block',
    color: '#003366',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  description: {
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontSize: '16px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  keyInfo: {
    marginBottom: '10px',
    paddingTop: '15px',
    borderTop: '1px solid #f0f0f0'
  },
  infoList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  infoItem: {
    color: '#333',
    marginBottom: '8px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  infoIconInline: {
    fontSize: '14px',
    filter: 'grayscale(100%) brightness(0)' // Black Emoji
  },
  expandedDetails: {
    borderTop: '1px solid #e0e0e0',
    paddingTop: '24px',
    marginTop: '10px',
    animation: 'fadeIn 0.5s ease'
  },
  detailSection: {
    marginBottom: '24px'
  },
  detailIconSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px'
  },
  detailIcon: {
    fontSize: '18px',
    filter: 'grayscale(100%) brightness(0)' // Black Emoji
  },
  detailHeading: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#003366',
    margin: 0,
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  skillsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  skillItem: {
    color: '#333',
    marginBottom: '6px',
    fontSize: '14px',
    lineHeight: '1.5',
    paddingLeft: '15px',
    position: 'relative',
    fontFamily: '"Trebuchet MS", Arial, sans-serif',
    borderLeft: '2px solid black', // Black Border
    paddingLeft: '10px'
  },
  detailIntro: {
    color: '#555',
    marginBottom: '12px',
    fontSize: '14px',
    fontStyle: 'italic',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  coursesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  courseItem: {
    padding: '10px',
    background: '#f4f7f9',
    color: '#333',
    fontSize: '13px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif',
    borderLeft: '3px solid black' // Black Border
  },
  courseCode: {
    color: '#000', // Black Text
    fontWeight: '700'
  },
  concentrationBlock: {
    marginBottom: '20px',
    paddingLeft: '10px',
    borderLeft: '1px solid #eee'
  },
  concentrationTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '8px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  outcomesList: {
    listStyle: 'disc',
    paddingLeft: '20px',
    margin: 0,
    color: 'black'
  },
  outcomeItem: {
    marginBottom: '8px',
    color: '#333',
    fontSize: '14px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  careerGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  careerItem: {
    padding: '8px 12px',
    background: '#003366',
    color: 'white',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '0px', 
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    marginTop: 'auto', 
    paddingTop: '20px'
  },
  detailsBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'transparent',
    border: '2px solid #003366',
    padding: '10px 20px',
    fontWeight: '700',
    fontSize: '13px',
    color: '#003366',
    cursor: 'pointer',
    fontFamily: '"Trebuchet MS", Arial, sans-serif',
    transition: 'background 0.2s',
    borderRadius: '0px'
  },
  arrow: {
    fontSize: '10px',
  },
  applyBtn: {
    background: '#003366', 
    color: '#fff', 
    border: 'none',
    padding: '12px 28px',
    fontWeight: '800',
    fontSize: '13px',
    cursor: 'pointer',
    letterSpacing: '0.5px',
    fontFamily: '"Trebuchet MS", Arial, sans-serif',
    textTransform: 'uppercase',
    borderRadius: '0px'
  }
};

export default ProgramCardsView;