import React from 'react';
import profile from "../data/profile";
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { 
   
  GraduationCap, 
  ArrowRight, 
  Download 
} from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center bg-white py-16 md:py-24 overflow-hidden">
      {/* Subtle Operations Research background illustration (under 5% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.03]">
        <svg className="w-full h-full text-accent-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
          </defs>
          
          {/* Optimization Graph Flow Networks */}
          <path d="M 100 150 L 300 220 L 450 180 L 600 300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 300 220 L 400 350 L 550 320" fill="none" stroke="currentColor" strokeWidth="1.5" marker-end="url(#arrow)" />
          
          <path d="M 850 120 L 1050 80 L 1250 150 L 1380 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 1050 80 L 1180 240 L 1350 200" fill="none" stroke="currentColor" strokeWidth="1.5" marker-end="url(#arrow)" />
          <path d="M 1180 240 L 1300 360" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 950 280 L 1100 380 L 1280 300" fill="none" stroke="currentColor" strokeWidth="1.5" marker-end="url(#arrow)" />

          <path d="M 120 700 L 280 620 L 450 680 L 580 600" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 280 620 L 380 780 L 520 740" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* Network Flow Node Labels (Operations Research reference) */}
          <text x="200" y="170" className="text-[11px] font-mono fill-current font-semibold">f=10/c=15</text>
          <text x="480" y="240" className="text-[11px] font-mono fill-current font-semibold">f=12/c=12</text>
          <text x="960" y="90" className="text-[11px] font-mono fill-current font-semibold">x₁₁ ≥ 0</text>
          <text x="1100" y="150" className="text-[11px] font-mono fill-current font-semibold">Min ∑ c_ij x_ij</text>
          <text x="1220" y="210" className="text-[11px] font-mono fill-current font-semibold">f=8/c=10</text>
          <text x="320" y="680" className="text-[11px] font-mono fill-current font-semibold">z* = 85.16</text>

          {/* Node Coordinates */}
          <circle cx="100" cy="150" r="6" fill="currentColor" />
          <circle cx="300" cy="220" r="7" fill="currentColor" />
          <circle cx="450" cy="180" r="6" fill="currentColor" />
          <circle cx="600" cy="300" r="8" fill="currentColor" />
          <circle cx="400" cy="350" r="6" fill="currentColor" />
          <circle cx="550" cy="320" r="7" fill="currentColor" />
          
          <circle cx="850" cy="120" r="6" fill="currentColor" />
          <circle cx="1050" cy="80" r="8" fill="currentColor" />
          <circle cx="1250" cy="150" r="7" fill="currentColor" />
          <circle cx="1380" cy="90" r="6" fill="currentColor" />
          <circle cx="1180" cy="240" r="8" fill="currentColor" />
          <circle cx="1350" cy="200" r="7" fill="currentColor" />
          <circle cx="1300" cy="360" r="9" fill="currentColor" />
          <circle cx="950" cy="280" r="6" fill="currentColor" />
          <circle cx="1100" cy="380" r="7" fill="currentColor" />
          <circle cx="1280" cy="300" r="6" fill="currentColor" />

          <circle cx="120" cy="700" r="5" fill="currentColor" />
          <circle cx="280" cy="620" r="7" fill="currentColor" />
          <circle cx="450" cy="680" r="6" fill="currentColor" />
          <circle cx="580" cy="600" r="8" fill="currentColor" />
          <circle cx="380" cy="780" r="6" fill="currentColor" />
          <circle cx="520" cy="740" r="7" fill="currentColor" />
        </svg>
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information & Statistics */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Nidhi Kumari
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-slate-600 tracking-wide">
                Data Scientist | Machine Learning | Operations Research
                
              </p>
              
              <p className="text-slate-500 text-base leading-relaxed max-w-2xl font-light">
                I am pursuing an M.S. in Quality Management Science at the Indian Statistical Institute, Bengaluru, specializing in Statistical Quality Control and Operations Research. I enjoy solving real-world business problems using machine learning, optimization, statistical analysis, and data-driven decision making.
              </p>
            </div>

            {/* Elegant Buttons Row */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up [animation-delay:200ms]">
              <Button 
                variant="primary" 
                onClick={() => scrollToSection('projects')}
                className="gap-2 cursor-pointer rounded-lg hover:shadow-lg hover:shadow-accent-blue/15 transition-all duration-350"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <a href="/resume.pdf" download="Nidhi_Kumari_Resume.pdf" className="inline-flex">
                <Button 
                  variant="secondary" 
                  className="gap-2 cursor-pointer rounded-lg border-slate-200 text-slate-700 hover:border-slate-350 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>

              <a 
                href={profile.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex"
              >
                <Button 
                  variant="secondary" 
                  className="gap-2 cursor-pointer rounded-lg border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-50 transition-all"
                >
                  <GithubIcon className="h-4 w-4 text-slate-500" />
                  GitHub
                </Button>
              </a>

              <a 
                href="https://www.linkedin.com/in/nidhi-kumari-2b270b307"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex"
              >
                <Button 
                  variant="secondary" 
                  className="gap-2 cursor-pointer rounded-lg border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-50 transition-all"
                >
                  <LinkedinIcon className="h-4 w-4 text-slate-500" />
                  LinkedIn
                </Button>
              </a>
            </div>

            
          </div>

          {/* Right Column: Premium LinkedIn-style Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up [animation-delay:600ms]">
            <Card className="w-full max-w-sm border border-slate-200/60 shadow-sm rounded-2xl p-6 bg-white space-y-6 relative overflow-hidden">
              {/* Subtle top banner strip */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-blue to-sky-400" />
              
              {/* Profile Image & Meta */}
              <div className="flex flex-col items-center text-center space-y-4 pt-2">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group">
                  <img 
                    src="/nidhi-profile.jpg" 
                    alt="Nidhi Kumari" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop";
                    }}
                  />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-extrabold text-slate-800 text-xl tracking-tight">Nidhi Kumari</h3>
                  <p className="text-xs font-semibold text-accent-blue bg-accent-blue-light/50 px-3 py-1 rounded-full inline-block border border-accent-blue-border/30">
                   
                    Indian Statistical Institute, Bengaluru
                  </p>
                </div>
              </div>

              {/* Education details info */}
              <div className="space-y-3 pt-2 border-t border-slate-100 text-slate-600 text-sm">
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-800 text-xs">M.S. Quality Management Science</p>
                    <p className="text-slate-500 text-xs leading-relaxed">Indian Statistical Institute, Bengaluru</p>
                  </div>
                </div>
              </div>

              {/* Skill Badges */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Core Expertise
                </span>
                
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/50">
                    Python
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/50">
                    SQL
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/50">
                    Machine Learning
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/50">
                    Operations Research
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/50">
                    Power BI
                  </span>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </Container>
    </section>
  );
};


