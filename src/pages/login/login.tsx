import { Button, Row } from "antd";
import { jwtDecode } from "jwt-decode";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomForm from "../../components/From/CustomForm";
import FormInput from "../../components/From/FormInput";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { TUser } from "../../types";

type TInput = {
  id: string;
  password: string;
};

function Login() {
  const [handleLogin, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TInput> = async (data) => {
    try {
      const res = await handleLogin(data).unwrap();
      const user = jwtDecode(res?.data?.accessToken) as TUser;
      dispatch(setUser({ user, accessToken: res?.data?.accessToken }));
      navigate(`/${user?.role}/dashboard`);
      toast.success("Signed in successfully");
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <CustomForm
        defaultValues={{
          id: "A-0001",
          password: "admin123",
        }}
        onSubmit={onSubmit}
      >
        <FormInput name="id" type="text" label="User Id" placeholder="B-0001" />
        <FormInput name="password" type="password" label="Password" />
        {isLoading ? (
          <Button loading={isLoading}>Please wait...</Button>
        ) : (
          <Button htmlType="submit" type="primary">
            Sign in
          </Button>
        )}
      </CustomForm>
    </Row>
  );
}

export default Login;
