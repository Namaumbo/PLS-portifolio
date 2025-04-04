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
                src="/placeholder.svg?height=96&width=96"
                alt="Developer profile"
                className="object-cover"
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
              <Button className="bg-secondary" asChild size="icon" variant="ghost">
                <Link href="https://github.com/Namaumbo" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button  className="bg-secondary"  asChild size="icon" variant="ghost">
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button   className="bg-secondary" asChild size="icon" variant="ghost">
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          <div id="about" className="space-y-4">
            <h2 className="text-secondary text-3xl font-bold tracking-tighter md:text-4xl/tight">
              About Me
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate full-stack developer with 5+ years of experience
              building web applications. I specialize in React, Next.js, and
              Node.js, with a strong focus on creating performant, accessible,
              and visually appealing user interfaces.
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
              <SkillBadge name="GraphQL" />
              <SkillBadge name="PostgreSQL" />
              <SkillBadge name="MongoDB" />
              <SkillBadge name="AWS" />
              <SkillBadge name="Docker" />
              <SkillBadge name="Git" />
              <SkillBadge name="CI/CD" />
            </div>
          </div>

          <div id="projects" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured online store with cart, checkout, and payment processing"
                tags={["Next.js", "Stripe", "Tailwind CSS"]}
                image="/placeholder.svg?height=200&width=300"
                link="https://project1.example.com"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task manager with real-time updates and team features"
                tags={["React", "Firebase", "TypeScript"]}
                image="/placeholder.svg?height=200&width=300"
                link="https://project2.example.com"
              />
              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered tool that generates marketing content based on prompts"
                tags={["OpenAI", "Node.js", "MongoDB"]}
                image="/placeholder.svg?height=200&width=300"
                link="https://project3.example.com"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div id="contact" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get In Touch
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="mailto:alex@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://calendly.com" target="_blank">
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
