import React from "react";
import { Container } from "../components/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <Container>
        

        <div className="border-t border-slate-100 mt-6 pt-6 text-center text-sm text-slate-500">
          Designed & Developed by Nidhi Kumari • React • TypeScript • Tailwind CSS
        </div>

      </Container>
    </footer>
  );
};