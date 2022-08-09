import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "slices/auth";
import { BiUserCircle } from "react-icons/bi";
import { RootState, AppDispatch } from "store";

const UserNav = () => {
  let { currentUser } = useSelector((state: RootState) => state.auth);
  let dispatch = useDispatch();

  let handleLogout = () => {
    dispatch(logout());
  };
  console.log(!currentUser);

  return (
    <>
      {!currentUser ? (
        <div className="flex items-center space-x-5 header__user">
          <div className="flex items-center user__display">
            <Link to="/user-info">
              <BiUserCircle className="inline-block text-4xl" />
              <span className="username">{currentUser.hoTen}</span>
            </Link>
          </div>

          <button onClick={handleLogout} className="logout">
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="header__auth">
          <Link to="/login">
            <button className="btn-auth">Đăng Nhập</button>
          </Link>
          <div className="partition"></div>
          <Link to="/register">
            <button className="btn-auth">Đăng Ký</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserNav;
