import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className={"content"}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
