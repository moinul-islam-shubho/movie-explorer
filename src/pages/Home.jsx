import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Discover Movies</h1>

          <p>
            Explore and discover your favorite movies and shows from around
            the world.
          </p>

          <a href="/movies" className="hero-button">
            Explore Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;