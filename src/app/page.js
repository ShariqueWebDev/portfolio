import Navbar from "@/components/Navbar";
import WelcomeSec from "@/components/WelcomeSec";

export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto mt-[150px] max-md:mt-[120px]">
      <Navbar />
      <WelcomeSec/>
    </main>
  );
}
