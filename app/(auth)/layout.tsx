import { Appbar } from "@/components/Appbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-20 fixed top-0 left-0 right-0 bg-neutral-100 dark:bg-neutral-800">
      <Appbar />
      {children}
    </div>
  );
}

export default Layout;