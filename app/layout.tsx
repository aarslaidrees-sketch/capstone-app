import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>{" | "}
          <Link href="/chat">Chat</Link>{" | "}
          <Link href="/results">Results</Link>{" | "}
<Link href="/health">Health</Link>
        
        </nav>

        {children}
      </body>
    </html>
  );
}