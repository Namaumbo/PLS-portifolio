import { ProjectCard } from "@/components/project-card";
import { Link } from "react-router-dom";
import { ArrowLeft, LayoutGrid, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const appProjects = useMemo(
    () => projects.filter((p) => (p.kind || "app") === "app"),
    []
  );

  return (
    <div className="m-auto container py-12">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button variant="ghost" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Apps I&apos;ve built, plus scripts/CLI tools pulled from GitHub.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">
            <LayoutGrid className="h-4 w-4 text-white" />
            <span className="hidden sm:inline text-white">All</span>
          </TabsTrigger>
          <TabsTrigger value="apps">
            <LayoutGrid className="h-4 w-4 text-white" />
            <span className="hidden sm:inline text-white">Apps</span>
          </TabsTrigger>
          <TabsTrigger value="scripts">
            <Terminal className="h-4 w-4 text-white" />
            <span className="hidden sm:inline text-white">Scripts</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Apps</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {appProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  image={p.image}
                  link={p.link}
                  githubLink={p.githubLink}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Scripts</h2>

            {/* //scripts cards here */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                key="python"
                title="Python"
                description="automated reporting system for MarketSA that generates and distributes financial/sales reports (ABSA, FNB, Standard Bank, Hollard, etc.) from multiple databases via scheduled tasks and SFTP/email delivery"
                tags={["Python"]}
                image="https://img.icons8.com/3d-fluency/94/python.png"
                link="#"
                githubLink="https://github.com/MarketSA/weekly_report_for_gen.git"
              />

              {/* <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/python.png" alt="python"/> */}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="apps" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {appProjects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                tags={p.tags}
                image={p.image}
                link={p.link}
                githubLink={p.githubLink}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scripts" className="mt-6">
          <ProjectCard
            key="python"
            title="Python"
            description="automated reporting system for MarketSA that generates and distributes financial/sales reports (ABSA, FNB, Standard Bank, Hollard, etc.) from multiple databases via scheduled tasks and SFTP/email delivery"
            tags={["Python"]}
            image="https://img.icons8.com/3d-fluency/94/python.png"
            link="#"
            githubLink="https://github.com/MarketSA/weekly_report_for_gen.git"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
