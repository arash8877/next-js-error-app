"use client";

import { useEffect, useState } from "react";
import { TextField, Button } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
// Dynamic import with SSR disabled
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

//------------------------- NewIssuePage -------------------------
const NewIssuePage = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure this only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="max-w-2xl space-y-4">
      <TextField.Root placeholder="Title" radius="medium" />
      {isClient && <SimpleMDE placeholder="Description" />}
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
