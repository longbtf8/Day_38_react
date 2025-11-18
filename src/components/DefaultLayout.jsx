import { Outlet } from "react-router";
import Header from "./Header";

const DefaultLayout = () => {
  return (
    <div className="p-4 ">
      <Header />
      <Outlet />
    </div>
  );
};
export default DefaultLayout;
