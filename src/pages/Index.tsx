import React, { useEffect, useRef, Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";

// Image imports (verify these paths match your actual file structure)
import i1 from "./assets/assests/imgi_16_6824c4e17871e47a50577e75_OpenPipe-logo-white.png";
import i2 from "./assets/assests/imgi_34_67b7ae29a34054d481ed86f8_ai2.svg";
import i3 from "./assets/assests/imgi_36_67b7afe2d51809648db7a00a_leonardo.svg";
import i4 from "./assets/assests/imgi_37_67b7aff15ddb92f9803e857b_snorkel.svg";
import i5 from "./assets/assests/imgi_38_67b7b01204013240ce111e90_zoho.svg";
import i6 from "./assets/assests/imgi_39_67b7b01b76fa500cc4788094_quora.svg";
import i7 from "./assets/assests/imgi_41_67b7b02c1b74f147051a8243_zoom.svg";
import i8 from "./assets/assests/imgi_45_67b7b0666959b020059524f4_wordware.svg";
import i9 from "./assets/assests/imgi_46_67b7b083c401542e937e7344_latitude.svg";
import i10 from "./assets/assests/imgi_47_67b7b08affcaaddc02fdb34e_pika.svg";
import i11 from "./assets/assests/imgi_31_67b7adf4acc8631e3ba4455d_krea.png";
import i12 from "./assets/assests/imgi_17_6824c4ec831d51b0eb44cea8_Evertune-logo-white.png";
import i13 from "./assets/assests/imgi_18_6824c5055377f8764e1d0d85_cohere-logo-white.png";
import i14 from "./assets/assests/imgi_19_681dcc95ba51b5a0965230f8_DeepMind-logo-white.png";
import i15 from "./assets/assests/imgi_20_681dcc464c6dcd4207467074_LG_AI_Research-logo-white.png";
import i16 from "./assets/assests/imgi_21_681ce3b43c044795beb1256f_vfs-global-logo-white.png";
import i17 from "./assets/assests/imgi_22_681a1dbc8c325a5e89294766_elevanlabs-logo-white.png";
import i18 from "./assets/assests/imgi_23_681a1da288f59f8d6e809dbf_arcee-ai-logo-white.png";
import i19 from "./assets/assests/imgi_24_67b7ad6170be5cad08748752_captions.png";
import i20 from "./assets/assests/imgi_25_67b7ad6f9d590a30e1bc7406_cartesia.png";
import i21 from "./assets/assests/imgi_26_67b7ad7b8e7de3ec78f1b1c4_sk-telecom.png";
import i22 from "./assets/assests/imgi_27_67b7adbd5ab2d448918ad85c_mozilla.png";
import i23 from "./assets/assests/imgi_28_67b7add66278bf3abb15329e_hedra.png";
import i24 from "./assets/assests/imgi_29_67c4ef87b13b60623b1196eb_cognition.png";
import i25 from "./assets/assests/imgi_32_67b7adfb81bc6525dda6e743_jasperai.png";
import i26 from "./assets/assests/imgi_43_67b7b044d4283dc2547a472b_upstage.png";
import i27 from "./assets/assests/imgi_64_6818c94b2e5d1a965de9ff6e_arcee-ai-logo-white.png";

// Corrected Spline lazy load
const Spline = lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Hero animation
      const heroAnimation = gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
      animationRefs.current.push(heroAnimation);

      // Services animation
      const serviceCards =
        servicesRef.current?.querySelectorAll(".service-card") || [];
      const serviceAnimations = gsap.fromTo(
        serviceCards,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
      animationRefs.current.push(serviceAnimations);

      return () => {
        animationRefs.current.forEach((anim) => anim.kill());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        animationRefs.current = [];
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Combine all images into one array for easier mapping
  const allImages = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i21,
    i22,
    i23,
    i24,
    i25,
    i26,
    i27,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden transition-colors duration-300">
      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="md:pl-24 relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
            {/* Left Content */}
            <div className="z-10 order-2 lg:order-1" ref={heroRef}>
              <div className="mb-4 md:mb-6"></div>

              <h1 className="text-4xl md:text-5xl text-center flex justify-center items-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent lg:text-6xl font-bold tracking-wide mb-4 md:mb-6 leading-tight">
                METABULL
                <br />
                UNIVERSE
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-8 md:mb-12 leading-relaxed">
                Transforming ideas into extraordinary digital experiences
                through cutting-edge web development, immersive video
                production, and strategic social media solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-44 md:ml-16">
                <Link to="/services">
                  <button className="bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 text-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 border border-primar/20 hover:border-primary/40 w-full sm:w-auto">
                    Explore Services
                  </button>
                </Link>
                <button className="border border-border hover:border-primary/40 text-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-primary/10 w-full sm:w-auto">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right 3D Model */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[80vh] md:top-2 top-[18vh] p-[53px]  order-1 lg:order-2">
              <Suspense
                fallback={
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-background to-blue-900/30 flex items-center justify-center">
                    <div className="animate-float text-muted-foreground">
                      Loading 3D Experience...
                    </div>
                  </div>
                }
              >
                <div className="w-full h-full top-10 spline-container rounded-2xl overflow-hidden">
                  <Spline
                    scene="https://prod.spline.design/WQMhPev-Svajq8FU/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div id="marquee" className="bg-black/30 origin-right px-10">
        <div className="h1">
          {allImages.map((img, index) => (
            <img
              key={`h1-${index}`}
              src={img}
              className="h-[10vh] img1"
              alt={`client logo ${index}`}
            />
          ))}
        </div>
      </div>

      <div id="marque" className="bg-black/30   origin-right">
        <div className="h2">
          {allImages.map((img, index) => (
            <img
              key={`h2-${index}`}
              src={img}
              className="h-[10vh] img2"
              alt={`client logo ${index}`}
            />
          ))}
        </div>
      </div>

      {/* Services Preview */}
      <section
        className="px-4 md:pl-24 md:px-6 py-4 md:py-16 bg-gradient-to-b from-background to-muted/20"
        ref={servicesRef}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-wide">
              OUR <span className="text-purple-400">EXPERTISE</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Three core pillars of digital excellence that drive innovation and
              results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Web Development",
                desc: "Next-generation websites and applications built with cutting-edge technology",
                icon: "🚀",
                link: "/web-services",
              },
              {
                title: "Video Production",
                desc: "Cinematic storytelling through professional video editing and motion graphics",
                icon: "🎬",
                link: "/video-services",
              },
              {
                title: "Social Strategy",
                desc: "Data-driven social media campaigns that build communities and drive engagement",
                icon: "📱",
                link: "/social-services",
              },
            ].map((service, index) => (
              <Link key={index} to={service.link}>
                <div className="service-card group bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:bg-card/80 h-full glow-border">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-8 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-wide">
            READY TO <span className="text-purple-400">TRANSFORM</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
            Let's bring your digital vision to life with innovative solutions
            that make an impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link to="/services">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-foreground px-8 md:px-12 py-3 md:py-4 rounded-full font-medium text-base  md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 w-full sm:w-auto glow-border ">
                Start Your Project
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-border hover:border-purple-500/40 text-foreground px-8 md:px-12 py-3 md:py-4 rounded-full font-medium text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-card/50 w-full sm:w-auto glow-border">
                Contact with us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl md:text-2xl font-bold mb-4 tracking-wide">
            METABULL <span className="text-purple-400">UNIVERSE</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Crafting digital experiences that define the future
          </p>
          <div className="text-muted-foreground/60 text-sm">
            © 2024 Metabull Universe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
