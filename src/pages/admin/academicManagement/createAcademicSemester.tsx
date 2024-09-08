import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import CustomForm from "../../../components/From/CustomForm";
import FormSelectInput from "../../../components/From/FormSelectInput";
import { AcademicSemesterNameOptions } from "../../../constant/academicSemester.constant";
import { MonthsOptions } from "../../../constant/global.constant";
import { useCreateAcademicSemestersMutation } from "../../../redux/features/admin/academicManagement.api";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";

const yearOptions = new Array(5).fill(1).map((__, i) => {
  const updatedYear = new Date().getFullYear() + i;
  return {
    value: updatedYear.toString(),
    label: updatedYear.toString(),
  };
});

function CreateAcademicSemester() {
  const [createAcademicSemester, { isLoading }] =
    useCreateAcademicSemestersMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const semesterData = {
      ...data,
      name: AcademicSemesterNameOptions.find((opt) => opt.value === data.name)
        ?.label,
      code: data?.name,
    };

    try {
      await createAcademicSemester(semesterData).unwrap();
      toast.success("Semester created successfully");
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <CustomForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <FormSelectInput
            options={AcademicSemesterNameOptions}
            name="name"
            label="Name"
            placeholder={AcademicSemesterNameOptions[0].label}
          />
          <FormSelectInput
            options={yearOptions}
            name="year"
            label="Year"
            placeholder={yearOptions[0].label}
          />
          <FormSelectInput
            options={MonthsOptions}
            name="startMonth"
            label="Start Month"
          />
          <FormSelectInput
            options={MonthsOptions}
            name="endMonth"
            label="End Month"
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
    </Flex>
  );
}

export default CreateAcademicSemester;
