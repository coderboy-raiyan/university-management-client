import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import CustomForm from "../../../components/From/CustomForm";
import FormInput from "../../../components/From/FormInput";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";

function CreateAcademicFaculty() {
  const [createAcademicFaculty, { isLoading }] =
    useCreateAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await createAcademicFaculty(data);
      toast.success("Academic Faculty created successfully");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Row justify="center">
      <Col span={8}>
        <CustomForm onSubmit={onSubmit}>
          <FormInput
            type="name"
            name="name"
            placeholder="Name"
            label="Faculty name"
          />
          {isLoading ? (
            <Button loading={isLoading}>Please wait...</Button>
          ) : (
            <Button htmlType="submit" type="primary">
              Sign in
            </Button>
          )}
        </CustomForm>
      </Col>
    </Row>
  );
}

export default CreateAcademicFaculty;
