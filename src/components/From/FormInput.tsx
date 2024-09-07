import { Input } from "antd";
import { Controller } from "react-hook-form";

function FormInput({
  type,
  name,
  labelName,
  placeholder = "",
}: {
  type: string;
  name: string;
  labelName: string;
  placeholder?: string;
}) {
  return (
    <label
      style={{ marginBottom: "10px", display: "inline-block", width: "100%" }}
      htmlFor={name}
    >
      <p>{labelName}</p>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            name={name}
            id={name}
            required
            type={type}
            placeholder={placeholder}
          />
        )}
      />
    </label>
  );
}

export default FormInput;
