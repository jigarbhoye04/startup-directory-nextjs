"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

const StartupForm = () => {
   const [errors, setErrors] = useState<Record<string, string>>({});
   //Record - A generic type that represents an object with string keys and the given type.

   const [pitch, setPitch] = useState("");
   const isPending = false;

   return (
      <form action={() => {}} className="startup-form">
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
         <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit your startup"}
            <SendIcon size={20} className="mt-1" />
         </Button>
      </form>
   );
};

export default StartupForm;
