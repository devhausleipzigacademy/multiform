"use client";

import { useTodoContext } from "@/context/TodoProvider";
import Button from "../shared/Button";
import PersonalInformation from "./PersonalInformation";
import Todo from "./Todo";
import Content from "./Content";

function TodoForm() {
  const { step, increaseStep, decreaseStep, handleSubmit, formState } =
    useTodoContext();
  function onSubmitHandler() {
    console.log("submit");
  }
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <PersonalInformation />
          </div>
        );
      case 2:
        return (
          <div>
            <Todo />
          </div>
        );
      case 3:
        return (
          <div>
            <Content />
          </div>
        );
      default:
        return (
          <div>
            <PersonalInformation />
          </div>
        );
    }
  };

  return (
    <div>
      <h1 className="text-slate-800 text-3xl text-center my-6">Todo Form</h1>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-slate-800 max-w-[950px] rounded-md shadow-md"
      >
        {renderStep()}
      </form>
      <div className="flex m-8 gap-4">
        {step > 1 && (
          <Button
            variant="secondary"
            onClick={decreaseStep}
            disabled={Object.keys(formState.errors).length !== 0}
          >
            back
          </Button>
        )}
        {step < 3 && (
          <Button
            variant="primary"
            onClick={increaseStep}
            disabled={Object.keys(formState.errors).length !== 0}
          >
            next
          </Button>
        )}
      </div>
    </div>
  );
}

export default TodoForm;
