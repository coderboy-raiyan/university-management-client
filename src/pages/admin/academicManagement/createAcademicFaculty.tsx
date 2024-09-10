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
      await createAcademicFaculty(data).unwrap();
      toast.success("Academic Faculty created successfully");
    } catch (error: any) {
      toast.error(error?.data.message);
    }
  };

  return (
    <Row justify="center">
      <Col span={8}>
        <CustomForm onSubmit={onSubmit}>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            label="Faculty name"
          />
          {isLoading ? (
            <Button loading={isLoading}>Please wait...</Button>
          ) : (
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          )}
        </CustomForm>
      </Col>
    </Row>
  );
}

export default CreateAcademicFaculty;
