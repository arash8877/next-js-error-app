"use client";

import { useState } from "react";
import { TextField, Button, Callout } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
// Dynamic import with SSR disabled
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface iIssueForm {
  title: string;
  description: string;
}

//------------------------- NewIssuePage -------------------------
const NewIssuePage = () => {
  const [error, setError] = useState("");
  const { register, control, handleSubmit } = useForm<iIssueForm>();
  const router = useRouter();

  //-------------------- JSX --------------------
  return (
    <div className="max-w-2xl">
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-4"
        onSubmit={handleSubmit((data) => {
          try {
            console.log(data);
            setError("No API exist yet !");
            // router.push("/issues");
          } catch (error) {
            setError("Something went wrong!");
            console.log("Error: ", error);
          }
        })}
      >
        <TextField.Root
          placeholder="Title"
          radius="medium"
          {...register("title")}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {/* <SimpleMDE placeholder="Description" /> */}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
