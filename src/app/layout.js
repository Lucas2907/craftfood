
import "../blocks/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"page"}>
        {children}
      </body>
    </html>
  );
}
