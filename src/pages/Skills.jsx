import { Link } from "react-router-dom";
import { ArrowLeft, Database, Layers, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBadge } from "@/components/skill-badge";

export default function SkillsPage() {
  return (
    <div className="m-auto container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Skills</h1>
          <p className="text-muted-foreground mt-1">
            Tools and technologies I use across the stack.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-card/20 backdrop-blur supports-[backdrop-filter]:bg-card/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Backend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="Python (Flask)" />
              <SkillBadge name="Java (Spring Boot)" />
              <SkillBadge name="JavaScript (Express)" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/20 backdrop-blur supports-[backdrop-filter]:bg-card/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Databases & Storage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="MySQL" />
              <SkillBadge name="MongoDB" />
              <SkillBadge name="Elasticsearch" />
              <SkillBadge name="PostgreSQL" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/20 backdrop-blur supports-[backdrop-filter]:bg-card/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Frontend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="PHP (Laravel)" />
              <SkillBadge name="JavaScript (React)" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="Tailwind CSS" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


