import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "../components/timeliine";
import GlowingCard from "../components/glowing-card";

export default function AboutPage() {
  return (
    <div className="m-auto container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">About Me</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3 ">
        <div className="md:col-span-1">
          <GlowingCard />
        </div>

        <div className="md:col-span-2 rounded-xl border border-border/60 bg-card/20 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/10 sm:p-8">
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="bio">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Bio</span>
              </TabsTrigger>
              <TabsTrigger value="experience">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="education">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="interests">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Interests</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bio" className="mt-6 space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-white">Hello, I'm Daelo</h2>
                <p className="text-white">
                  I'm a passionate full-stack developer with over 3 years of
                  experience building web applications that solve real-world
                  problems. My journey in software development began during my
                  college years when I built my first web application for a
                  local non-profit organization.
                </p>
                <p className="text-white">
                  Since then, I've worked with startups and established
                  companies to create innovative solutions that help businesses
                  grow and users accomplish their goals efficiently. I
                  specialize in React, Next.js, and Node.js, with a strong focus
                  on creating performant, accessible, and visually appealing
                  user interfaces.
                </p>
                <p className="text-white">
                  My approach to development is centered around understanding
                  the user's needs and business goals. I believe that great
                  software is not just about writing code, but about solving
                  problems in the most elegant and efficient way possible.
                </p>
                <h3 className="text-white">My Philosophy</h3>
                <ul>
                  <li className="text-white">
                    <strong>User-Centered Design:</strong> I believe in putting
                    users first and creating experiences that are intuitive and
                    enjoyable.
                  </li>
                  <li className="text-white">
                    <strong>Clean Code:</strong> I strive to write maintainable,
                    well-documented code that other developers can easily
                    understand and build upon.
                  </li>
                  <li className="text-white">
                    <strong>Continuous Learning:</strong> The tech landscape is
                    always evolving, and I'm committed to staying up-to-date
                    with the latest tools and best practices.
                  </li>
                  <li className="text-white">
                    <strong>Collaboration:</strong> I thrive in collaborative
                    environments where ideas are shared freely and everyone's
                    input is valued.
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Core Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="React" />
                      <SkillBadge name="Next.js" />
                      <SkillBadge name="TypeScript" />
                      <SkillBadge name="Tailwind CSS" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="Node.js" />
                      <SkillBadge name="Express" />
                      <SkillBadge name="GraphQL" />
                      <SkillBadge name="REST APIs" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="PostgreSQL" />
                      <SkillBadge name="MongoDB" />
                      <SkillBadge name="Redis" />
                      <SkillBadge name="Prisma" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-6">
              <div className="prose dark:prose-invert max-w-none">
                <Timeline
                  items={[
                    {
                      title: "Full-Stack Developer",
                      company: "Credit Data CRB | MW",
                      date: "2024 - Present",
                      description:
                        "Developed and maintained the Credit Data CRB systems using Java, PHP and Javascript",
                      skills: [
                        "Java",
                        "Spring Boot",
                        "PHP",
                        "Javascript",
                        "React",
                        "Next.js",
                        "Node.js",
                        "Tailwind CSS",
                        "PostgreSQL",
                        "MongoDB",
                        "Redis",
                        "Docker",
                        "Git",
                        "ES",
                        "Agile",
                        "Scrum",
                      ],
                    },
                    {
                      title: "Full-stack Developer",
                      company: "Dext Consultium | Ghana",
                      date: "2024- present",
                      description:
                        "Developed and maintained AI platform for clinical officers and admin panel to manage the platform and the users.",
                      skills: [
                        "next.js",
                        "Node.js",
                        "MongoDB",
                        "Tailwind CSS",
                        "Express",
                      ],
                    },
                    {
                      title: "Full Stack PHP Intern",
                      company: "Zomba Baptist Church",
                      date: "2019 - 2020",
                      description:
                        "Introduced to the Laravel ecosystem while patching and improving internal inventory systems.",
                      skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
                    },
                    {
                      title: "Junior Web Developer",
                      company: "Digital Agency",
                      date: "2017 - 2019",
                      description:
                        "Collaborated with designers and senior developers to build responsive websites and web applications for various clients.",
                      skills: ["JavaScript", "HTML/CSS", "PHP", "WordPress"],
                    },
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <Timeline
                items={[
                  // {
                  //   title: "Master of Computer Science",
                  //   company: "Stanford University",
                  //   date: "2015 - 2017",
                  //   description:
                  //     "Specialized in Human-Computer Interaction and Web Technologies. Thesis on 'Improving User Experience in Progressive Web Applications'.",
                  //   skills: [],
                  // },
                  {
                    title: "Bachelor of Science in Computer Science",
                    company: "University of California, Berkeley",
                    date: "2011 - 2015",
                    description:
                      "Graduated with honors. Active member of the Web Development Club and participated in multiple hackathons.",
                    skills: [],
                  },
                  {
                    title: "Online Courses & Certifications",
                    company: "Various Platforms",
                    date: "Ongoing",
                    description:
                      "Continuously expanding my knowledge through courses on platforms like Coursera, Udemy, and Frontend Masters.",
                    skills: [
                      "AWS Certified Developer",
                      "Google Cloud Certified",
                      "Advanced React Patterns",
                    ],
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="interests" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border-border/60 bg-card/20 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/10">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Outdoor Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      When I'm not coding, I love hiking and exploring nature.
                      I've hiked over 20 trails in California and aim to
                      complete the Pacific Crest Trail someday.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-card/20 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/10">
                  <CardHeader>
                    <CardTitle className="text-white">Reading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      I'm an avid reader of science fiction and technical books.
                      Some of my favorites include "Dune" by Frank Herbert and
                      "Clean Code" by Robert C. Martin.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-card/20 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/10">
                  <CardHeader>
                    <CardTitle className="text-white">Open Source</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      I contribute to open source projects in my free time. I
                      believe in giving back to the community that has taught me
                      so much.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-card/20 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/10">
                  <CardHeader>
                    <CardTitle className="text-white">Photography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      I enjoy landscape and street photography. It helps me see
                      the world from different perspectives and inspires my
                      design work.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Sarah Johnson"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">
                      CTO at TechCorp
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Alex is one of the most talented developers I've worked with.
                  Their attention to detail and problem-solving skills are
                  exceptional."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Michael Chen"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">
                      Product Manager at Startup Innovations
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Working with Alex was a pleasure. They not only delivered
                  high-quality code but also provided valuable insights that
                  improved our product."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Emily Rodriguez"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Emily Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">
                      Lead Designer at Digital Agency
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Alex has a rare combination of technical expertise and design
                  sensibility. They can take a design and bring it to life with
                  perfect attention to detail."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>
  );
}
