import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ title, description, tags, image, link }) {
  const safeLink =
    typeof link === "string" && link.length
      ? /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(link)
        ? link
        : `https://${link}`
      : "#";
  return (
    <Card className="overflow-hidden group bg-black border-primary">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          <a
            href={safeLink}
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-primary"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="p-4 bg-black">
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground pb-3">{description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
