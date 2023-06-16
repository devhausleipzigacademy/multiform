import React from "react";
import Input from "../shared/Input";
import { MdOutlineTitle } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import { useTodoContext } from "@/context/TodoProvider";

function Todo() {
  const { register, formState } = useTodoContext();

  return (
    <div className="px-6 py-4 flex flex-col gap-2">
      <Input
        id="title"
        type="text"
        placeholder="some title"
        icon={<MdOutlineTitle color="white" />}
        error={formState.errors.title}
        {...register("title")}
      />
      <Input
        id="tags"
        type="text"
        placeholder="sport, coding, gaming"
        icon={<AiFillTag color="white" />}
        error={formState.errors.tags}
        {...register("tags")}
      />
      <Input
        id="date"
        type="date"
        icon={<BsCalendarDateFill color="white" />}
        error={formState.errors.date}
        {...register("date")}
      />
    </div>
  );
}

export default Todo;
