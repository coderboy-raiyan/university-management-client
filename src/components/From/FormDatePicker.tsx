import { DatePicker, Form } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";

type TDatePickerInput = {
  name: string;
  label: string;
  size?: SizeType;
};

function FormDatePicker({ name, label, size }: TDatePickerInput) {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <DatePicker
            {...field}
            required
            size={size ? size : "middle"}
            style={{ width: "100%" }}
          />
        </Form.Item>
      )}
    />
  );
}

export default FormDatePicker;
