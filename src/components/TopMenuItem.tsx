import TopMenu from "@/components/TopMenu";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Menu Bar */}
        <header className="bg-gray-800 p-4 text-white flex items-center">
          <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="mr-4" />
          <TopMenu />
        </header>

        {/* Page Content */}
        <main className="container mx-auto mt-4">{children}</main>
      </body>
    </html>
  );
}