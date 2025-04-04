import { Badge } from "@/components/ui/badge";

export function SkillBadge({ name }) {
  return (
    <Badge variant="outline" className="px-3 py-1 text-sm text-secondary">
      {name}
    </Badge>
  );
}
