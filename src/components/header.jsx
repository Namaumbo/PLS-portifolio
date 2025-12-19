import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function NavBarComponent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isActiveHash = (hash) => isHome && location.hash === hash;

  const linkBase =
    "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
  const linkActive = "text-foreground";

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" m-auto container flex h-18 items-center justify-between">
          <nav className="hidden gap-6 md:flex">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(linkBase, isActive && linkActive)
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                cn(linkBase, isActive && linkActive)
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                cn(linkBase, isActive && linkActive)
              }
            >
              Projects
            </NavLink>
            <Link
              to="/#contact"
              aria-current={isActiveHash("#contact") ? "page" : undefined}
              className={cn(linkBase, isActiveHash("#contact") && linkActive)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-foreground">
              Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBarComponent;
