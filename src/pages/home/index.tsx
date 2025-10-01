import {
  HiStar,
  HiPhone,
  HiCheckCircle,
  HiCurrencyDollar,
  HiSupport,
} from "react-icons/hi";
import bgClip from "../../assets/bg-video.mp4";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/Carousel/carousel";
import { Card, CardContent } from "../../components/Card/card";
import Accordion from "../../components/Accordion/accordion";

const Home = () => {

  const featuredServices = [
    {
      name: "Deep House Cleaning",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      price: "$89",
    },
    {
      name: "Kitchen Sanitization",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop",
      price: "$69",
    },
    {
      name: "Bathroom Deep Clean",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
      price: "$59",
    },
    {
      name: "Laundry & Ironing",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&h=300&fit=crop",
      price: "$49",
    },
    {
      name: "Window Cleaning",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop",
      price: "$79",
    },
  ];

  const maidStories = [
    {
      name: "Maria Rodriguez",
      story:
        "Working with Blinkmaid has changed my life. I now have a stable income and wonderful families who appreciate my work every day.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=500&fit=crop",
      years: "5 years with us",
    },
    {
      name: "Sarah Johnson",
      story:
        "I love bringing joy to families by making their homes spotless. The training and support from Blinkmaid made me a professional.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
      years: "3 years with us",
    },
    {
      name: "Priya Patel",
      story:
        "Being part of the Blinkmaid family means being valued and respected. I'm proud of the service I provide to every home.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&h=500&fit=crop",
      years: "4 years with us",
    },
  ];

  const faqs = [
    {
      question: "How do you verify your maids?",
      answer:
        "All our maids undergo comprehensive background checks, police verification, reference verification, and skill assessments. We also conduct in-person interviews and provide professional training.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not happy with the service, we'll send another maid to re-clean at no additional cost, or provide a full refund.",
    },
    {
      question: "Can I request the same maid for regular service?",
      answer:
        "Absolutely! Once you find a maid you like, you can request them for all future bookings. We'll do our best to accommodate your preference.",
    },
    {
      question: "What cleaning products do you use?",
      answer:
        "We use eco-friendly, non-toxic cleaning products that are safe for children and pets. If you have specific product preferences, we're happy to use your supplies.",
    },
    {
      question: "How do I pay for the service?",
      answer:
        "We accept all major credit cards, debit cards, and digital payment methods. Payment is processed securely after the service is completed to your satisfaction.",
    },
  ];

  return (
    <div className="w-full min-h-full overflow-x-hidden text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-500 to-black text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgClip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Floating Background Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-12 h-12 bg-white/10 rounded-full top-2 left-8 animate-bounce"></div>
          <div className="absolute w-24 h-24 bg-white/10 rounded-full top-10 left-2 animate-float"></div>
          <div className="absolute w-20 h-20 bg-white/10 rounded-full bottom-20 right-10 animate-float"></div>
          <div className="absolute w-16 h-16 bg-white/15 rounded-full top-1/2 left-1/4 animate-float"></div>
          <div className="absolute w-20 h-20 bg-white/25 rounded-full bottom-1/3 right-[36%] animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1600px] w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 my-4 sm:my-6 text-white border border-white/30 animate-fade-in">
              <HiStar className="w-5 h-5 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium">
                Trusted by 10,000+ families
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hire Verified &{" "}
              <span className="block gradient-accent bg-clip-text text-[#FAEB92] animate-gradient">
                Reliable Maids
              </span>{" "}
              with{" "}
              <span
                className=""
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Blink<span className="text-red-500">maid</span>
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl leading-relaxed animate-fade-in"
              style={{
                animationDelay: "0.2s",
                fontFamily: "Pacifico, cursive",
              }}
            >
              Professional, trustworthy, and experienced helpers at your service
              anytime. Background-verified professionals ready to transform your
              home.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <button className="!bg-white !text-black font-bold rounded-2xl px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-all hover:!bg-white hover:!text-black hover:scale-105 hover:shadow-2xl">
                Get Started Now
              </button>

              <button className="!bg-transparent !border-white !text-white font-semibold rounded-2xl px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-all hover:!bg-white hover:!text-black hover:!border-white hover:scale-105">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 w-full bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-32 h-32 bg-red-100 rounded-full top-10 left-10 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-24 h-24 bg-red-50 rounded-full bottom-20 right-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1600px] w-full">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-red-500">Featured Services</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Discover our most popular cleaning services rated by thousands of
              satisfied customers
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {featuredServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-500">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-red-500">
                          {service.price}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <HiStar
                              key={i}
                              className={`w-5 h-5 ${
                                i < service.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            ({service.rating}.0)
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Maid Stories Section */}
      <section className="py-24 w-full bg-gradient-to-br from-red-50 to-white text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-[1600px] w-full">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Meet Our <span className="text-red-500">Amazing Team</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Real stories from our dedicated professionals who take pride in
              their work
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {maidStories.map((story, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                      <div className="max-w-3xl">
                        <p className="text-2xl md:text-3xl font-light mb-6 italic leading-relaxed">
                          "{story.story}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold">{story.name}</h3>
                            <p className="text-red-300 text-lg">
                              {story.years}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <HiStar
                                key={i}
                                className="w-6 h-6 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 w-full bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-[1600px] w-full">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose <span className="text-red-500">Blinkmaid?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              We go above and beyond to ensure your complete satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {[
              {
                icon: HiCheckCircle,
                title: "Verification & Assessment",
                desc: "Every maid undergoes thorough background checks, police verification, skill tests, and professional training before joining our team.",
                color: "red",
              },
              {
                icon: HiCurrencyDollar,
                title: "Transparent Pricing",
                desc: "No hidden charges. Get upfront pricing with detailed breakdowns. Pay only after you're completely satisfied with the service.",
                color: "green",
              },
              {
                icon: HiSupport,
                title: "24/7 Customer Support",
                desc: "Our dedicated support team is always available to address your concerns, reschedule bookings, or handle any issues promptly.",
                color: "blue",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-red-500"
              >
                <div
                  className={`bg-${feature.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all`}
                >
                  <feature.icon
                    className={`w-10 h-10 text-${feature.color}-500 group-hover:text-white transition-all`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 w-full bg-gray-50 text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl w-full">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our services
            </p>
          </div>

          <Accordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 w-full bg-gradient-to-r from-red-500 to-black text-white">
        <div className="container mx-auto px-6 max-w-[1600px] w-full text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white animate-fade-in">
            Ready to Book Your <span className="text-[#FAEB92]">Maid?</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Get trusted, verified professionals at your service with just one
            click.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-black font-bold rounded-2xl px-12 py-5 text-xl hover:bg-gray-100 transition-all hover:scale-105">
              Book Now - Starting at ₹1,999
            </button>
            <div className="flex items-center gap-2">
              <HiPhone className="w-6 h-6 text-white" />
              <span className="text-white text-lg">
                Or call us: (555) 123-MAID
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
