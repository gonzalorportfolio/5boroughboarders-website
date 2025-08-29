import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-subtitle">Who We Are</h2>
          <p className="about-text">
            Five Borough Boarders is a community-driven initiative bringing together riders from all corners of New York City — 
            Brooklyn, Manhattan, Queens, the Bronx, and Staten Island — to share the stoke of snowboarding. 
            We believe the slopes should be open to everyone, no matter their background, identity, or zip code.
          </p>
        </div>
        <div className="about-content">
          <h2 className="about-subtitle">Our Mission</h2>
          <p className="about-text">
            We are dedicated to promoting <strong>diversity and inclusion</strong> in snowboarding, starting here in NYC 
            and reaching across the U.S. and beyond. Our mission is simple: break down barriers, provide access and resources, 
            and create opportunities for individuals from underrepresented communities to thrive on the mountain.
          </p>
        </div>
        <div className="about-content">
          <h2 className="about-subtitle">Our Vision</h2>
          <p className="about-text">
            We envision a future where snowboarding is truly for everyone. From the local hills to global resorts, 
            we strive to build a snowboarding culture that reflects the diversity of our city and the world. 
            By connecting riders across boroughs and backgrounds, we’re not just creating snowboarders — 
            we’re creating a movement.
          </p>
        </div>
        <div className="about-content">
          <h2 className="about-subtitle">Why We Ride Together</h2>
          <p className="about-text">
            At Five Borough Boarders, snowboarding is more than a sport. It’s a way to connect, to challenge ourselves, 
            and to celebrate the richness of our community. Whether you’re strapping in for the first time or carving like a pro, 
            you belong here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
