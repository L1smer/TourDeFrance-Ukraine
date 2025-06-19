import Section from "./components/Section";
import Header from "./components/Header";
import About from "./sections/About"
import Route from "./sections/Route";

export default function App() {
  return (
    <>
      <Header />
      <Section id="about">
        <About/>
      </Section>
      <Section id="route">
        <Route/>
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
