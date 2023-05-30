import "./globals.css";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Écoutez vos musiques préférées, partout sur Spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
            <UserProvider>
                <ModalProvider/>
        <Sidebar>{children}</Sidebar>
        </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
