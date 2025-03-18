import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Tableau from "@/components/tableau";

export default function Home() {
  return (
    <div className="">
      <div className="w-full sticky top-0 left-0 px-6">
        <Header/>
      </div>
      <div>
        <Main/>
      </div>
      <div className="">
        <Tableau/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
