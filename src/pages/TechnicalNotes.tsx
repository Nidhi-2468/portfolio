import React from "react";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { BookOpen, ArrowRight } from "lucide-react";

export const TechnicalNotes: React.FC = () => {
  return (
    <section id="technical-notes" className="py-20 bg-slate-50 border-y border-slate-100">
      <Container>

        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Technical Notes
          </h2>

          <div className="w-12 h-1 bg-accent-blue mt-2 rounded-full" />

          <p className="mt-5 text-lg text-slate-600 leading-8">
            A collection of concise articles where I explain concepts that I
            have learned throughout my journey in Machine Learning,
            Statistics, Operations Research and Data Science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* TSP Article */}

          <Card className="rounded-2xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 p-7">

            <div className="flex items-center gap-3 mb-4">

              <BookOpen className="h-6 w-6 text-blue-600" />

              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                Operations Research
              </span>

            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Understanding the Traveling Salesman Problem
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              An intuitive explanation of the Traveling Salesman Problem,
              why it is NP-Hard, common solution approaches, and how
              optimization solvers like Gurobi and OR-Tools solve it.
            </p>

            <div className="mt-6 flex items-center justify-between">

              <span className="text-sm text-slate-500">
                5 min read
              </span>

              <a
    href="/notes/tsp.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
>
    Read Article
    <ArrowRight className="h-4 w-4" />
</a>

            </div>

          </Card>
          {/* Transformer Article */}

<Card className="rounded-2xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 p-7">

  <div className="flex items-center gap-3 mb-4">

    <BookOpen className="h-6 w-6 text-blue-600" />

    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
      Deep Learning
    </span>

  </div>

  <h3 className="text-2xl font-bold text-slate-900">
    Understanding Transformers
  </h3>

  <p className="mt-4 text-slate-600 leading-7">
    A beginner-friendly introduction to the Transformer architecture,
    explaining why Transformers were introduced, how self-attention works,
    and the complete workflow from input tokens to the output layer.
  </p>

  <div className="mt-6 flex items-center justify-between">

    <span className="text-sm text-slate-500">
      6 min read
    </span>

    <a
      href="/notes/Transformer Architecture.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
    >
      Read Article
      <ArrowRight className="h-4 w-4" />
    </a>

  </div>

</Card>
        </div>

      </Container>
    </section>
  );
};