import { Outlet } from "react-router-dom";
import PageCard from "../components/Layout/PageCard";

function Root() {
  // const navigation = useNavigation();

  return (
    <PageCard>
        <Outlet />
    </PageCard>
  );
}

export default Root;
