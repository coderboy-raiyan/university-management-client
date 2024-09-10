import { Button, Col, Row, Spin } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import CustomForm from "../../../components/From/CustomForm";
import FormInput from "../../../components/From/FormInput";
import FormSelectInput from "../../../components/From/FormSelectInput";
import {
  useCreateAcademicDepartmentMutation,
  useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagement.api";

function CreateAcademicDepartment() {
  const { data, isFetching } = useGetAllAcademicFacultyQuery(null);
  const [createAcademicDepartment, { isLoading }] =
    useCreateAcademicDepartmentMutation();

  const academicFacultiesOptions = data?.data?.map((val: any) => ({
    value: val?._id,
    label: val?.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await createAcademicDepartment(data).unwrap();
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
            label="Department name"
            placeholder="Name"
          />
          {isFetching ? (
            <div>
              <Spin size="large" />
            </div>
          ) : (
            <FormSelectInput
              name="academicFaculty"
              label="Faculty name"
              options={academicFacultiesOptions}
            />
          )}
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

export default CreateAcademicDepartment;
