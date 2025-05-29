import { useState } from "react";
import HeroAbout from "../render_sections/HeroAbout";
import LearnMoreAbout from "../render_sections/LearnMoreAbout";

export default function About() {
  const [learnMore, setLearnMore] = useState<boolean>(false);

  function onLearnMore() {
    setLearnMore((prev) => !prev);
  }

  return (
    <div className="w-screen h-[calc(100vh-125px)]">
      <div className="absolute inset-0 bg-[url('/Flag_of_Ukraine.png')] bg-cover bg-center bg-no-repeat z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-1" />
      {!learnMore ? (
        <HeroAbout onLearnMore={onLearnMore} />
      ) : (
        <LearnMoreAbout onLearnMore={onLearnMore}/>
      )}
    </div>
  );
}
