import { Button } from "antd";
import { jwtDecode } from "jwt-decode";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { TUser } from "../../types";

type TInput = {
  id: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<TInput>({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">
          <p>User Id</p>
          <input type="text" id="id" {...register("id")} required />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            type="password"
            id="password"
            {...register("password")}
            required
          />
        </label>
        {isLoading ? (
          <Button loading={isLoading}>Please wait...</Button>
        ) : (
          <Button htmlType="submit" type="primary">
            Sign in
          </Button>
        )}
      </form>
    </section>
  );
}

export default Login;
