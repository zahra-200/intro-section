import Content from "../components/Content/Content";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <div className="py-8">
      <div className=" px-4 pb-0 sm:p-8">
        <Navbar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default Home;
