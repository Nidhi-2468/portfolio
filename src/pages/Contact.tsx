import React from 'react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Mail, ArrowUpRight } from 'lucide-react';

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

const contactLinks = [
  {
    name: 'Email',
    value: 'nidhixyzkumari@gmail.com',
    href: 'mailto:nidhixyzkumari@gmail.com',
    icon: <Mail className="h-6 w-6 text-accent-blue" />,
    description: 'Send me a direct email message for professional inquiries.'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/nidhi-kumari-2b',
    href: 'https://www.linkedin.com/in/nidhi-kumari-2b270b307/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3yTTO21eQ9uSbh4uV%2B6z%2FA%3D%3D',
    icon: <LinkedinIcon className="h-6 w-6 text-accent-blue" />,
    description: 'Connect with me on LinkedIn to view my network and posts.'
  },
  {
    name: 'GitHub',
    value: 'github.com/Nidhi-2468',
    href: 'https://github.com/Nidhi-2468',
    icon: <GithubIcon className="h-6 w-6 text-accent-blue" />,
    description: 'Explore my open source codebase, research code, and scripts.'
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Contact</h2>
            <div className="w-12 h-1 bg-accent-blue mt-2 rounded-full" />
            <p className="mt-4 text-slate-600 leading-relaxed">
              If you are a recruiter or team lead looking to hire in Data Science, Machine Learning, Analytics, or Operations Research, please feel free to reach out. I would be happy to discuss potential opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? "_blank" : undefined}
                rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <Card className="h-full border border-slate-200/60 p-6 flex flex-col justify-between hover:border-accent-blue hover:shadow-md transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-accent-blue-light border border-accent-blue-border/40">
                        {link.icon}
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-accent-blue transition-colors" />
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg group-hover:text-accent-blue transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5 break-all">
                        {link.value}
                      </p>
                    </div>
                    
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
