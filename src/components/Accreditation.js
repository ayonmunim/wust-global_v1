import React from 'react';


const Accreditation = () => {
  const partners = [
    { logo: "SecurityLogo.png", link: "https://www.dhs.gov/" },
    { logo: "AccscLogo.jpeg", link: "https://www.accsc.org/" },
    { logo: "EduLogo.png", link: "https://www.https://www.ed.gov/.com/" },
    { logo: "CheaLogo.webp", link: "https://www.chea.org/" },
    { logo: "SchevLogo.png", link: "https://www.schev.edu/" },
    { logo: "GiBillLogo.png", link: "https://www.benefits.va.gov/gibill/" },
    { logo: "BridgeLogo.jpg", link: "https://j1visa.state.gov/" },
    { logo: "SaraLogo.png", link: "https://nc-sara.org/" },
    { logo: "SacmLogo.png", link: "https://www.sacm.org/" },
    { logo: "MilitaryLogo.webp", link: "https://www.militaryfriendly.com/" },
  ];

  return (
    <section className="w-full py-16 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Text */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#003366] mb-6">
          Certified to operate by SCHEV. Accredited by ACCSC.
        </h2>
        
        <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto mb-12 leading-relaxed">
          This institution is approved to offer GI Bill® educational benefits by the Virginia State Approving Agency. 
          “GI Bill® is a registered trademark of the U.S Department of Veterans Affairs (VA). 
          More information about education benefits offered by VA is available at the official U.S. government website at 
          <a 
            href="https://www.benefits.va.gov/gibill/" 
            className="text-blue-600 font-medium hover:underline ml-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            https://www.benefits.va.gov/gibill/
          </a>
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-items-center">
          {partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110 flex items-center justify-center w-full max-w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 md:max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditation;