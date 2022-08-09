import { useForm, FieldErrors } from "react-hook-form";
import { TextInput, Button, Space } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import { register } from "slices/auth";

import "./register.styles.scss";

interface RegisterValues {
  taiKhoan: string;
  matKhau: string;
  confirmMatKhau: string;
  soDt: string;
  email: string;
  maNhom: string;
  hoTen: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm<RegisterValues>({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      confirmMatKhau: "",
      soDt: "",
      email: "",
      maNhom: "",
      hoTen: "",
    },
    mode: "onTouched",
  });

  const dispatch = useDispatch<AppDispatch>();

  const onError = (errors: FieldErrors<RegisterValues>) => {
    console.log(errors);
  };

  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <div className="register" id="register">
      <div className="register_area">
        <div style={{ textAlign: "center" }}>
          <img src="img/tix-logo.png" alt="" />
          <h1 style={{ color: "#efeded" }}>Đăng Ký</h1>
        </div>
        <form>
          <TextInput placeholder="Tài Khoản" type="text" label="Tài Khoản" />
          <TextInput placeholder="Mật Khẩu" type="text" label="Mật Khẩu" />

          <TextInput
            placeholder="Confirm Mật Khẩu"
            type="text"
            label="Confirm Mật Khẩu"
          />

          <TextInput placeholder="Email" type="text" label="Email" />
          <TextInput
            placeholder="Số điện thoại"
            type="text"
            label="Số điện thoại"
          />
          <TextInput placeholder="Họ Tên" type="text" label="Họ Tên" />
          <Space h="md" />

          <Space h="md" />
          <Button style={{ width: "100%" }} type="submit">
            Đăng Ký
          </Button>
          <p style={{ textAlign: "end", color: "#efeded", padding: "20px 0" }}>
            <a style={{ textDecoration: "none" }} href="">
              <Link to="/login">Đăng Nhập</Link>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
