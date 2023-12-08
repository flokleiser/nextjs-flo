// ...

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/links",
    name: "Links/Info",
  },
  {
    path: "/toggle-navbar",
    name: "Toggle Navbar",
  },
];

const navSubItems = [
  {
    path: "/projects/sketches",
    name: "Sketches",
  },
  {
    path: "/projects/creative-coding",
    name: "Creative Coding",
  },
  {
    path: "/projects/skylands",
    name: "Skylands",
  },
  {
    path: "/projects/voxel",
    name: "Voxel Art",
  },
  {
    path: "/projects/cad",
    name: "CAD",
  },
  {
    path: "/projects/animations",
    name: "Animations",
  },
  {
    path: "/projects/crafts",
    name: "Crafts",
  },
  {
    path: "/projects/illustrator",
    name: "Illustrator",  
  },
  {
    path: "/toggle-subnavbar",
    name: "Toggle Subnavbar",
  },
];

export default function Navbar() {
  let pathname = usePathname() || "/";

  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [hoveredToggleNavbarPath, setHoveredToggleNavbarPath] = useState(null);
  const [hoveredToggleSubNavbarPath, setHoveredToggleSubNavbarPath] = useState(null);

  const toggleNavbarVisibility = () => {
    setShowNavbar(!showNavbar);
  };
  
  const toggleSubNavbarVisibility = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  const handleSubNavbarItemClick = () => {
    setShowSubNavbar(false);
  };

  return (
    <div className="flex border-stone-900/80 p-[0.4rem] mb-1 sticky top bg-stone-900/80 backdrop-blur-md ">
      <Link
        key="/toggle-navbar"
        className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
          hoveredToggleNavbarPath === "/toggle-navbar" ? "text-zinc-100" : "text-zinc-300"
        }`}
        href="/toggle-navbar"
        onMouseOver={() => setHoveredToggleNavbarPath("/toggle-navbar")}
        onMouseLeave={() => setHoveredToggleNavbarPath(null)}
      >
        <button
          className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out text-zinc-100"
          onClick={toggleNavbarVisibility}
        >
          {showNavbar ? <BsX style={{ fontSize: '1.5rem' }} /> : <BsList style={{ fontSize: '1.5rem' }}  />}
        </button>
      </Link>
      
      <AnimatePresence>
        {showNavbar && (
          // ...
        )}
      </AnimatePresence>
    </div>
  );
}






import { BsList, BsX, BsChevronDown, BsChevronUp } from 'react-icons/bs';

// ...

export default function Navbar() {
  // ...

  return (
    <div className="flex border-stone-900/80 p-[0.4rem] mb-1 sticky top bg-stone-900/80 backdrop-blur-md ">
      <Link
        key="/toggle-navbar"
        className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
          hoveredToggleNavbarPath === "/toggle-navbar" ? "text-zinc-100" : "text-zinc-300"
        }`}
        href="/toggle-navbar"
        onMouseOver={() => setHoveredToggleNavbarPath("/toggle-navbar")}
        onMouseLeave={() => setHoveredToggleNavbarPath(null)}
      >
        <button
          className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out text-zinc-100"
          onClick={toggleNavbarVisibility}
        >
          {showNavbar ? <BsX style={{ fontSize: '1.5rem' }} /> : <BsList style={{ fontSize: '1.5rem' }}  />}
        </button>
      </Link>
      
      <AnimatePresence>
        {showNavbar && (
          // ...
        )}
      </AnimatePresence>
    </div>
  );
}