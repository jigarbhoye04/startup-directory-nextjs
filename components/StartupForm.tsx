"use client";

import React, { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";
import { formSchema } from "@/lib/validation";
import z from "zod";
import { useToast } from "@/hooks/use-toast";
import { createPitch } from "@/lib/actions";
import { useRouter } from "next/navigation";

const StartupForm = () => {
   const [errors, setErrors] = useState<Record<string, string>>({});
   //Record - A generic type that represents an object with string keys and the given type.

   const toast = useToast();
   const router = useRouter();
   const [pitch, setPitch] = useState("");

   const handleSubmit = async (prevState: any, formData: FormData) => {
      try {
         const formValues = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            category: formData.get("category") as string,
            link: formData.get("link") as string,
            pitch: pitch,
         };

         await formSchema.parseAsync(formValues);
         console.log(formValues);

         //createPitch is a function that sends the form data to the server - a new mutation function

         const result = (await createPitch(prevState, formData, pitch)) as {
            status: string;
            id: string;
         };
         if (result.status === "SUCCESS") {
            toast.toast({
               title: "Success",
               description: "Your startup has been submitted successfully",
            });

            //redirect to the startup page
            router.push("/startup/${result._id}");
         }

         return result;
      } catch (error) {
         if (error instanceof z.ZodError) {
            const fieldErrors = error.flatten().fieldErrors;
            setErrors(fieldErrors as unknown as Record<string, string>);

            toast.toast({
               title: "Error",
               description: "Please check the form for errors",
               variant: "destructive",
            });

            return {
               ...prevState,
               error: "Invalid form data",
               status: "ERROR",
            };
         }

         //unexpected error
         toast.toast({
            title: "Error",
            description: "An unknown error occurred",
            variant: "destructive",
         });

         return {
            ...prevState,
            error: "An unknown error occurred",
            status: "ERROR",
         };
      }
   };

   const [state, formAction, isPending] = useActionState(handleSubmit, {
      error: "",
      status: "initial",
   });

   return (
      <form action={formAction} className="startup-form">
         <div>
            <label htmlFor="title" className="startup-form_label">
               Title
            </label>
            <Input
               id="title"
               name="title"
               type="text"
               className="startup-form_input"
               required
               placeholder="Startup Title"
            />

            {errors.title && (
               <p className="startup-form_error">{errors.title}</p>
            )}
         </div>

         <div>
            <label htmlFor="description" className="startup-form_label">
               Description
            </label>
            <Textarea
               id="description"
               name="description"
               className="startup-form_textarea"
               required
               placeholder="Startup Description"
            />

            {errors.description && (
               <p className="startup-form_error">{errors.description}</p>
            )}
         </div>

         <div>
            <label htmlFor="category" className="startup-form_label">
               Category
            </label>
            <Input
               id="category"
               name="category"
               placeholder="Startup Category (e.g. Tech, Health)"
               className="startup-form_input"
               required
            />

            {errors.category && (
               <p className="startup-form_error">{errors.category}</p>
            )}
         </div>

         <div>
            <label htmlFor="link" className="startup-form_label">
               Image URL
            </label>
            <Input
               id="link"
               name="link"
               type="text"
               placeholder="Startup Image URL"
               className="startup-form_input"
               required
            />

            {errors.link && <p className="startup-form_error">{errors.link}</p>}
         </div>

         <div data-color-mode="light">
            <label htmlFor="pitch" className="startup-form_label">
               Pitch
            </label>
            <MDEditor
               value={pitch}
               onChange={(value) => setPitch(value as string)}
               id="pitch"
               preview="edit"
               height={300}
               style={{
                  borderRadius: "5px",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
               }}
               textareaProps={{
                  placeholder: "Briefly describe your startup",
               }}
               previewOptions={{
                  disallowedElements: ["style"],
               }}
            />
            {errors.pitch && (
               <p className="startup-form_error">{errors.pitch}</p>
            )}
         </div>
         <Button
            type="submit"
            className="startup-form_btn text-white"
            disabled={isPending}
         >
            {isPending ? "Submitting..." : "Submit your startup"}
            <SendIcon size={20} className="mt-1" />
         </Button>
      </form>
   );
};

export default StartupForm;

//learned about zod and how to use it to validate form data
//useActionState is a custom hook that manages form state and submission
//useToast is a custom hook that shows toast notifications
//useRouter is a hook that provides access to the router object
//MDEditor is a markdown editor component
