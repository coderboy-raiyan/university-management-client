import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/From/CustomForm";
import FormDatePicker from "../../../components/From/FormDatePicker";
import FormInput from "../../../components/From/FormInput";
import FormSelectInput from "../../../components/From/FormSelectInput";
import {
  bloodGroupOptions,
  genderOptions,
} from "../../../constant/global.constant";

const studentDefaultValues = {
  name: {
    firstName: "I am ",
    middleName: "Student",
    lastName: "Number 1",
  },
  gender: "male",
  bloogGroup: "A+",

  email: "student2@gmail.com",
  contactNo: "1235678",
  emergencyContactNo: "987-654-3210",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",

  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666",
  },

  localGuardian: {
    name: "Alice Johnson",
    occupation: "Doctor",
    contactNo: "777-888-9999",
    address: "789 Pine St, Villageton",
  },

  admissionSemester: "65b0104110b74fcbd7a25d92",
  academicDepartment: "65b00fb010b74fcbd7a25d8e",
};

function CreateStudent() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Row gutter={8}>
      <Col span={24}>
        <CustomForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          {/* -- Personal Info  --- */}
          <Divider>Personal Info.</Divider>
          <Row gutter={10}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="name.firstName"
                placeholder="John"
                label="First name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="name.middleName"
                placeholder="Dao"
                label="Middle name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="name.lastName"
                placeholder="Kus"
                label="Last Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormSelectInput
                label="Gender"
                name="gender"
                options={genderOptions}
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormDatePicker label="Date of Birth" name="dateOfBirth" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormSelectInput
                label="Blood group"
                name="bloogGroup"
                options={bloodGroupOptions}
              />
            </Col>
          </Row>

          {/* Contact info. */}
          <Divider>Contact info.</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="contactNo"
                placeholder="Contact No"
                label="Contact No"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="emergencyContactNo"
                placeholder="Emergency Contact No"
                label="Emergency Contact No"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="presentAddress"
                placeholder="Present Address"
                label="Present Address"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="permanentAddress"
                placeholder="Permanent Address"
                label="Permanent Address"
              />
            </Col>
          </Row>
          {/* Guardian Info*/}
          <Divider>Guardian Info.</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="guardian.fatherName"
                placeholder="Father's name"
                label="Father's Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="guardian.fatherOccupation"
                placeholder="Father Occupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="guardian.fatherContactNo"
                placeholder="Father Contact No"
                label="Father Contact No"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="guardian.motherName"
                placeholder="Mother's Name"
                label="Mother's Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="guardian.motherOccupation"
                placeholder="Mother Occupation"
                label="Mother's Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="guardian.motherContactNo"
                placeholder="Mother Contact No"
                label="Mother's Contact No"
              />
            </Col>
          </Row>

          {/* Local Guardian */}
          <Divider>Local Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="localGuardian.name"
                placeholder="Name"
                label="Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="localGuardian.address"
                placeholder="Address"
                label="Address"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="localGuardian.contactNo"
                placeholder="Contact No"
                label="Contact No"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="localGuardian.occupation"
                placeholder="Occupation"
                label="Occupation"
              />
            </Col>
          </Row>
          {/* Academic info  */}
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="admissionSemester"
                placeholder="Admission Semester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <FormInput
                type="text"
                name="academicDepartment"
                placeholder="Academic Department"
                label="Academic Department"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </CustomForm>
      </Col>
    </Row>
  );
}

export default CreateStudent;
