import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-8 flex flex-col items-start px-10 lg:px-0">
      <div className="flex gap-x-6">
        <Image
          src="/images/profile.png"
          alt="Profile Picture"
          className="rounded-full w-22 h-22 aspect-square"
          width={120}
          height={120}
        />
        <div>
          <h1 className="mt-6 text-xl text-zinc-200">Hi, I&apos;m Camille!</h1>
          <div>
            <p className="mt-2 text-zinc-400">
              I launch ML models and web apps.
            </p>
          </div>
        </div>
      </div>

      <div className="w-3/4 text-base text-zinc-400 mt-12">
        For the past two years, I&apos;ve worked as a freelance ML engineer and
        have been building web apps alongside. While machine learning is a key
        part of my journey, creating web apps is where I have the most fun. Feel
        free to have a look at my{" "}
        <a
          href="/work"
          className="text-zinc-300 underline underline-offset-2 decoration-zinc-300/50 hover:text-white"
        >
          ML work
        </a>
        , and my{" "}
        <a
          href="/projects"
          className="text-zinc-300 underline underline-offset-2 decoration-zinc-300/50 hover:text-white"
        >
          projects
        </a>
        .
      </div>

      <section className="mt-12 text-base text-zinc-400">
        If you have anything in mind,{" "}
        <a
          href="mailto:contact@camilleloue.com"
          className="text-zinc-300 underline underline-offset-2 decoration-zinc-300/50 hover:text-white"
        >
          contact me
        </a>
        .
        <div className="flex items-center gap-3 mt-12">
          <h2 className="text-base text-zinc-400">You can also find me on</h2>

          <a
            href="https://github.com/CamilleLoue"
            target="_blank"
            className="opacity-70 hover:opacity-100"
          >
            <Image
              src="/images/social_media/github.svg"
              alt="Github Logo"
              width={28}
              height={28}
              className="h-5 w-5"
            />
          </a>
          <a
            href="https://twitter.com/cam_loue"
            target="_blank"
            className="opacity-70 hover:opacity-100"
          >
            <Image
              src="/images/social_media/X.svg"
              alt="X Logo"
              width={28}
              height={28}
              className="h-5 w-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/camille-loue"
            target="_blank"
            className="opacity-70 hover:opacity-100"
          >
            <Image
              src="/images/social_media/linkedin.svg"
              alt="LinkedIn Logo"
              width={28}
              height={28}
              className="h-5 w-5"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
