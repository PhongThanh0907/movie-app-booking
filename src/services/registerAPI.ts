import { CurrentUser } from "interfaces/auth";
import axiosClient from "./axiosClient";

interface RegisterValues {
    taiKhoan: string;
    matKhau: string;
    confirmMatKhau: string;
    soDt: string;
    email: string;
    maNhom: string;
    hoTen: string;
}

const registerAPI = {
  register: (values: RegisterValues) => {
    return axiosClient.post<unknown, CurrentUser>(
      "QuanLyNguoiDung/DangNhap",
      values
    );
  },
};

export default registerAPI;