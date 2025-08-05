import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Camera, Film, Palette, Music, Edit, Play, Award, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Threads from "./Threads";

import { Code, Video, Users, Check, ArrowRight, Star, Zap } from "lucide-react";

import v1 from "./assets/assests/CRYPTO BY SIDDHARTH V1.mp4"
import v2 from "./assets/assests/CRYPTO BY SIDDHARTH V2.mp4";
import v3 from "./assets/assests/hervideo.mp4";
import v4 from "./assets/assests/plane.mp4";
import v5 from "./assets/assests/iss.mp4";
import v6 from "./assets/assests/Play Kalyan Matka Ad video.mp4";


// Lazy load Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

gsap.registerPlugin(ScrollTrigger);

const videoProjects = [
  {
    id: 1,
    title: 'Brand Documentary',
    description: 'Corporate documentary showcasing company culture and values',
    thumbnail: v1,
    duration: '3:45',
    category: 'Documentary',
    year: '2024'
  },
  {
    id: 2,
    title: 'Product Showcase',
    description: 'Dynamic product reveal with motion graphics and animation',
    thumbnail: v2,
    duration: '1:30',
    category: 'Commercial',
    year: '2024'
  },
  {
    id: 3,
    title: 'Music Video',
    description: 'Cinematic music video with creative visual storytelling',
    thumbnail: v3,
    duration: '4:12',
    category: 'Creative',
    year: '2023'
  },
  {
    id: 4,
    title: 'Event Highlight',
    description: 'Conference highlights with dynamic editing and graphics',
    thumbnail: v4,
    duration: '2:18',
    category: 'Event',
    year: '2024'
  },
  {
    id: 5,
    title: 'Animation Reel',
    description: '2D/3D animation showcase with motion graphics',
    thumbnail: v5,
    duration: '1:45',
    category: 'Animation',
    year: '2024'
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    description: 'Series of short-form content for social platforms',
    thumbnail: v6,
    duration: '0:15',
    category: 'Social',
    year: '2024'
  }
];

const VideoServices = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
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

    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    // Services grid animation
    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
 const pricingPlans = [
   {
     category: "Video Production",
     icon: Video,
     color: "purple",
     plans: [
       {
         name: "Basic Edit",
         price: "₹599/-",
         period: "per video",
         description: "Simple editing for your raw footage",
         features: [
           "Up to 30 sec runtime",
           "Color Correction",
           "Basic Transitions",
           "2 Revisions",
           "1 Week Delivery",
         ],
         popular: false,
       },
       {
         name: "Standard",
         price: "₹799/-",
         period: "per video",
         description: "Professional editing with motion graphics",
         features: [
           "Up to 1 min runtime",
           "Advanced Color Grading",
           "Motion Graphics",
           "Sound Design",
           "5 Revisions",
         ],
         popular: true,
       },
       {
         name: "Premium",
         price: "₹4,999",
         period: "per video",
         description: "Hollywood-quality production",
         features: [
           "upto 5 min  Runtime",
           "Full Production Service",
           "3D Animation",
           "Unlimited Revisions",
           "Price will increase according to the duration of the video",
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
            <div className="order-2 lg:order-1 z-10">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-wide mb-4 md:mb-6 leading-tight">
                <span className="text-[100px]">VIDEO</span>
                <br />
                <span className="text-muted-foreground">EDITING </span>

                <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  SERVICE
                </span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-12 px-4 lg:px-0">
                Crafting next-generation video experiences with cutting-edge
                technology
              </p>
            </div>

            {/* Right 3D Model */}
            <div
              style={{ width: "100%", height: "200px", position: "relative" }}
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

      <section className="px-4 md:px-6 py-1 md:py-12">
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
                OUR VIDEO EXPERTIES
              </button>
              <button
                onClick={() => toggleSection("section2")}
                className={`px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-base md:text-lg duration-300 transform hover:scale-105 w-full sm:w-auto border transition-all ${
                  activeSection === "section2"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-500/20"
                    : "bg-background/70 border-border hover:border-purple-500/50 text-foreground"
                }`}
              >
                VIDEO CREATION PRICING
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
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16 tracking-wide">
                  OUR VIDEO EXPERTISE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      icon: Camera,
                      title: "CINEMATOGRAPHY",
                      desc: "Professional video production with cinematic quality and artistic vision.",
                      color: "red",
                    },
                    {
                      icon: Edit,
                      title: "POST-PRODUCTION",
                      desc: "Advanced editing, color grading, and effects to bring your vision to life.",
                      color: "purple",
                    },
                    {
                      icon: Film,
                      title: "MOTION DESIGN",
                      desc: "Dynamic motion graphics and animations that enhance storytelling.",
                      color: "blue",
                    },
                    {
                      icon: Palette,
                      title: "COLOR GRADING",
                      desc: "Professional color correction and grading for cinematic aesthetics.",
                      color: "green",
                    },
                    {
                      icon: Music,
                      title: "SOUND DESIGN",
                      desc: "Immersive audio design and mixing for complete sensory experiences.",
                      color: "yellow",
                    },
                    {
                      icon: Play,
                      title: "DELIVERY",
                      desc: "Multi-format export and optimization for any platform or medium.",
                      color: "pink",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="service-card group bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:bg-card/80 glow-border"
                    >
                      <service.icon
                        className={`w-10 h-10 md:w-12 md:h-12 text-${service.color}-400 mb-4 md:mb-6 group-hover:animate-pulse-slow transition-all duration-300`}
                      />
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-wide group-hover:text-red-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light group-hover:text-muted-foreground/80 transition-colors duration-300">
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
      <section className="px-4 md:px-6 py-1 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light text-center mb-12 md:mb-16 tracking-wide">
            RECENT VIDEO PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videoProjects.map((project) => (
              <div
                key={project.id}
                className="group relative cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                onClick={() => setSelectedVideo(project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-background backdrop-blur-sm border border-gray-700/50  transition-all duration-500 ">
                  {/* Video Thumbnail */}
                  <div className="relative h-44 md:h-56 overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-[100vw] h-[50h] object-cover mb-3"
                    >
                      <source src={project.thumbnail} type="video/mp4" />
                    </video>{" "}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
                    {/* Play Button */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 md:w-20 h-16 md:h-20 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                        <Play className="w-8 md:w-10 h-8 md:h-10 text-white ml-1" />
                      </div>
                    </div> */}
                    {/* Duration Badge */}
                    {/* <div className="absolute top-3 md:top-4 right-3 md:right-4">
                      <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-black/70 text-white backdrop-blur-sm flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        {project.duration}
                      </span>
                    </div> */}
                    {/* Category Badge */}
                    {/* <div className="absolute top-3 md:top-4 left-3 md:left-4">
                      <span className="px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-red-500/80 text-red-100 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div> */}
                    {/* Year Badge */}
                    {/* <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4">
                      <span className="px-2 py-1 rounded text-xs bg-white/20 text-white backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div> */}
                  </div>

                  {/* Project Info */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-light mb-2 text-foreground group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <div className="flex items-center gap-2 md:gap-3 text-foreground">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                <span className="text-base md:text-lg font-light">
                  Festival Winner 2024
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-foreground">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                <span className="text-base md:text-lg font-light">
                  Best Editing Award
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-foreground">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                <span className="text-base md:text-lg font-light">
                  Creative Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py- md:py-12 text-center bg-gradient-to-t from-muted/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-orbitron font-light mb-6 md:mb-8 tracking-wide text-glow">
            TELL YOUR STORY
          </h2>
          <p className="text-lg md:text-xl text-foreground mb-8 md:mb-12 px-4 font-light">
            Every frame matters. Let's create visual content that resonates with
            your audience.
          </p>
          <Link to="/services">
            <button className="bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-foreground px-8 md:px-12 py-3 md:py-4 mb-10 rounded-full font-orbitron font-light text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 border border-foreground hover:border-foreground text-glow hover:shadow-lg hover:shadow-white/20">
              START YOUR PROJECT
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VideoServices;
