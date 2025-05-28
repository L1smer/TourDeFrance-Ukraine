const scrollTo = (id: string) => {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  return (
    <header className="bg-white min-h-45 text-white p-4 flex justify-between items-center fixed w-full z-50 shadow">
      <div>
        <img src="../../assets/logo.png" alt="" className='max-w-40'/>
      </div>
      <nav className="space-x-20 mr-20">
        <button onClick={() => scrollTo("about")} className="text-black">About</button>
        <button onClick={() => scrollTo("route")} className="text-black">Route</button>
        <button onClick={() => scrollTo("gallery")} className="text-black">Gallery</button>
        <button onClick={() => scrollTo("support")} className="text-black">Support</button>
        <button onClick={() => scrollTo("contact")} className="text-black">Contact</button>
      </nav>
    </header>
  );
}
