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
  resolver = null,
}: TCustomFrom) {
  const formConfig: any = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form
        layout="vertical"
        onFinish={methods.handleSubmit((data) => {
          onSubmit(data);
          methods.reset();
        })}
      >
        {children}
      </Form>
    </FormProvider>
  );
}

export default CustomForm;
