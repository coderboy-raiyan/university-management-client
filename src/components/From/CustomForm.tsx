import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

function CustomForm({
  onSubmit,
  children,
  defaultValues = {},
}: {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  defaultValues?: Record<string, any>;
}) {
  const methods = useForm({ defaultValues });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default CustomForm;
