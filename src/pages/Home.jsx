import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="m-auto container py-24 sm:py-32 space-y-8 md:space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <img
                src="/mine.png"
                alt="Developer profile"
                className="object-cover "
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Daelo Namaumbo
              </h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Building innovative web experiences with modern technologies
            </p>
            <div className="flex gap-4">
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

          <div id="about" className="space-y-4">
            <h2 className="text-secondary text-3xl font-bold tracking-tighter md:text-4xl/tight">
              About Me
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate full-stack developer with 3+ years of experience
              building web applications. I specialize in React, Next.js, and
              Node.js, with a strong focus on creating performant, accessible,
              and visually appealing user interfaces.
            </p>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              On the backend, I'm equally enthusiastic—I've built robust APIs
              and services using Java (Spring Boot), Python (Flask), and
              JavaScript (Express and Node.js), crafting scalable solutions for
              a variety of use cases.
            </p>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I'm not coding, you can find me hiking, reading sci-fi
              novels, or experimenting with new technologies. I'm always looking
              for new challenges and opportunities to grow as a developer.
            </p>
          </div>

          <div id="skills" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-secondary">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="React" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="TypeScript" />
              <SkillBadge name="Node.js" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="PostgreSQL" />
              <SkillBadge name="MongoDB" />
              <SkillBadge name="Docker" />
              <SkillBadge name="Git" />
              <SkillBadge name="Java" />
            </div>
          </div>

          <div id="projects" className="space-y-4">
            <h2 className="text-3xl text-secondary font-bold tracking-tighter md:text-4xl/tight">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="WellthAi Platform"
                description="A full-featured online platform for WellthAi used by the clinical officers to manage their patients and their data"
                tags={["Next.js", "Tailwind CSS", "TypeScript"]}
                image="/weithAi2.png"
                link="https://develop.d3jfk7zm1jpg1f.amplifyapp.com/"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task manager with real-time updates and team features"
                tags={["React", "Firebase", "TypeScript"]}
                image="/mine.png"
                link="https://project2.example.com"
              />
              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered tool that generates marketing content based on prompts"
                tags={["OpenAI", "Node.js", "MongoDB"]}
                image="/mine.png"
                link="https://project3.example.com"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button className="bg-foreground text-white" asChild>
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div id="contact" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-secondary">
              Get In Touch
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-foreground" asChild>
                <a href="mailto:daelo.namaumbo@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://calendly.com" target="_blank" rel="noreferrer">
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
