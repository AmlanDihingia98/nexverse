import { Bot, Zap, Shield, BarChart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "Advanced AI Agents",
    description: "Develop sophisticated AI agents capable of complex decision-making and natural language processing.",
    icon: Bot,
  },
  {
    name: "Workflow Automation",
    description: "Quickly iterate and test your AI models with our intuitive development environment.",
    icon: Zap,
  },
  {
    name: "Website Deployment",
    description: "Deploy your AI agents with confidence using our secure and scalable infrastructure.",
    icon: Shield,
  },
  {
    name: "Digital Marketing",
    description: "Gain valuable insights into your AI agents' performance with advanced analytics tools.",
    icon: BarChart,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.name} className="transition-all hover:shadow-lg">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}