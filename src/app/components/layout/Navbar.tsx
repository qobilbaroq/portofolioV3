import Clock from '../ui/Clock';
import Coordinate from '../ui/Coordinate';

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-3 px-4 mb-5">
      <div className="flex justify-between">
        <Coordinate />
        <Clock />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="border border-black px-7 py-1 rounded-[50%_/_50%] hover:bg-black hover:text-white transform transition-all duration-500">
            <a className="text-sm" href="/">
              Home
            </a>
          </span>
          <span className="border border-black px-7 py-1 rounded-[50%_/_50%] hover:bg-black hover:text-white transform transition-all duration-500">
            <a className="text-sm" href="/projects">
              Work
            </a>
          </span>
          <span className="border border-black px-7 py-1 rounded-[50%_/_50%] hover:bg-black hover:text-white transform transition-all duration-500">
            <a className="text-sm" href="/archive">
              Archive
            </a>
          </span>
        </div>
        <div className="flex justify-between w-[600px]">
          <div className="flex gap-6">
            <a className="font-medium" href="/">
              Github
            </a>
            <a className="font-medium" href="/">
              LinkedIn
            </a>  <a className="font-medium" href="/">
              Email
            </a>
          </div>
          <div className="flex gap-6">
            <a className="font-medium" href="/">
              IG
            </a>
            <a className="font-medium" href="/">
              Spotify
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
