import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Contact1 from "./ContactSection"
import what from "./assets/assests/vecteezy_whatsapp-square-logo-on-a-transparent-background_42127116.png"
import Insta from "./assets/assests/Instagram_logo_2016.svg.webp"
import x from "./assets/assests/vecteezy_social-media-x-logo-black-and-white-png_36623772.png"
import fb from "./assets/assests/vecteezy_facebook-logo-png-facebook-icon-transparent-png_18930698.png"

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      ".contact-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden transition-colors duration-300">
      <Navigation />

      {/* Hero Section - Responsive Adjustments */}
      <section className="relative px-4 sm:px-6 md:px-8 py-5 md:py-20 text-center pt-24">
        {/* Background Video - Hidden on smallest screens */}
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-full overflow-hidden opacity-20 hidden xs:block">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            playsInline
          >
            <source
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium">
              <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Get In Touch
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-wide mb-4 md:mb-6 leading-tight">
            <span className="text-[60px] md:text-[100px]">CONTACT</span>
            <br />
            <span className="text-muted-foreground">OUR </span>

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ">
              TEAM
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-normal px-2 sm:px-0">
            We'd love to hear about your project. Reach out and let's create
            something amazing together.
          </p>

          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-12 flex-wrap">
            {[
              { value: "24h", label: "Response Time" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="w-px h-6 sm:h-8 md:h-10 lg:h-12 bg-white/20"></div>
                )}
                <div className="text-center px-2 sm:px-0">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-foreground text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Responsive Grid */}
      <section className="contact-section px-4 sm:px-6 md:px-8 py-5 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6  md:gap-10 lg:gap-12 xl:gap-16">
          {/* Contact Form - Full width on mobile, half on lg+ */}
          <Contact1 />
          {/* Contact Info - Stacks below form on mobile */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="contact-card bg-card/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.01] hover:bg-card/80 glow-border">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-glow">
                Contact Information
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: Mail,
                    color: "purple",
                    title: "Email",
                    content: "Metabull2@gmail.com",
                  },
                  {
                    icon: Phone,
                    color: "blue",
                    title: "Phone",
                    content: "+91-82220 37010",
                  },
                  {
                    icon: MapPin,
                    color: "pink",
                    title: "Office",
                    content: "Metabull Universe, MP nagar zone-2,Bhopal",
                  },
                  {
                    icon: Clock,
                    color: "blue",
                    title: "Hours",
                    content: "Mon-sat: 10AM - 7PM",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`bg-${item.color}-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-${item.color}-500/30 flex-shrink-0`}
                    >
                      <item.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-${item.color}-400`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-0.5 sm:mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-medium">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links - 2 columns on mobile, full width on larger */}
            <div className="contact-card bg-card/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.01] hover:bg-card/80 glow-border">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-glow">
                Follow Us
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {[
                  {
                    logo: what,
                    name: "WhatsApp",
                    color: "green-500",
                    link: "https://wa.me/918982285510", // Add your WhatsApp link
                  },
                  {
                    logo: Insta,
                    name: "Instagram",
                    color: "pink-500",
                    link: "https://www.instagram.com/metabulluniverse?igsh=MTB1aWZhNHpvMjU3Mg==",
                  },
                  {
                    logo: x,
                    name: "Twitter",
                    color: "black-500",
                    link: "https://x.com/Metabullunivers", // Add your Twitter link
                  },
                  {
                    logo: fb,
                    name: "Facebook",
                    color: "blue-500",
                    link: "https://www.facebook.com/profile.php?id=61565142882919", // Add your Facebook link
                  },
                ].map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-${platform.color}/10 border border-${platform.color}/20 hover:bg-${platform.color}/20 transition-all duration-300 group`}
                  >
                    <img
                      src={platform.logo}
                      alt={`${platform.name} icon`}
                      className="h-9 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {platform.name}
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Responsive adjustments */}
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 text-center bg-gradient-to-t from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-wide text-glow">
            READY TO COLLABORATE?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-normal">
            Let's turn your ideas into reality. Schedule a call with our team
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center">
            <Link to="/services">
              <button className="border border-foreground hover:border-foreground text-foreground px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-full font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
                Go To service page
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;