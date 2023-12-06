'use client'

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
];

export default function Navbar() {
  let pathname = usePathname() || "/";

  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);
      
      {showNavbar && (
      
        className={"navbar-contents show "} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >
   
      
        {navItems.map((item, index) => {
         
         
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-300"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                  className="absolute bottom-0 left-0 h-full bg-stone-500/50 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width:'100%'
                  }}
                  transition={{
                    type:"spring",
                    bounce:0.1,
                    stiffness:100,
                    damping:11,
                    duration:0.5,
                  }}
                  />
              )}
            {/* </button> */}
            </Link>
          );
        })}

        </nav>

       )}
    </div>
  );
}