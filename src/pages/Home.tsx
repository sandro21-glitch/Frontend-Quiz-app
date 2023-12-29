import Subjects from "../features/Home/Subjects";
import Welcome from "../features/Home/Welcome";

const Home = () => {
  return (
    <section
      className="section-center flex items-start flex-col md:flex-row"
      style={{ marginTop: "5rem" }}
    >
      <Welcome />
      <Subjects />
    </section>
  );
};

export default Home;
