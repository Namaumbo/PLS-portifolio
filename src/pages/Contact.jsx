import { Link } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="m-auto container py-12 relative overflow-hidden">
      {/* animated background objects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="pls-anim-float absolute -top-10 -left-12 h-56 w-56 rounded-full bg-red-500/10 blur-2xl" />
        <div className="pls-anim-float-slow absolute top-24 -right-16 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pls-anim-drift absolute bottom-12 left-10 h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
        <div className="pls-anim-spin absolute bottom-24 right-20 h-28 w-28 rounded-full border border-red-500/20" />
        <div className="pls-anim-drift absolute top-44 left-1/2 h-14 w-14 -translate-x-1/2 rotate-12 rounded-full bg-red-500/15 blur-md" />
        <div className="pls-anim-float absolute bottom-10 left-1/3 h-10 w-10 rounded-lg bg-white/10 blur-[1px]" />
      </div>

      {/* keep consistent with About/Skills/Projects pages */}
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="ml-20">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <p className="text-muted-foreground mt-1">
            Let&apos;s build something great together.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center md:flex-row flex-col gap-[14em]">
        <div className="space-y-4">
          <p className="text-muted-foreground">Hello, my name is</p>

          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
            Daelo Namaumbo
          </h2>

          <p className="text-lg text-muted-foreground">
            And I&apos;m a{" "}
            <span className="text-red-500 font-semibold">
              Full Stack Developer
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="bg-foreground" asChild>
              <a href="mailto:alex@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Hire me
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a href="https://calendly.com" target="_blank" rel="noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>

          <div className="flex gap-2 pt-6">
            <Button
              className="bg-secondary"
              asChild
              size="icon"
              variant="ghost"
            >
              <a
                href="https://github.com/Namaumbo"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>

            <Button
              className="bg-secondary"
              asChild
              size="icon"
              variant="ghost"
            >
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>

            <Button
              className="bg-secondary"
              asChild
              size="icon"
              variant="ghost"
            >
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[320px] sm:w-[420px]">
            <div className="absolute -inset-6 bg-red-500/10 blur-2xl"></div>
            <img
              src="/profile.png"
              alt="Developer profile"
              width={420}
              height={460}
              loading="eager"
              decoding="async"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
      