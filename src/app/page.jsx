import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-start px-10 lg:px-0">
      <div className="flex gap-x-6">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          className="rounded-full w-22 h-22"
          width={160}
          height={160}
        />
        <div className="flex flex-col gap-y-2">
          <h1 className="mt-5 text-3xl font-semibold">Camille</h1>
          <div>
            <p className="text-gray-400 text-sm">Machine Learning Engineer. Indie Hacker.</p>
            <p className="mt-4 text-gray-300">I turn data into solutions and build cool products online.</p>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-lg mt-6">
        As a Freelance ML Engineer, I&apos;ve applied my skills across
        various industries such as real estate and marketing, contributing to
        diverse projects. Discover my work and services at [portfolio link]. Beyond
        data science, I also create web products, which you can find here [personal projects link].
        Currently, I&apos;m seeking new challenges. Get in touch [contact link]

        You can also find me on
        [twitter] [linkedin] [github]
      </p>
      <div className="text-gray-400 text-base my-4"></div>
    </main>
  );
}
