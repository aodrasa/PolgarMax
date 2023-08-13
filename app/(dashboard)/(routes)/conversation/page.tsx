"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";
import { MessagesSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

import { useForm } from "react-hook-form";

import { formSchema } from "./constants";

const ConversationPage = () => {
    const form =useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit =async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    };

    return ( 
        <div>
            <Heading 
            title="Conversation"
            description="Start conversation with gpt-4 for free"
            icon={MessagesSquare}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                
            </div>
        </div>
     );
}
 
export default ConversationPage;