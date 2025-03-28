"use client";

import { useState } from "react";
import { TextField, Button, Callout } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
// Dynamic import with SSR disabled
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/components/ValidationSchemas";
import { z } from "zod";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";

type iIssueForm = z.infer<typeof createIssueSchema>;

//------------------------- NewIssuePage -------------------------
const NewIssuePage = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<iIssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const handleFormSubmit = handleSubmit((data) => {
    try {
      setIsSubmitting(true);
      console.log(data);
      setError("No API exist yet !");
      // router.push("/issues");
    } catch (error) {
      setIsSubmitting(false);
      setError("Something went wrong!");
      console.log("Error: ", error);
    }
  });

  //-------------------- JSX --------------------
  return (
    <div className="max-w-2xl">
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-8" onSubmit={handleFormSubmit}>
        <TextField.Root
          placeholder="Title"
          radius="medium"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              placeholder="Description"
              {...field}
              options={{ status: false }}
            />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        {/* <SimpleMDE placeholder="Description" /> */}
        <Button disabled={isSubmitting}>
          Submit New Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
