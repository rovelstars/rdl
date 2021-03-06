import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-t dark:from-blush/50 from-blush/70 to-branding/70 sticky top-0 z-50 backdrop-blur-xl py-2 pl-2 mx-auto shadow-lg flex items-center rounded-b-xl">
      <div className="shrink-0">
        <Link href="/"><img className="h-12 w-12 rounded-2xl" src="/img/logo.png" alt="RDL Logo" height="3rem" width="3rem" /></Link>
      </div>
    </div>
  );
}
