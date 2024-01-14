import { Outlet } from "react-router-dom";
import PageCard from "../components/Layout/PageCard/PageCard";

function Root() {
  return (
    <PageCard>
      <Outlet />
    </PageCard>
  );
}

export default Root;
