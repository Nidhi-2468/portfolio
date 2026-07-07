import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { GraduationCap, Briefcase, Users, LineChart } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: 'Started B.Sc. Mathematics',
    subtitle: 'Banaras Hindu University'
  },
  {
    year: '2025',
    title: 'Joined M.S. Quality Management Science',
    subtitle: 'Indian Statistical Institute'
  },
  {
    year: '2025',
    title: 'Placement Representative',
    subtitle: 'ISI Bangalore'
  },
  {
    year: '2026',
    title: 'Started Data Analysis Internship',
    subtitle: 'CGI'
  }
  
];

export const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className={`py-20 bg-white border-y border-slate-100 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        <div className="space-y-16">
          
          {/* Main Grid: Left Narrative, Right Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Story narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight">About Me</h2>
                <div className="w-12 h-1 bg-accent-blue mt-2 rounded-full" />
                <p className="text-sm font-semibold text-accent-blue mt-3 uppercase tracking-wider">
                  From Mathematics to Machine Learning
                </p>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed font-light text-base">
                <p>
                  My academic journey began with a rigorous focus on abstract logic and analytical reasoning, culminating in my B.Sc. in Mathematics (Honours) from Banaras Hindu University. Eager to channel these quantitative frameworks into actionable business outcomes, I pursued an M.S. in Quality Management Science at the Indian Statistical Institute (ISI), Bengaluru, specializing in Statistical Quality Control and Operations Research.
                </p>
                <p>
                  I thrive at the intersection of mathematics, statistics, and machine learning. Rather than viewing optimization algorithms and data models as mere theoretical constructs, I enjoy translating them into solutions for practical corporate bottlenecks. My skill set allows me to merge predictive modeling with operations optimization to construct comprehensive, data-driven decision support engines.
                </p>
                
              </div>
            </div>

            {/* Right Column: 4 Grid Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Education */}
              <Card className="border border-slate-200/50 p-5 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 bg-white flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="p-2 rounded-lg bg-accent-blue-light border border-accent-blue-border/40 w-fit shrink-0">
                    <GraduationCap className="h-4 w-4 text-accent-blue" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">Education</h3>
                  <div className="space-y-2 text-xs text-slate-500">
                    <div>
                      <p className="font-semibold text-slate-700">M.S. Quality Management Science</p>
                      <p>ISI Bengaluru</p>
                    </div>
                    <div className="pt-1 border-t border-slate-100">
                      <p className="font-semibold text-slate-700">B.Sc. Mathematics (Honours)</p>
                      <p>Banaras Hindu University</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Card 2: Current Experience */}
              <Card className="border border-slate-200/50 p-5 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 bg-white flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="p-2 rounded-lg bg-accent-blue-light border border-accent-blue-border/40 w-fit shrink-0">
                    <Briefcase className="h-4 w-4 text-accent-blue" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">Current Experience</h3>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p className="font-semibold text-slate-700">Data Analysis Intern</p>
                    <p>CGI</p>
                  </div>
                </div>
              </Card>

              {/* Card 3: Leadership */}
              <Card className="border border-slate-200/50 p-5 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 bg-white flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="p-2 rounded-lg bg-accent-blue-light border border-accent-blue-border/40 w-fit shrink-0">
                    <Users className="h-4 w-4 text-accent-blue" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">Leadership</h3>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p className="font-semibold text-slate-700">Placement Representative</p>
                    <p>Indian Statistical Institute</p>
                  </div>
                </div>
              </Card>

              {/* Card 4: Research Interests */}
              <Card className="border border-slate-200/50 p-5 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 bg-white flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="p-2 rounded-lg bg-accent-blue-light border border-accent-blue-border/40 w-fit shrink-0">
                    <LineChart className="h-4 w-4 text-accent-blue" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">Research Interests</h3>
                  <div className="flex flex-wrap gap-1">
                    {['Machine Learning', 'Optimization', 'Operations Research', 'Business Analytics'].map((interest, idx) => (
                      <span 
                        key={idx} 
                        className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-650"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-8 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">Timeline</h3>
            
            <div className="relative flex flex-col md:flex-row md:justify-between items-start gap-8 md:gap-4 pl-8 md:pl-0">
              
              {/* Desktop Connective line */}
              <div className="hidden md:block absolute top-[15px] left-0 right-0 h-[2px] bg-slate-100 -z-10" />
              
              {/* Mobile Connective line */}
              <div className="block md:hidden absolute top-0 bottom-0 left-[15px] w-[2px] bg-slate-100 -z-10" />
              
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-2 text-left md:text-center w-full md:w-1/4"
                >
                  {/* Milestones Indicator Year */}
                  <div className="absolute -left-[30px] md:relative md:left-0 top-0.5 md:top-0 w-8 h-8 rounded-full bg-accent-blue-light border-2 border-accent-blue flex items-center justify-center shrink-0 z-10">
                    <span className="text-[10px] font-bold text-accent-blue">{item.year}</span>
                  </div>
                  
                  {/* Narrative details */}
                  <div className="space-y-0.5 md:pt-1">
                    <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
