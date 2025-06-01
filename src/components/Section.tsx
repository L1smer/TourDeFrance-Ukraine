import React from "react";

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className="min-h-screen pt-25">
      {children}
    </section>
  );
};

export default Section;
