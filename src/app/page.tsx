import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Camille</h1>
        <p className="text-lg text-gray-500">Freelance Machine Learning Engineer</p>
      </div>
      <div className="my-8">
        <Image
          src="/your-profile-picture.jpg"
          alt="Your Profile Picture"
          className="rounded-full"
          width={150}
          height={150}
        />
      </div>
      <p className="text-center text-gray-600 max-w-md">
        I am a passionate about Machine Learning and building products online.
      </p>
    </main>
  )
}

