import Navbar from "../components/Navbar";
import Dock from "../components/Dock";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export default function index(){
  const { t } = useTranslation('footer');
    return (
        <div>
          <Navbar />
            <div className="text-center bg-no-repeat md:hero-bg bg-cover md:bg-auto">
              <h1 className="pt-28 text-3xl font-bold tracking-wider text-gray-900 dark:text-white-text md:text-6xl font-heading">
                <span className="block xl:inline">Imagine A </span>
                <span className="block text-indigo-600 xl:inline">
                  Place
                </span>
              </h1>
              <p className="mt-5 text-gray-800 dark:text-white md:text-gray-800 dark:md:text-gray-400 text-center text-md md:text-xl font-body font-bold capitalize">
                Where you can find everything about Discord!
              </p>
              <div className="pt-10 pb-52">
                <button className="focus-visible:ring-4 focus-visible:ring-skyline/50 hover:bg-blush px-5 py-2 rounded-[2rem] font-display text-lg md:text-2xl dark:text-white-text hover:scale-110 transition-all duration-300 tracking-wide border-2 border-blush hover:border-blush focus:hover:shadow shadow-md"><Link href="/app">Get Started!</Link></button>
              </div>
              
            </div>
            <div className="pb-32 mx-32 lg:mx-96 border-t border-t-indigo-600"></div>
            <div className="pl-20 text-left">
                <h2 className="text-2xl md:text-4xl dark:text-gray-200 font-heading">A perfect place for your <span className="bg-clip-text text-transparent bg-gradient-to-r from-branding/70 to-blush/70">community</span></h2>
              </div>
          <Dock />
        </div>
      );
}