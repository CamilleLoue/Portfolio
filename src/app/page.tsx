import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-start px-10 lg:px-0">
      <div className="flex gap-x-6">
        <Image
          src="/images/profile.jpg"
          alt="Your Profile Picture"
          className="rounded-full w-20 h-20"
          width={80}
          height={80}
        />
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-semibold ">Camille</h1>
          <p className="text-lg text-gray-500">
            Freelance Machine Learning Engineer
          </p>
        </div>
      </div>
      <p className=" text-gray-600 max-w-md mt-8">
        I am a passionate about Machine Learning and building products online.
      </p>
    </main>
  );
}
