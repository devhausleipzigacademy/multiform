import React from "react";
import Input from "../shared/Input";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { useTodoContext } from "@/context/TodoProvider";

function PersonalInformation() {
  const { register, formState } = useTodoContext();

  return (
    <div className="px-6 py-4 flex flex-col gap-2">
      <Input
        id="name"
        icon={<BsFillPersonFill color="white" />}
        type="text"
        placeholder="julian vogel"
        error={formState.errors.name}
        {...register("name")}
      />
      <Input
        id="email"
        icon={<AiOutlineMail color="white" />}
        placeholder="julian@web.de"
        type="email"
        error={formState.errors.email}
        {...register("email")}
      />
      <Input
        id="phone"
        icon={<BsFillMegaphoneFill color="white" />}
        placeholder="089/315 43 57"
        type="tel"
        error={formState.errors.phone}
        {...register("phone")}
      />
    </div>
  );
}

export default PersonalInformation;
