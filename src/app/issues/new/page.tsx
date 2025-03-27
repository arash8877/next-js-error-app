"use client";

import { TextField, Button } from "@radix-ui/themes";
import axios from "axios";
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
  const { register, control, handleSubmit } = useForm<iIssueForm>();
  const router = useRouter();


  //-------------------- JSX --------------------
  return (
    <form
      className="max-w-2xl space-y-4"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        router.push("/issues");
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
  );
};

export default NewIssuePage;
