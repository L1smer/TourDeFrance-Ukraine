const scrollTo = (id: string) => {
	document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
}

export default function Header() {
  return (
    <header>
      <button onClick={() => scrollTo("about")}>About</button>
      <button onClick={() => scrollTo("route")}>Route</button>
      <button onClick={() => scrollTo("gallery")}>Gallery</button>
      <button onClick={() => scrollTo("support")}>Support</button>
      <button onClick={() => scrollTo("contact")}>Contact</button>
    </header>
  );
}