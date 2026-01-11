import { ProjectCard } from "@/components/project-card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Projects() {
  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">All Projects</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="WellthAi Platform"
          description="A full-featured online platform for WellthAi used by the clinical officers to manage their patients and their data"
          tags={["Next.js", "Tailwind CSS", "TypeScript"]}
          image="/weithAi2.png"
          link="https://develop.d3jfk7zm1jpg1f.amplifyapp.com/"
          githubLink="https://github.com/Namaumbo"
        />
        <ProjectCard
          title="E-commerce Platform"
          description="A full-featured online store with cart, checkout, and payment processing"
          tags={["Next.js", "Stripe", "Tailwind CSS"]}
          image="/mine.png"
          link="https://project1.example.com"
          githubLink="https://github.com/Namaumbo"
        />
        <ProjectCard
          title="Stu Music AI"
          description="A Spotify-like system where users upload an MP4 for AI song analysis and suggestions, or request analysis from a list of producers in Malawi."
          tags={["React", "AI", "MP3", "flask", "openai"]}
          image="/stu.png"
          link="#"
          githubLink="https://github.com/Namaumbo"
        />
        <ProjectCard
          title="School Management System"
          description="School Management system"
          tags={["React", "Postgres", "Laravel"]}
          image="/skul.png"
          link="#"
          githubLink="https://github.com/Namaumbo"
        />
        <ProjectCard
          title="Personal Finance Dashboard"
          description="A dashboard to track expenses, income, and investments with data visualization"
          tags={["React", "D3.js", "Express"]}
          image="/mine.png"
          link="https://project4.example.com"
          githubLink="https://github.com/Namaumbo"
        />
        <ProjectCard
          title="Social Media Analytics"
          description="A tool to track and analyze social media performance across platforms"
          tags={["Next.js", "GraphQL", "PostgreSQL"]}
          image="/mine.png"
          link="https://project5.example.com"
          githubLink="https://github.com/Namaumbo"
        />
        <ProjectCard
          title="Weather App"
          description="A beautiful weather application with forecasts and location-based data"
          tags={["React Native", "Weather API", "Geolocation"]}
          image="/mine.png"
          link="https://project6.example.com"
          githubLink="https://github.com/Namaumbo"
        />
      </div>
    </div>
  );
}
