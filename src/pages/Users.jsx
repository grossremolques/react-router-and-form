import { Outlet } from "react-router-dom";
export default function Users() {
  return (
    <>
      <h1 className="text-danger">User</h1>
      <Outlet/>
    </>
  );
}
