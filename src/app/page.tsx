import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-start px-10 lg:px-0">
      <div className="flex gap-x-6">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          className="rounded-full w-22 h-22"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-y-3">
          <h1 className="text-2xl mt-2 font-semibold ">Camille</h1>
          <p className="text-lg text-gray-500">
            Machine Learning Engineer
          </p>
        </div>
      </div>
      <p className=" text-gray-600 max-w-md mt-8">
        I build ML models and products online.
      </p>
    </main>
  );
}
