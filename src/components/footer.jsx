import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function FooterComponent() {
  return (
    <>
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daelo Namaumbo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button asChild size="icon" variant="ghost">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
