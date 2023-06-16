import React from "react";
import Button from "../shared/Button";
import { useTodoContext } from "@/context/TodoProvider";
import clsx from "clsx";

function Content() {
  const { register, formState } = useTodoContext();

  return (
    <div className="px-6 py-4 flex flex-col gap-2">
      <label htmlFor="content" className="flex flex-col gap-4">
        <span className="text-white text-xl">Content</span>
        <textarea
          className={clsx(
            "rounded-md p-2",
            formState.errors.content && "border-2 border-red"
          )}
          id="content"
          cols={45}
          rows={5}
          {...register("content")}
        ></textarea>
        {formState.errors.content && (
          <small className="text-red">{formState.errors.content.message}</small>
        )}
      </label>
      <Button variant="primary" type="submit">
        submit
      </Button>
    </div>
  );
}

export default Content;
