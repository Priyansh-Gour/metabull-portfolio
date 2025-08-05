
import React, { useEffect, useRef, Suspense, lazy,useState } from 'react';
import { Code2, Palette, Zap, Globe, Smartphone, Rocket, ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Threads from "./Threads";
import { Code, Video, Users, Check, ArrowRight, Star,} from "lucide-react";
import refokus from "./assets/assests/r (1).png";
import cuberto from "./assets/assests/r (2).png";
import homer from "./assets/assests/r (3).png";
import dribble from "./assets/assests/r (4).png";
import magna from "./assets/assests/r (5).png";
import metabull from "./assets/assests/r (7).png";
import terraca from "./assets/assests/r (8).png";
import waman from "./assets/assests/r(9).png";
import fresco from "./assets/assests/r(10).png";


const Spline = lazy(() => import('@splinetool/react-spline'));

gsap.registerPlugin(ScrollTrigger);

const webProjects = [
  {
    id: 1,
    title: "Metabull Universe",
    description: "Immersive digital universe with cutting-edge technology",
    image: metabull,
    tech: ["Web3", "Blockchain", "Metaverse"],
    category: "Web3",
  },
  {
    id: 2,
    title: "Terracastle Bhiwadi",
    description: "Real estate platform with advanced property management",
    image: terraca,
    url: "https://terracastlebhiwadi.in/",
    tech: ["React", "CMS", "Real Estate"],
    category: "Real Estate",
  },
  {
    id: 3,
    title: "Waman Haus",
    description: "Responsive web solution with modern architecture",
    image:waman,
    url: "https://wamanhaus.com/",
    tech: ["Next.js", "Tailwind", "Motion"],
    category: "Business",
  },
  {
    id: 4,
    title: "Fresco Clothing",
    description:
      "Modern web platform with stunning visual design and user experience",
    image:fresco,
    url: "https://frescoclothing.shop/",
    tech: ["React", "Node.js", "Design"],
    category: "Web Platform",
  },

  {
    id: 5,
    title: "Dribbble",
    description: "Responsive web solution with modern architecture",
    image: dribble,
    url: "https://navajowhite-okapi-326934.hostingersite.com/",
    tech: ["Next.js", "Tailwind", "Motion"],
    category: "Business",
  },
  {
    id: 6,
    title: "Refokus",
    description:
      "Modern web platform with stunning visual design and user experience",
    image: refokus,
    url: "https://palegreen-gazelle-847706.hostingersite.com/",
    tech: ["React", "Node.js", "Design"],
    category: "Web Platform",
  },
  {
    id: 7,
    title: "Cuberto",
    description: "Interactive web application with advanced functionality",
    image: cuberto,
    url: "https://lightyellow-cod-611350.hostingersite.com/",
    tech: ["Vue.js", "D3.js", "API"],
    category: "Web App",
  },
  {
    id: 8,
    title: "Home Rejoice",
    description: "Creative portfolio with innovative design elements",
    image: homer,
    url: "https://cornflowerblue-lemur-358711.hostingersite.com/",
    tech: ["Three.js", "React", "GSAP"],
    category: "Portfolio",
  },
  {
    id: 9,
    title: "Magna",
    description: "Dynamic web platform with interactive features",
    image: magna,
    url: "https://lightsalmon-buffalo-180630.hostingersite.com/",
    tech: ["React", "Firebase", "PWA"],
    category: "Platform",
  },
];

const WebServices = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState("section1");

    const toggleSection = (section) => {
      // Only allow switching to other sections, cannot deactivate completely
      if (activeSection !== section) {
        setActiveSection(section);
      }
    };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Debounced animations for better performance
    let animationFrame: number;

    const animateElements = () => {
      // Hero animations
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        );
      }

      // Services grid animation
      if (servicesRef.current) {
        gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'),
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              end: "bottom 20%",
            }
          }
        );
      }

      // Projects animation
      if (projectsRef.current) {
        gsap.fromTo(projectsRef.current.querySelectorAll('.project-card'),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 70%",
              end: "bottom 30%",
            }
          }
        );
      }
    };

    animationFrame = requestAnimationFrame(animateElements);

    return () => {
      cancelAnimationFrame(animationFrame);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
   const pricingPlans = [
     {
       category: "Web Development",
       icon: Code,
       color: "blue",
       plans: [
         {
           name: "Static Website",
           price: "₹4,999",
           period: "one time",
           description: "Perfect for small businesses getting online",
           features: [
             "5 Page Website",
             "Mobile Responsive,fast loading",
             "Free domain & hosting (1 year)",
             "WhatsApp chat & contact form",
             "3-month free support",
           ],
           popular: false,
         },
         {
           name: "Dynamic website",
           price: "₹8,000",
           period: "one time",
           description: "Complete solution for growing businesses",
           features: [
             "8-12 pages",
             "Include admin panel",
             "Free hosting & domain (1 year)",
             "SEO Ready + Whatsapp form ",
             "1-month free corrections(Rs.150/change after)",
           ],
           popular: true,
         },
         {
           name: "E-commerce website",
           price: "₹9,999",
           period: "one time",
           description: "Custom solutions for large organizations",
           features: [
             "Product listing,cart,checkout",
             "Payment gateway + Admin panel",
             "Free domain & hosting (1 year)",
             "Responsive & secure design",
             "Dedicated Team",
           ],
           popular: false,
         },
         {
           name: "SEO service",
           price: "₹6000",
           period: "Per Month",
           description: "Best Seo service for your website",
           features: [
             "Keyword targeting",
             "Google Ranking improvement",
             "Monthly performance report",
             "Long term gazellerowth strategy",
             "Dedicated Team",
             "Best Seo Service",
           ],
           popular: false,
         },
       ],
     },
   ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden transition-colors duration-300">
      <Navigation />

      {/* Hero Section with Spline */}
      <section
        className="relative  md:px-6 py-8 md:py-16 text-center pt-24 top-[10vh]"
        ref={heroRef}
      >
        <div
          style={{ width: "100%", height: "200px", position: "relative" }}
          className="md:hidden block"
        >
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 z-10 ">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-wide mb-4 md:mb-6 leading-tight">
                <span className="text-[100px]">WEB</span>
                <br />
                <span className="text-muted-foreground">DEV </span>

                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ">
                  SERVICES
                </span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-12 px-4 lg:px-0">
                Crafting next-generation web experiences with cutting-edge
                technology
              </p>
            </div>

            {/* Right 3D Model */}
            <div
              style={{ width: "100%", height: "130px", position: "relative" }}
              className="md:block hidden"
            >
              <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 md:px-2 py-1 md:py-12">
        <div className="min-h-screen bg-background p-8">
          <div className="max-w-6xl mx-auto">
            {/* Button Group */}
            <div className="gap-4 mb-8 flex flex-col md:flex-row items-center justify-center">
              <button
                onClick={() => toggleSection("section1")}
                className={`px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-base md:text-lg duration-300 transform hover:scale-105 w-full sm:w-auto mb-6 md:mb-0 border transition-all ${
                  activeSection === "section1"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-500/20"
                    : "bg-background/70 border-border hover:border-purple-500/50 text-foreground"
                }`}
              >
                OUR WEB CAPABILITIES
              </button>
              <button
                onClick={() => toggleSection("section2")}
                className={`px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-base md:text-lg duration-300 transform hover:scale-105 w-full sm:w-auto border transition-all ${
                  activeSection === "section2"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-500/20"
                    : "bg-background/70 border-border hover:border-purple-500/50 text-foreground"
                }`}
              >
                WEB DEV PRICING
              </button>
            </div>

            {/* Section 1 */}
            <div
              className={`bg-background  rounded-xl shadow-md mb-6 transition-all duration-300 ${
                activeSection === "section1"
                  ? "opacity-100 translate-y-0 block"
                  : "opacity-0 h-0 overflow-hidden -translate-y-4 hidden"
              }`}
            >
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 tracking-wide">
                  OUR WEB CAPABILITIES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      icon: Code2,
                      title: "LANDING PAGE",
                      desc: "A landing page is a single-page website that is designed to promote a specific product, service, or idea.",
                      color: "blue",
                    },
                    {
                      icon: Palette,
                      title: "STATIC WEBSITE",
                      desc: "A static website is a website that is not dynamic and does not change based on user input.",
                      color: "purple",
                    },
                    {
                      icon: Zap,
                      title: "DYNAMIC WEBSITE",
                      desc: "A dynamic website is a website that is interactive and changes based on user input.",
                      color: "yellow",
                    },
                    {
                      icon: Globe,
                      title: "E-COMMERCE WEBSITE",
                      desc: "A e-commerce website is a website that allows users to purchase products or services online and they have a payment gateway.",
                      color: "green",
                    },
                    {
                      icon: Smartphone,
                      title: "RESPONSIVE DESIGN",
                      desc: "Perfect experiences that adapt to any screen size.",
                      color: "pink",
                    },
                    {
                      icon: Rocket,
                      title: "SEO SERVICE",
                      desc: "Search engine optimization means SEO helps your website show up better in Google searches so more people can find it",
                      color: "orange",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="service-card group bg-card/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 glow-border"
                    >
                      <service.icon
                        className={`w-8 h-8 md:w-10 md:h-10 text-${service.color}-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div
              className={`bg-background  rounded-xl shadow-md mb-6 transition-all duration-300 ${
                activeSection === "section2"
                  ? "opacity-100 translate-y-0 block"
                  : "opacity-0 h-0 overflow-hidden -translate-y-4 hidden"
              }`}
            >
              {pricingPlans.map((service, serviceIndex) => (
                <div key={serviceIndex} className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-${service.color}-500/20 border border-${service.color}-500/30 p-2 sm:p-3 mr-3 sm:mr-4 flex items-center justify-center`}
                    >
                      <service.icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-${service.color}-400`}
                      />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-glow">
                      {service.category}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {service.plans.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className={`pricing-card relative bg-card/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border ${
                          plan.popular
                            ? `border-${service.color}-500/50 glow-border-${service.color} shadow-lg shadow-${service.color}-500/10`
                            : "border-border"
                        } transition-all duration-500 transform hover:scale-[1.02] hover:bg-card/70`}
                      >
                        {plan.popular && (
                          <div
                            className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-${service.color}-500 text-white text-xs font-bold px-3 py-1 rounded-full`}
                          ></div>
                        )}

                        <div className="mb-4 sm:mb-6">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                            {plan.name}
                          </h3>
                          <div className="flex items-end">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold mr-2">
                              {plan.price}
                            </span>
                            <span className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-1.5">
                              {plan.period}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground mt-2 sm:mt-3">
                            {plan.description}
                          </p>
                        </div>

                        <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <Check
                                className={`w-4 h-4 sm:w-5 sm:h-5 text-${service.color}-400 mt-0.5 mr-2 flex-shrink-0`}
                              />
                              <span className="text-sm sm:text-base">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button
                          className={`w-full ${
                            plan.popular
                              ? `bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 hover:from-${service.color}-600 hover:to-${service.color}-700 text-white`
                              : "bg-white/5 hover:bg-white/10 border border-white/20"
                          } px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Close button (optional) */}
            {activeSection && (
              <div className="text-center">
                <button
                  onClick={() => setActiveSection(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Close All Sections
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="px-4 md:px-6 py-8 md:py-12 py-30 " ref={projectsRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 tracking-wide">
            RECENT WEB PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ">
            {webProjects.map((project, index) => (
              <div key={project.id} className="project-card group relative mb-5 ">
                <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-black/40 hover:border-black/60 transition-all duration-300 transform hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-full text-xs bg-white/20 text-foreground backdrop-blur-sm border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/10"
                      >
                        <ExternalLink className="w-4 h-4 text-foreground" />
                      </a>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/10">
                        <Github className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-white/60 mb-3 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded-full text-xs bg-white/10 text-foreground border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-5 md:py-12 pb-[20vh] text-center bg-gradient-to-t from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-foreground font-bold mb-4 md:mb-6 tracking-wide">
            READY TO BUILD THE FUTURE?
          </h2>
          <p className="text-base md:text-lg  text-foreground mb-6 md:mb-8 px-4">
            Let's create a web experience that defines tomorrow's digital
            landscape.
          </p>
          <Link to="/services">
            <button className="bg-gradient-to-r from-background/20 to-backgroung/10 hover:from-white/30 hover:to-white/20 text-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 border border-foreground hover:border-foreground">
              START YOUR PROJECT
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebServices;
