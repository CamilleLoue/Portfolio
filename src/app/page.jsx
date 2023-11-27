import Image from "next/image";
import Card from "./components/Card.jsx";

export default function Home() {
  return (
    <main className="flex flex-col items-start px-10 lg:px-0">
      <div className="flex gap-x-6">
        <Image
          src="/images/profile-ucl.jpg"
          alt="Profile Picture"
          className="rounded-full w-22 h-22"
          width={160}
          height={160}
        />
        <div className="flex flex-col gap-y-2">
          <h1 className="mt-7 text-3xl font-semibold">Hi, I&apos;m Camille</h1>
          <div>
            <p className="mt-4 text-gray-400 text-lg">
              Web App enthusiast with a background in Machine Learning.
            </p>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-xl mt-10">Introduction</div>
      <div className="text-gray-400 text-xl mt-10">Work</div>
      <Card 
      title="Real Estate Data Analysis" 
      dates="Aug 2023 - Sept 2023" 
      badges={['Data wrangling', 'Data viz']}/>
      <div className="text-gray-400 text-xl mt-10">Testimonials</div>
    </main>
  );
}
