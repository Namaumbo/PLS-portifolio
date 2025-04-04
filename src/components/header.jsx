import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function NavBarComponent() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" m-auto container flex h-18 items-center justify-between">
          <nav className="hidden gap-6 md:flex">
            <Link
              to="#about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="#skills"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Skills
            </Link>
            <Link
              to="#projects"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              to="#contact"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
