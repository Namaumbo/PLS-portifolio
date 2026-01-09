import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function NavBarComponent() {
  const linkBase =
    "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
  const linkActive = "text-foreground";

  return (
    <>
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="m-auto container flex h-16 items-center justify-between">
          <nav className="hidden gap-6 md:flex">
            <NavLink
              to="/about"
              className={({ isActive }) => cn(linkBase, isActive && linkActive)}
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) => cn(linkBase, isActive && linkActive)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => cn(linkBase, isActive && linkActive)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => cn(linkBase, isActive && linkActive)}
            >
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-foreground" asChild>
              <a
                href="/Daelo_Namaumbo_Updated_resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBarComponent;
