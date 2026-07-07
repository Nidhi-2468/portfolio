import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Briefcase, Users, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'industry' | 'leadership';
  logo: string;
  details: string[];
  technologies?: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'exp-cgi',
    role: 'Data Analysis Intern',
    company: 'CGI',
    location: 'Bengaluru',
    period: 'May 2026 – July 2026',
    type: 'industry',
    logo: "/logos/cgi.png",
    details: [
  'Performed data cleaning, preprocessing, and exploratory data analysis on large operational datasets.',
  'Applied statistical techniques to identify execution patterns, failure trends, and business insights.',
  'Developed interactive dashboards and reports using Excel and Power BI for stakeholder reporting.',
  'Worked with Python and SQL to automate data analysis workflows and improve reporting efficiency.',
  'Collaborated with cross-functional teams to support data-driven operational decisions.'
],
    technologies: ['Python', 'SQL', 'Excel', 'Power BI', 'Statistics']
  },
  {
    id: 'exp-isi',
    role: 'Placement Representative',
    company: 'Indian Statistical Institute',
    location: 'Bengaluru',
    period: '2026 – Present',
    type: 'leadership',
    logo: "/logos/isi.jpg",
    details: [
  'Coordinated internship and placement activities for the MS-QMS batch.',
  'Acted as the primary point of contact between recruiters and students.',
  'Managed interview scheduling, company communications, and recruitment logistics.',
  'Facilitated smooth coordination for placement drives and industry engagement.'
]
  }
];

export const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        <div className="space-y-16">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Experience</h2>
              <div className="w-12 h-1 bg-accent-blue mt-2 rounded-full" />
              <p className="text-sm font-semibold text-accent-blue mt-3 uppercase tracking-wider">
                Professional Experience & Leadership
              </p>
            </div>
            
            <p className="text-slate-500 text-base leading-relaxed font-light">
              Through internships and leadership roles, I have applied statistical analysis, machine learning, business analytics, and optimization techniques to solve real-world problems while collaborating with teams and industry professionals.
            </p>
          </div>

          {/* Timeline Structure */}
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-8 pl-8 md:pl-10 space-y-12">
            
            {experienceData.map((item) => (
              <div key={item.id} className="relative">
                
                {/* Timeline Dot Indicator with Icon */}
                <div className="absolute -left-[49px] md:-left-[57px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 shadow-xs">
                  {item.type === 'industry' ? (
                    <Briefcase className="h-4 w-4 text-accent-blue" />
                  ) : (
                    <Users className="h-4 w-4 text-indigo-650" />
                  )}
                </div>

                {/* Experience Card */}
                <Card className="border border-slate-200/50 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md hover:border-accent-blue/30 transition-all duration-300 bg-white">
                  
                  {/* Card Header: Logo, Title, Date */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex gap-4 items-center sm:items-start">
                      {/* Stylized Logo Placeholder */}
                      <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 shadow-sm">

  <img
    src={item.logo}
    alt={item.company}
    className="w-full h-full object-contain"
  />

</div>
                      
                      <div className="space-y-0.5">
                        <h3 className="text-lg font-bold text-slate-800 leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-slate-650">
                          {item.company} <span className="text-slate-350 font-normal">|</span> <span className="text-xs text-slate-500 font-normal">{item.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-semibold border border-slate-200/50">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities Details */}
                  <ul className="space-y-2.5 text-slate-500 text-sm pl-0">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-accent-blue/60 mt-0.5 shrink-0" />
                        <span className="leading-relaxed font-light text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Badges (Only render if present) */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-slate-100">
                      {item.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded-lg bg-accent-blue-light text-accent-blue text-xs font-medium border border-accent-blue-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </Card>

              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};
