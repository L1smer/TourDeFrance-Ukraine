import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} style={{ padding: "100px 20px", minHeight: "100vh" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
