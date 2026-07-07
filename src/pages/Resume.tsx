import React from 'react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';

import { educations } from '../data/education';
import { GraduationCap } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-slate-50 border-y border-slate-100">
      <Container>
        <div className="space-y-12">
          <div className="max-w-3xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
  Education
</h2>

<p className="mt-4 text-lg text-slate-600 max-w-3xl leading-8">
  My academic background has provided a strong foundation in statistics,
  machine learning, operations research, and data analytics.
</p>
              <div className="w-12 h-1 bg-accent-blue mt-2 rounded-full" />
            </div>
            
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left side: Education */}
            <div className="lg:col-span-12 space-y-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent-blue" />
                Education
              </h3>

              {educations.length === 0 ? (
                <Card className="border border-slate-200 border-dashed bg-white p-8 text-center">
                  <p className="text-sm text-slate-500">
                    Populate your education history inside <code>src/data/education.ts</code>.
                  </p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {educations.map((edu) => (
                    <Card key={edu.id} className="border border-slate-200/50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                          <p className="text-sm text-slate-500">{edu.institution}</p>
                        </div>
                        <span className="inline-block self-start px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-xs font-semibold">
                          {edu.period}
                        </span>
                      </div>
                      
                      {edu.details && edu.details.length > 0 && (
                        <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-500 text-xs">
                          {edu.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </div>

            
          </div>
        </div>
      </Container>
    </section>
  );
};
