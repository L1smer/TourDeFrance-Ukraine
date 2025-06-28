import Section from "./components/Section";
import Header from "./components/Header";
import About from "./sections/About"
import Route from "./sections/Route";
import Gallery from "./sections/Gallery";
import Support from "./sections/Support";
import Blog from "./sections/Blog";

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
        <Gallery/>
      </Section>
      <Section id="support">
        <Support/>
      </Section>
			<Section id="blog">
				<Blog/>
			</Section>
    </>
  );
}
