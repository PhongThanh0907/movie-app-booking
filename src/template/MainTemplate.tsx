import Header from "components/Header";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const MainTemplate = () => {
  return (
    <Box>
      <Header></Header>
      <Box sx={{ flex: 1}}>
        <Outlet />
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default MainTemplate;
