import Compare from "./_components/pages/compare";
import Hero from "./_components/pages/Hero";
import Pricing from "./_components/pages/pricing";
import Steps from "./_components/pages/Steps";

export default function Home() {
  return (
    <div className="lg:px-30 px-5">
      <Hero />
      <Steps/>
      <Compare/>
      <Pricing/>
    </div>
  );
}
