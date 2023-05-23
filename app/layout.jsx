import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Ticket Express",
  description: "Decentralized Ticket Services with the Blockchain",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="bg-slate-200" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
