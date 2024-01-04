import Link from "next/link";
import Navigation from "./components/Navigation";




export default function Home() {
  return (
    <main>
           <Navigation />
           <div className="w-full h-[30rem] flex items-center justify-center">
            <div>
            <h3 className="text-5xl font-semibold text-center mb-5">Hi!</h3>
            <Link className="bg-blue-600 text-white py-1 px-2 rounded" href={'/users'}>See Users</Link>
            </div>
            </div>
    </main>
  )
}
