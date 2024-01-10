import { Outlet } from "react-router-dom";

function Root() {
  // const navigation = useNavigation();

  return (
    <>
      {/* navigation */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
