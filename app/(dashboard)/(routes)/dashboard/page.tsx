import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageSquare, Music, Image, Video, Code } from "lucide-react";

const DashboardPage = () => {

    const tools = [
        {
            label: "Conversation",
            icon: MessageSquare,
            color: "text-violet-500",
            bgColor: "bg-violet-500/10",
            href: "/coversation"
        },
        {
            label: "Music Generation",
            icon: Music,
            color: "text-emerald-500",
            bgColor: "bg-emerald-500/10",
            href: "/music"
        },
        {
            label: "Image Generation",
            icon: Image,
            color: "text-emerald-700",
            bgColor: "bg-emerald-700/10",
            href: "/image"
        },
        {
            label: "Video Generation",
            icon: Video,
            color: "text-emerald-700",
            bgColor: "bg-emerald-700/10",
            href: "/video"
        },
        {
            label: "Code Generation",
            icon: Code,
            color: "text-emerald-700",
            bgColor: "bg-emerald-700/10",
            href: "/code"
        },
    ]

    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:tzxt-4xl font-bold text-center">
                    Expore the power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smarrtest AI - Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                        key={tool.href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md translation cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;