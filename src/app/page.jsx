import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-8 flex flex-col items-start px-8 lg:px-0">
      <div className="flex lg:flex-row gap-6 items-center">
        <div className="rounded-full w-24 h-24 lg:w-32 lg:h-32 aspect-square">
          <Image
          className="rounded-full"
            src="/images/profile.png"
            alt="Profile Picture"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1 className="w-5/6 lg:w-full text-lg lg:text-xl text-zinc-200">
            hi, I&apos;m Camille
          </h1>
          <div>
            <p className="w-5/6 lg:w-full lg:mt-2 text-base lg:text-lg text-zinc-400">
              I launch ML models and web apps.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-3/4 w-7/8 font-sans text-base text-zinc-400 mt-6 lg:mt-12">
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

      <section className="mt-8 lg:mt-12 text-base text-zinc-400">
        If you have anything in mind,{" "}
        <a
          href="mailto:contact@camilleloue.com"
          className="text-zinc-300 underline underline-offset-2 decoration-zinc-300/50 hover:text-white"
        >
          contact me
        </a>
        .
        <div className="flex items-center gap-3 mt-8 lg:mt-12">
          <h2 className="text-base text-zinc-400">
            You can also find me on
          </h2>

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
          <a
            href="https://www.producthunt.com/@camille_loue"
            target="_blank"
            className="opacity-70 hover:opacity-100"
          >
            <Image
              src="/images/social_media/product-hunt.svg"
              alt="Product Hunt Logo"
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
