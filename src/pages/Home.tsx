import "./Home.css";
import { Link } from "react-router-dom";
import hero from "../assets/book1.jpg";
import hero2 from "../assets/book2.jpg";
import hero3 from "../assets/book3.jpg";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-box">
          <h1>📚 Welcome to Library System</h1>
          <p>Borrow books anytime, anywhere — Track your reading easily.</p>
          <Link to="/books" className="btn-primary">Browse Books</Link>
        </div>
      </section>
      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">Why Use Our Library?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Borrow Easily</h3>
            <p>Choose your favorite books & borrow with one click.</p>
          </div>
          <div className="feature-card">
            <h3>Track Borrowed Books</h3>
            <p>View logs, return books & never lose track.</p>
          </div>
          <div className="feature-card">
            <h3>Admin Dashboard</h3>
            <p>Manage books & control the whole system.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Library Gallery</h2>
        <div className="gallery-grid">
          <img src={hero} alt="" />
          <img src={hero2} alt="" />
          <img src={hero3} alt="" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Library System | Built by You ✨
      </footer>
    </div>
  );
}
