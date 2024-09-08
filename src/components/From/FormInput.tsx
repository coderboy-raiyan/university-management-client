import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

function FormInput({
  type,
  name,
  label,
  placeholder = "",
}: {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Input
            {...field}
            name={name}
            id={name}
            required
            type={type}
            placeholder={placeholder}
          />
        </Form.Item>
      )}
    />
  );
}

export default FormInput;
