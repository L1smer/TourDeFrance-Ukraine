import Section from "./components/Section";
import Header from "./components/Header";
import About from "./sections/About"

export default function App() {
  return (
    <>
      <Header />
      <Section id="about">
        <About/>
      </Section>
      <Section id="route">
        <p>Route details here...</p>
      </Section>
      <Section id="gallery">
        <p>Gallery content here...</p>
      </Section>
      <Section id="support">
        <p>Support & donation options...</p>
      </Section>
      <Section id="contact">
        <p>Contact information...</p>
      </Section>
    </>
  );
}
