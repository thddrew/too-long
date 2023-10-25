import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div className="max-w-screen-lg mx-auto px-3 lg:px-0">
      <Outlet />
    </div>
  );
}

export default PageLayout;
