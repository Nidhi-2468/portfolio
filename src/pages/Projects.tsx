import React from "react";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import projects from "../data/projects";
import { FolderGit2, ArrowUpRight } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 border-y border-slate-100"
    >
      <Container>

        {/* Section Heading */}

        <div className="max-w-3xl mb-16">

          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent-blue mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Projects
          </h2>

          <p className="mt-5 text-slate-600 leading-8 text-lg">
            A selection of projects demonstrating my interests in
            Operations Research, Machine Learning and Business Analytics.
            Each project focuses on solving practical decision-making
            problems using data-driven techniques.
          </p>

        </div>

        <div className="space-y-24">

          {projects.map((project) => (

            <Card
              key={project.id}
              className="overflow-hidden border border-slate-200 shadow-sm rounded-3xl bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="grid lg:grid-cols-2">

                {/* LEFT SIDE */}

                <div className="bg-slate-100 aspect-[16/10] flex items-center justify-center">

                  {project.image ? (

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <div className="flex flex-col items-center text-slate-400">

                      <div className="text-6xl mb-4">
                        📊
                      </div>

                      <p className="font-medium">
                        Project Preview
                      </p>

                    </div>

                  )}

                </div>

                {/* RIGHT SIDE */}

                <div className="p-8 lg:p-10 flex flex-col">

                  <div className="flex items-center gap-3 mb-5">

                    <span className="px-3 py-1 rounded-full bg-accent-blue-light text-accent-blue text-xs font-semibold uppercase tracking-wider">

                      {project.category}

                    </span>

                  </div>

                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">

                    {project.title}

                  </h3>

                  <p className="mt-5 text-slate-600 leading-7">

                    {project.shortDescription}

                  </p>

                  {/* Problem */}

                  <div className="mt-8">

                    <h4 className="font-semibold text-slate-900 mb-2">

                      Problem

                    </h4>

                    <p className="text-slate-600 leading-7">

                      {project.problem}

                    </p>

                  </div>

                  {/* Solution */}

                  <div className="mt-6">

                    <h4 className="font-semibold text-slate-900 mb-2">

                      Solution

                    </h4>

                    <p className="text-slate-600 leading-7">

                      {project.solution}

                    </p>

                  </div>
                                    {/* Technologies */}

                  <div className="mt-8">

                    <h4 className="font-semibold text-slate-900 mb-3">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {project.technologies.map((tech) => (

  <span
    key={tech}
    className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
  >
    {tech}
  </span>

))}

                    </div>

                  </div>

                  {/* Highlights */}

                  <div className="mt-8">

                    <h4 className="font-semibold text-slate-900 mb-3">
                      Key Highlights
                    </h4>

                    <ul className="space-y-2">

                      {project.highlights.map((item) => (

                        <li
                          key={item}
                          className="flex items-start gap-3 text-slate-600"
                        >

                          <span className="text-accent-blue mt-1">
                            •
                          </span>

                          <span>
                            {item}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>
                  {/* Results */}

<div className="mt-8">

  <h4 className="font-semibold text-slate-900 mb-3">
    Results
  </h4>

  <ul className="space-y-2">

    {project.results.map((result) => (

      <li
        key={result}
        className="flex items-start gap-3 text-slate-600"
      >

        <span className="text-green-600 font-bold">
          ✓
        </span>

        <span>
          {result}
        </span>

      </li>

    ))}

  </ul>

</div>

                  {/* GitHub Button */}

                  <div className="mt-10">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <button
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 hover:bg-slate-800 transition-colors"
                      >

                        <FolderGit2 className="h-5 w-5" />

                        View Source Code

                        <ArrowUpRight className="h-4 w-4" />

                      </button>

                    </a>

                  </div>

                </div>

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </section>

  );

};