const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  return (
    <header className="bg-white text-white p-4 flex justify-between items-center fixed w-full z-50 shadow">
      <div>
        <img src="../../assets/logo.png" alt="" className='w-35'/>
      </div>
      <div>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("route")}>Route</button>
        <button onClick={() => scrollTo("gallery")}>Gallery</button>
        <button onClick={() => scrollTo("support")}>Support</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>
    </header>
  );
}
