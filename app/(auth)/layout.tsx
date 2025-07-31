import Navbar from "./navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-20">
        <Navbar />
      {children}
    </div>
  );
}

export default Layout;