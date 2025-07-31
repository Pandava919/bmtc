import { Appbar } from "../components/Appbar";
import Navbar from "../components/navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-20">
      <Appbar />
      {children}
    </div>
  );
}

export default Layout;