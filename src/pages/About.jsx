
import {Link} from "react-router-dom"
import { ArrowLeft, Briefcase, GraduationCap, Heart, MapPin, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">About Me</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img src="/placeholder.svg?height=96&width=96" alt="Developer profile" className="object-cover" />
              </div>
              <div>
                <CardTitle>Alex Johnson</CardTitle>
                <CardDescription>Full Stack Developer</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>Available for hire</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="bio">
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Bio</span>
              </TabsTrigger>
              <TabsTrigger value="experience">
                <Briefcase className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="education">
                <GraduationCap className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="interests">
                <Heart className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Interests</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bio" className="mt-6 space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h2>Hello, I'm Alex</h2>
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience building web applications that
                  solve real-world problems. My journey in software development began during my college years when I
                  built my first web application for a local non-profit organization.
                </p>
                <p>
                  Since then, I've worked with startups and established companies to create innovative solutions that
                  help businesses grow and users accomplish their goals efficiently. I specialize in React, Next.js, and
                  Node.js, with a strong focus on creating performant, accessible, and visually appealing user
                  interfaces.
                </p>
                <p>
                  My approach to development is centered around understanding the user's needs and business goals. I
                  believe that great software is not just about writing code, but about solving problems in the most
                  elegant and efficient way possible.
                </p>
                <h3>My Philosophy</h3>
                <ul>
                  <li>
                    <strong>User-Centered Design:</strong> I believe in putting users first and creating experiences
                    that are intuitive and enjoyable.
                  </li>
                  <li>
                    <strong>Clean Code:</strong> I strive to write maintainable, well-documented code that other
                    developers can easily understand and build upon.
                  </li>
                  <li>
                    <strong>Continuous Learning:</strong> The tech landscape is always evolving, and I'm committed to
                    staying up-to-date with the latest tools and best practices.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> I thrive in collaborative environments where ideas are shared freely
                    and everyone's input is valued.
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Core Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="React" />
                      <SkillBadge name="Next.js" />
                      <SkillBadge name="TypeScript" />
                      <SkillBadge name="Tailwind CSS" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="Node.js" />
                      <SkillBadge name="Express" />
                      <SkillBadge name="GraphQL" />
                      <SkillBadge name="REST APIs" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Database</h4>
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
              <Timeline
                items={[
                  {
                    title: "Senior Frontend Developer",
                    company: "TechCorp Inc.",
                    date: "2021 - Present",
                    description:
                      "Lead the frontend development team in building a SaaS platform used by over 10,000 customers. Implemented performance optimizations that improved page load times by 40%.",
                    skills: ["React", "Next.js", "TypeScript", "GraphQL"],
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Startup Innovations",
                    date: "2019 - 2021",
                    description:
                      "Developed and maintained multiple client projects. Built a custom e-commerce platform that increased sales by 25% for a key client.",
                    skills: ["React", "Node.js", "MongoDB", "AWS"],
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
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <Timeline
                items={[
                  {
                    title: "Master of Computer Science",
                    company: "Stanford University",
                    date: "2015 - 2017",
                    description:
                      "Specialized in Human-Computer Interaction and Web Technologies. Thesis on 'Improving User Experience in Progressive Web Applications'.",
                    skills: [],
                  },
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
                    skills: ["AWS Certified Developer", "Google Cloud Certified", "Advanced React Patterns"],
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="interests" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Outdoor Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      When I'm not coding, I love hiking and exploring nature. I've hiked over 20 trails in California
                      and aim to complete the Pacific Crest Trail someday.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Reading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I'm an avid reader of science fiction and technical books. Some of my favorites include "Dune" by
                      Frank Herbert and "Clean Code" by Robert C. Martin.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Open Source</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I contribute to open source projects in my free time. I believe in giving back to the community
                      that has taught me so much.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Photography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I enjoy landscape and street photography. It helps me see the world from different perspectives
                      and inspires my design work.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/placeholder.svg?height=48&width=48" alt="Sarah Johnson" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">CTO at TechCorp</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Alex is one of the most talented developers I've worked with. Their attention to detail and
                  problem-solving skills are exceptional."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/placeholder.svg?height=48&width=48" alt="Michael Chen" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Product Manager at Startup Innovations</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Working with Alex was a pleasure. They not only delivered high-quality code but also provided
                  valuable insights that improved our product."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/placeholder.svg?height=48&width=48" alt="Emily Rodriguez" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">Emily Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Lead Designer at Digital Agency</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Alex has a rare combination of technical expertise and design sensibility. They can take a design and
                  bring it to life with perfect attention to detail."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

