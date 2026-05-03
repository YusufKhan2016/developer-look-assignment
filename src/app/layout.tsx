import "@/assets/globals.css";

import NavBar from "@/components/layout/navBar";
import BottomBar from "@/components/layout/bottomBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
          <main>
            {children}
          </main>
        <BottomBar />
      </body>
    </html>
  );
}
