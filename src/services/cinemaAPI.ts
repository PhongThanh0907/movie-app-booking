import { Cinema } from "interfaces/cinema";
import axiosClient from "./axiosClient";

const cinemaAPI = {
  getCinemaList: () => {
    return axiosClient.get<unknown, Cinema[]>(
      "/QuanLyRap/LayThongTinLichChieuHeThongRap"
    );
  },
};

export default cinemaAPI;
