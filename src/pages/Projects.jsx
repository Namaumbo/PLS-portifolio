import { ProjectCard } from "@/components/project-card";
import { Link } from "react-router-dom";
import { ArrowLeft, LayoutGrid, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { GITHUB_USERNAME, SCRIPT_REPOS } from "@/data/github-scripts";
import { fetchReposByName, fetchUserRepos, isLikelyScriptRepo } from "@/lib/github";

export default function Projects() {
  const appProjects = useMemo(
    () => projects.filter((p) => (p.kind || "app") === "app"),
    []
  );

  const [scriptRepos, setScriptRepos] = useState([]);
  const [scriptsStatus, setScriptsStatus] = useState("idle"); // idle | loading | ok | error
  const [scriptsError, setScriptsError] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function loadScripts() {
      setScriptsStatus("loading");
      setScriptsError("");

      try {
        const repos =
          Array.isArray(SCRIPT_REPOS) && SCRIPT_REPOS.length
            ? await fetchReposByName(GITHUB_USERNAME, SCRIPT_REPOS)
            : await fetchUserRepos(GITHUB_USERNAME);

        const filtered =
          Array.isArray(SCRIPT_REPOS) && SCRIPT_REPOS.length
            ? repos
            : repos
                .filter((r) => !r?.fork && !r?.archived)
                .filter((r) => isLikelyScriptRepo(r))
                .slice(0, 12);

        if (!cancelled) {
          setScriptRepos(filtered);
          setScriptsStatus("ok");
        }
      } catch (e) {
        if (!cancelled) {
          setScriptRepos([]);
          setScriptsStatus("error");
          setScriptsError(e instanceof Error ? e.message : "Failed to load scripts from GitHub");
        }
      }
    }

    loadScripts();
    return () => {
      cancelled = true;
    };
  }, []);

  const scriptCards = useMemo(() => {
    return scriptRepos.map((repo) => {
      const tags = [];
      if (repo?.language) tags.push(repo.language);
      if (repo?.stargazers_count) tags.push(`★ ${repo.stargazers_count}`);

      return {
        id: `gh:${repo.name}`,
        title: repo.name,
        description: repo.description || "A small utility/script repository on GitHub.",
        tags,
        image: null,
        link: repo.homepage || "",
        githubLink: repo.html_url,
        kind: "Script",
      };
    });
  }, [scriptRepos]);

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
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Apps I&apos;ve built, plus scripts/CLI tools pulled from GitHub.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">
            <LayoutGrid className="h-4 w-4" />
            <span className="hidden sm:inline">All</span>
          </TabsTrigger>
          <TabsTrigger value="apps">
            <LayoutGrid className="h-4 w-4" />
            <span className="hidden sm:inline">Apps</span>
          </TabsTrigger>
          <TabsTrigger value="scripts">
            <Terminal className="h-4 w-4" />
            <span className="hidden sm:inline">Scripts</span>
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
            {scriptsStatus === "loading" ? (
              <p className="text-muted-foreground">Loading scripts from GitHub…</p>
            ) : null}
            {scriptsStatus === "error" ? (
              <p className="text-muted-foreground">
                Couldn&apos;t load scripts from GitHub. {scriptsError}
              </p>
            ) : null}
            {scriptsStatus === "ok" && !scriptCards.length ? (
              <p className="text-muted-foreground">
                No scripts detected yet. Add repo names to{" "}
                <code className="text-foreground">src/data/github-scripts.js</code>{" "}
                (SCRIPT_REPOS) or rename/describe repos with keywords like “cli”, “script”, “tool”.
              </p>
            ) : null}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {scriptCards.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  image={p.image}
                  link={p.link}
                  githubLink={p.githubLink}
                  kind={p.kind}
                />
              ))}
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
          {scriptsStatus === "loading" ? (
            <p className="text-muted-foreground">Loading scripts from GitHub…</p>
          ) : null}
          {scriptsStatus === "error" ? (
            <p className="text-muted-foreground">
              Couldn&apos;t load scripts from GitHub. {scriptsError}
            </p>
          ) : null}
          {scriptsStatus === "ok" && !scriptCards.length ? (
            <p className="text-muted-foreground">
              No scripts detected yet. Add repo names to{" "}
              <code className="text-foreground">src/data/github-scripts.js</code>{" "}
              (SCRIPT_REPOS) or rename/describe repos with keywords like “cli”, “script”, “tool”.
            </p>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scriptCards.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                tags={p.tags}
                image={p.image}
                link={p.link}
                githubLink={p.githubLink}
                kind={p.kind}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
