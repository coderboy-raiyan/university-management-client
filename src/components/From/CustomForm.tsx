import { Form } from "antd";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TCustomFrom = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  defaultValues?: Record<string, any>;
  resolver?: any;
};

function CustomForm({
  onSubmit,
  children,
  defaultValues = {},
  resolver = {},
}: TCustomFrom) {
  const methods = useForm({ defaultValues, resolver });
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
}

export default CustomForm;
