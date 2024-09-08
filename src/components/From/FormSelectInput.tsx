import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TFormSelectInput = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
  required?: boolean;
};

function FormSelectInput({
  name,
  label,
  options,
  placeholder = "",
}: TFormSelectInput) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            size="large"
            options={options}
            placeholder={placeholder}
          />
          <p style={{ color: "red" }}>{error?.message}</p>
        </Form.Item>
      )}
    />
  );
}

export default FormSelectInput;
