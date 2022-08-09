import { useForm, FieldErrors } from "react-hook-form";
import { TextInput, Button, Space } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import { login } from "slices/auth";
import "./login.styles.scss";

interface LoginValues {
  taiKhoan: string;
  matKhau: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: { taiKhoan: "", matKhau: "" },
    mode: "onTouched",
  });

  const dispatch = useDispatch<AppDispatch>();

  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  // const taiKhoan = register('taiKhoan');
  // console.log(taiKhoan);

  const onSubmit = (values: LoginValues) => {
    dispatch(login(values));
  };

  const onError = (errors: FieldErrors<LoginValues>) => {
    console.log(errors);
  };

  if (Object.keys(currentUser).length) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login" id="login">
      <div className="login_area">
        <div style={{ textAlign: "center" }}>
          <img src="img/tix-logo.png" alt="" />
          <h1 style={{ color: "#efeded" }}>Login</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <TextInput
            placeholder="Tài Khoản"
            type="text"
            label="Tài Khoản"
            error={errors.taiKhoan?.message}
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "Tài khoản không được để trống",
              },
            })}
          />
          <TextInput
            placeholder="Mật Khẩu"
            type="text"
            label="Mật Khẩu"
            error={errors.matKhau?.message}
            {...register("matKhau", {
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Mật khẩu phải có ít nhất 8 kí tự, có ít nhất một chữ cái và một số",
              },
            })}
          />
          <Space h="md" />
          {error && <span>{error}</span>}
          <Space h="md" />
          <Button style={{ width: "100%" }} type="submit" disabled={isLoading}>
            Đăng Nhập
          </Button>
          <p style={{ textAlign: "end", color: "#efeded", padding: "20px 0" }}>
            Bạn chưa có tài khoản ?{" "}
            <a style={{ textDecoration: "none" }} href="">
            <Link to="/register">Đăng ký</Link>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
