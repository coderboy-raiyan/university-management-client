import { Form, Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";
import { TFormInputSelectOptions } from "../../types";

type TFormSelectInput = {
  name: string;
  label: string;
  options: TFormInputSelectOptions | undefined;
  placeholder?: string;
  required?: boolean;
  size?: SizeType;
  disabled?: boolean;
};

function FormSelectInput({
  name,
  label,
  options,
  placeholder = "",
  size,
  disabled = false,
}: TFormSelectInput) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            size={size ? size : "middle"}
            options={options}
            placeholder={placeholder}
            disabled={disabled}
          />
          <p style={{ color: "red" }}>{error?.message}</p>
        </Form.Item>
      )}
    />
  );
}

export default FormSelectInput;
