import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-start px-10 lg:px-0">
      <div className="flex gap-x-6">
        <Image
          src="/images/profile.png"
          alt="Profile Picture"
          className="rounded-full w-22 h-22 aspect-square"
          width={120}
          height={120}
        />
        <div className="flex flex-col gap-y-2">
          <h1 className="mt-5 text-2xl text-neutral-200">Hi, I&apos;m Camille</h1>
          <div>
            <p className="mt-2 text-neutral-400">
              I launch ML models and web apps.
            </p>
          </div>
        </div>
      </div>
      <div className="text-neutral-400 mt-10">About Me</div>
      <div className="text-neutral-400 mt-2">Skills and expertise</div>
      <div className="text-neutral-400 mt-2">Work</div>
      <div className="text-neutral-400 mt-2">Testimonials</div>
      <div className="text-neutral-400 mt-2">Projects</div>
    </main>
  );
}
