import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function NavBarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkBase =
    "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
  const linkActive = "text-foreground";
  const links = useMemo(
    () => [
      { to: "/about", label: "About" },
      { to: "/skills", label: "Skills" },
      { to: "/projects", label: "Projects" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  return (
    <>
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <nav className="hidden gap-6 md:flex">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => cn(linkBase, isActive && linkActive)}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </div>

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

        {mobileOpen && (
          <div className="border-t md:hidden">
            <nav className="container mx-auto flex flex-col gap-2 px-4 py-3">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                      isActive && "bg-muted/40 text-foreground"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default NavBarComponent;
