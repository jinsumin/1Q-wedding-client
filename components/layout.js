import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-white font-hanafont">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
