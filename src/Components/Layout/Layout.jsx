import Footer from "../footer";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../header/header";

const queryClient = new QueryClient();
function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Heaser />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

export default Layout;
