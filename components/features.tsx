import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cpu, Lock, Zap } from "lucide-react";

const features = [
  {
    title: "Local Processing",
    description:
      "Run AI models directly on your Mac, ensuring privacy and speed.",
    icon: Cpu,
  },
  {
    title: "Multiple Models",
    description: "Support for various models including Llama and DeepSeek.",
    icon: Zap,
  },
  {
    title: "Open Source",
    description: "Free and open-source software, backed by the community.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 dark:bg-neutral-900">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="mb-4 h-10 w-10 text-black dark:text-white" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
