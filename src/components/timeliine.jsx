import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillBadge } from "@/components/skill-badge"



export function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <Card key={index} className="relative overflow-hidden">
          <div className="absolute top-0 left-8 bottom-0 w-0.5 bg-muted z-0" />
          <CardHeader className="relative z-10 flex flex-row items-start gap-4 pb-2">
            <div className="mt-1 h-4 w-4 rounded-full bg-primary" />
            <div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.company} | {item.date}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 pl-12">
            <p className="text-muted-foreground mb-3">{item.description}</p>
            {item.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

