import Section from "./components/Section";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Section id="about" title="About">
        <p>This is the story behind the project...</p>
      </Section>
      <Section id="route" title="Route">
        <p>Route details here...</p>
      </Section>
      <Section id="gallery" title="Gallery">
        <p>Gallery content here...</p>
      </Section>
      <Section id="support" title="Support">
        <p>Support & donation options...</p>
      </Section>
      <Section id="contact" title="Contact">
        <p>Contact information...</p>
      </Section>
    </>
  );
}
