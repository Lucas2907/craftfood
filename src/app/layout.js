
import "../blocks/globals.css";
import Navigation from "@/components/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navigation/>
        {children}
      </body>
    </html>
  );
}
