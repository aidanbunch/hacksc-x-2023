import { Loader2 } from "lucide-react";

export default function Loader({
  size = "medium",
  color,
  className,
}: {
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
}) {
  let dimensions = "";
  switch (size) {
    case "small":
      dimensions = "h-4 w-4";
      break;
    case "medium":
      dimensions = "h-6 w-6";
      break;
    case "large":
      dimensions = "h-8 w-8";
      break;
    default:
      dimensions = "h-6 w-6";
      break;
  }

  return <Loader2 className={`animate-spin ${dimensions} ${className}`} />;
}
