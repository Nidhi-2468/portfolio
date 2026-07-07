import React from 'react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { skills } from '../data/skills';
import { Code2 } from 'lucide-react';
import type { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
  'Programming',
  'Data Analysis',
  'Machine Learning',
  'Optimization',
  'Tools'
];

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter(s => s.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <Container>
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-900">
Technical Skills
</h2>

<p className="mt-4 text-lg text-slate-600 max-w-3xl leading-8">
Technologies, tools and methodologies I use for machine learning,
data analytics, optimization and statistical modelling.
</p>
            <div className="w-12 h-1 bg-accent-blue mt-2 rounded-full" />
          </div>

          {skills.length === 0 ? (
            <Card className="border border-slate-200/50 rounded-2xl p-6 flex flex-col min-h-[220px] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Code2 className="h-8 w-8 text-slate-400 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 text-lg">No skills data found</h3>
              <p className="text-sm text-slate-500 mt-2">
                Populate your technical skills inside <code>src/data/skills.ts</code>.
              </p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {categories.map((category) => {
                const categorySkills = getSkillsByCategory(category);
                if (categorySkills.length === 0) return null;

                return (
                  <Card key={category} className="border border-slate-200/50 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <div 
                          key={index}
                          className="px-3 py-2 rounded-lg bg-blue-50 border border-slate-200 text-blue-700 text-sm font-medium hover:bg-blue-100 hover:border-blue-200 transition-all"
                        >
                          <span className="font-medium">{skill.name}</span>
                          
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
          {/* Currently Exploring */}
<Card className="border border-slate-200/50 rounded-2xl p-6 bg-slate-50 hover:shadow-lg transition-all duration-300">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    <div>
      <h3 className="text-xl font-bold text-slate-800">
        Currently Exploring
      </h3>

      <p className="text-slate-500 mt-2">
        Continuously expanding my knowledge in modern AI and data science technologies.
      </p>
    </div>

    <div className="flex flex-wrap gap-3">
      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100">
        Large Language Models (LLMs)
      </span>

      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100">
        Natural Language Processing
      </span>

      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100">
        Deep Learning
      </span>
    </div>

  </div>
</Card>
        </div>
      </Container>
    </section>
  );
};
