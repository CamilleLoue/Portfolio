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
            <p className="w-5/6 lg:w-full lg:mt-2 text-base font-light lg:text-lg text-zinc-400">
              I develop tech solutions and products online.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-3/4 w-7/8 font-sans text-base text-opacity-90 text-zinc-300 mt-8 lg:mt-12">
        I spent 2 years freelancing as an ML engineer, building web apps alongside. 
        While machine learning is a key part of my journey, creating web apps is where I have the most fun. 
        This passion led me to my current position as a Software Engineer. 
        Feel free to have a look at my{" "}
        <a
          href="/work"
          className="text-zinc-100 underline underline-offset-2 decoration-zinc-200/50 hover:text-white hover:decoration-zinc-200"
        >
          ML work
        </a>
        , and other{" "}
        <a
          href="/projects"
          className="text-zinc-100 underline underline-offset-2 decoration-zinc-200/50 hover:text-white hover:decoration-zinc-200"
        >
          projects
        </a>
        .
      </div>

      <section className="mt-4 lg:mt-10 text-base text-opacity-90 text-zinc-300">
        If you have anything in mind, {" "}
        <a
          href="mailto:contact@camilleloue.com"
          className="text-zinc-100 underline underline-offset-2 decoration-zinc-300/50 hover:text-white hover:decoration-zinc-200"
        >
          drop me an email 
        </a>
        . 
        <div className="flex flex-col lg:flex-row gap-3 mt-8 lg:mt-10">
          <h2 className="text-base text-zinc-300 text-opacity-90 order-1 lg:order-none">
            You can also find me on
          </h2>

          <div className="flex items-center order-2 lg:order-none">
            <a
              href="https://github.com/CamilleLoue"
              target="_blank"
              className="mr-3 opacity-80 hover:opacity-100"
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
              className="mr-3 opacity-80 hover:opacity-100"
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
              className="mr-3 opacity-80 hover:opacity-100"
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
              className="opacity-80 hover:opacity-100"
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
        </div>
      </section>
    </main>
  );
}
