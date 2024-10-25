import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "underpin services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-slate-200`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
