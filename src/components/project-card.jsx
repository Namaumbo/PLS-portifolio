import { ArrowUpRight, Github } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function normalizeLink(link) {
  return typeof link === "string" && link.length
    ? /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(link)
      ? link
      : `https://${link}`
    : null;
}

export function ProjectCard({
  title,
  description,
  tags = [],
  image,
  link,
  githubLink,
  kind,
}) {
  const safeLink = normalizeLink(link);
  const safeGithubLink = normalizeLink(githubLink);
  return (
    <Card className="overflow-hidden group bg-black border-primary">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {(safeLink || safeGithubLink) && (
          <div className="absolute inset-0 flex items-end justify-end gap-3 bg-gradient-to-t from-background/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {safeGithubLink && (
              <a
                href={safeGithubLink}
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary"
                aria-label={`Open ${title} source code on GitHub`}
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {safeLink && (
              <a
                href={safeLink}
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary"
                aria-label={`Open ${title}`}
              >
                <ArrowUpRight className="h-6 w-6" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="p-4 bg-black">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-white">{title}</CardTitle>
            {kind ? (
              <Badge variant="secondary" className="shrink-0">
                {kind}
              </Badge>
            ) : null}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground pb-3">{description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex w-full flex-col gap-3">
            {tags.length ? (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}

            {(safeLink || safeGithubLink) && (
              <div className="flex flex-wrap gap-3 mt-3">
                {safeLink && (
                  <a
                    href={safeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    aria-label={`Open ${title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live
                  </a>
                )}
                {safeGithubLink && (
                  <a
                    href={safeGithubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    aria-label={`Open ${title} source code on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
              </div>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
