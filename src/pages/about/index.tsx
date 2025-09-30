import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
import team4 from "../../assets/team4.jpg";
import { ProfileCard } from "../../components/Card/profileCard";

const About = () => {
  const carouselItems = [
    {
      image: service1,
      title: "Professional & Trusted Service",
      description:
        "Our carefully vetted professionals bring years of experience and dedication to make your home spotless and comfortable.",
    },
    {
      image: service2,
      title: "Quality You Can Trust",
      description:
        "We maintain the highest standards of cleanliness and professionalism, ensuring your home is always in perfect condition.",
    },
    {
      image: service3,
      title: "Verified & Background Checked",
      description:
        "Every team member goes through rigorous background verification and training to ensure your safety and peace of mind.",
    },
  ];

  const teamMembers = [
    {
      image: team1,
      name: "Aditi Sharma",
      designation: "Founder & CEO",
      description: "Visionary leader with 10+ years in service industry",
    },
    {
      image: team2,
      name: "Rahul Mehta",
      designation: "Operations Head",
      description: "Expert in logistics and quality management",
    },
    {
      image: team3,
      name: "Sneha Kapoor",
      designation: "Customer Success Lead",
      description: "Passionate about delivering exceptional experiences",
    },
    {
      image: team4,
      name: "Arjun Singh",
      designation: "Technology Director",
      description: "Building seamless digital solutions",
    },
  ];

  return (
    <div className="bg-gray-50 text-foreground w-[99vw] overflow-x-hidden">
     <section className="bg-gradient-to-r from-red-500 to-black text-white py-16 text-center px-6 md:px-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
            About Blinkmaid
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Transforming homes and lives through trusted, reliable, and
            professional domestic services. We connect you with verified
            professionals who care about your home as much as you do.
          </p>
        </div>
      </section>

      {/* Zig-Zag Carousel Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              <div
                className={`flex-1 ${
                  index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-[var(--shadow-card)]"
                />
              </div>
              <div
                className={`flex-1 ${
                  index % 2 === 0
                    ? "animate-slide-in-right"
                    : "animate-slide-in-left"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  {item.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 md:px-20 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <ProfileCard className="p-8 bg-card border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Our Purpose
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To simplify household management by providing top-quality,
                affordable, and verified domestic help at your fingertips. We
                believe every home deserves professional care.
              </p>
            </ProfileCard>
            <ProfileCard className="p-8 bg-card border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
              <div className="text-primary text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and convenient platform for hiring
                household professionals, making life easier for every family
                while creating meaningful employment opportunities.
              </p>
            </ProfileCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals working tirelessly to revolutionize home
              services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={index}
                className="group bg-card border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.designation}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </ProfileCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-6 md:px-20 text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who trust Blinkmaid for their
            home care needs.
          </p>
          <button className="bg-primary-foreground text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors duration-300 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
