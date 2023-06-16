"use client";

import { TodoInput, TodoInputSchema } from "@/types/todo";
import { createContext, use, useContext, useEffect, useState } from "react";
import { FormState, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
type Props = {
  children: React.ReactNode;
};
type OnSubmit = (data: TodoInput) => void;

type TodoContextType = {
  step: number;
  increaseStep: () => void;
  decreaseStep: () => void;
  register: UseFormRegister<TodoInput>;
  handleSubmit: (onSubmit: OnSubmit) => (e: React.BaseSyntheticEvent) => void;
  formState: FormState<TodoInput>;
  reset: () => void;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export const useTodoContext = () => {
  return useContext(TodoContext);
};

function TodoProvider({ children }: Props) {
  const [step, setStep] = useState(1);

  const { register, handleSubmit, formState, reset, trigger, watch } =
    useForm<TodoInput>({
      resolver: zodResolver(TodoInputSchema),
      mode: "onChange",
      reValidateMode: "onBlur",
    });

  async function increaseStep() {
    const fields = watch();
    const keys = Object.keys(fields);
    const isStepValid = await trigger(keys as any);
    if (step >= 3 || !isStepValid) return;
    setStep(step + 1);
  }

  async function decreaseStep() {
    const fields = watch();
    const keys = Object.keys(fields);
    const isStepValid = await trigger(keys as any);

    if (step <= 1 || !isStepValid) return;
    setStep(step - 1);
  }

  return (
    <TodoContext.Provider
      value={{
        step,
        increaseStep,
        decreaseStep,
        register,
        handleSubmit,
        formState,
        reset,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
