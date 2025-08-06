
import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { ArrowLeft, Users, TrendingUp, Target, BarChart, MessageCircle, Calendar, Heart, Share2, Eye, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import Threads from "./Threads";
import { Code, Video, Check, ArrowRight, Star, Zap } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Lazy load Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

const socialCampaigns = [
  {
    id: 1,
    title: 'Tech Startup Launch',
    description: 'Complete social media strategy for B2B SaaS launch',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a25b481976e93d36b8b&profile_id=164&oauth2_token_id=57447761',
    platform: 'LinkedIn',
    engagement: '2.4M',
    growth: '+340%',
    category: 'B2B Strategy',
    client: 'TechFlow Inc.',
    duration: '6 months',
    results: ['340% follower growth', '2.4M impressions', '180% engagement increase']
  },
  {
    id: 2,
    title: 'Fashion Brand Campaign',
    description: 'Influencer collaboration and content creation strategy',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a25b481976e93d36b8b&profile_id=164&oauth2_token_id=57447761',
    platform: 'Instagram',
    engagement: '5.8M',
    growth: '+520%',
    category: 'Influencer Marketing',
    client: 'Luxe Fashion',
    duration: '4 months',
    results: ['520% reach increase', '5.8M total engagement', '50+ influencer partnerships']
  },
  {
    id: 3,
    title: 'Restaurant Chain Promotion',
    description: 'Multi-platform food content and community building',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a25b481976e93d36b8b&profile_id=164&oauth2_token_id=57447761',
    platform: 'TikTok',
    engagement: '12.3M',
    growth: '+890%',
    category: 'Content Creation',
    client: 'Urban Bites',
    duration: '8 months',
    results: ['890% viral content growth', '12.3M views', '25 trending hashtags']
  },
  {
    id: 4,
    title: 'Fitness App Launch',
    description: 'Health and wellness community engagement strategy',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a25b481976e93d36b8b&profile_id=164&oauth2_token_id=57447761',
    platform: 'YouTube',
    engagement: '3.2M',
    growth: '+275%',
    category: 'Community Building',
    client: 'FitLife Pro',
    duration: '5 months',
    results: ['275% subscriber growth', '3.2M watch hours', '95% retention rate']
  }
];

const SocialServices = () => {

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
        category: "SOCIAL STRATEGY",
        icon: Users,
        color: "pink",
        plans: [
          {
            name: "Advertisement",
            price: "₹10,620",
            period: "per week",
            description: "You will gain lot of customers",
            features: [
               "Facebook/Instagram Ads",
               "LinkedIn Campaigns",
               "Audience Targeting",
               "Ad Performance Optimization",
               "Retargeting Strategies",
               "Conversion Tracking"
              ],
            popular: false
          },
          {
            name: "Social media handling",
            price: "₹19,999",
            period: "per month",
            description: "Complete social media solution",
            features: [
              "Daily Posts",
              "Advanced Analytics",
              "3 Platforms",
              "Ad Management",
              "Strategy Sessions"
            ],
            popular: true
          },
          {
            name: "Graphics",
            price: "₹499-1499",
            period: "Per design",
            description: "price ",
            features: [
    "Social Media Banners",
    "Post Designs (Static & Carousel)",
    "Story Creatives",
    "Basic Motion Graphics",
    "Branded Templates",
  ],
            popular: false
          }
        ]
      }
    ];
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="md:pl-24 md:px-6 text-center py-12  md:py-20 md:mt-[15vh]">
        <div
          style={{ width: "100%", height: "300px", position: "relative" }}
          className="md:hidden block"
        >
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl  lg:text-6xl font-bold tracking-wide mb-4 md:mb-6 leading-tight">
                <span className="text-[70px]">SOCIAL</span>

                <br />
                <span className="text-muted-foreground">DIGITAL </span>

                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  STRATEGY
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-12 leading-relaxed">
                Building authentic connections and driving meaningful engagement
                across digital platforms
              </p>
              <div className="ml-[40vw] md:ml-[20vw]">
                <Users className="w-16 h-16 text-green-400 " />
              </div>
            </div>

            {/* Right 3D Model */}
            <div
              style={{ width: "100%", height: "300px", position: "relative" }}
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
      <section className="md:pl-24 px-4 md:px-6 py-1 md:py-12">
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
                OUR SOCIAL APPROACH
              </button>
              <button
                onClick={() => toggleSection("section2")}
                className={`px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-base md:text-lg duration-300 transform hover:scale-105 w-full sm:w-auto border transition-all ${
                  activeSection === "section2"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-500/20"
                    : "bg-background/70 border-border hover:border-purple-500/50 text-foreground"
                }`}
              >
                OUR SOCIAL PRICING
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-center my-7 font-bold text-glow">
                OUR SOCIAL APPROACH
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-background backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 tracking-wide">
                    STRATEGY
                  </h3>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">
                    Data-driven social media strategies tailored to your brand's
                    unique voice and goals.
                  </p>
                </div>

                <div className="bg-background backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 tracking-wide">
                    COMMUNITY
                  </h3>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">
                    Building and nurturing engaged communities around your
                    brand's mission.
                  </p>
                </div>

                <div className="bg-background backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                  <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-green-400 mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 tracking-wide">
                    CONTENT
                  </h3>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">
                    Compelling content creation that sparks conversations and
                    drives engagement.
                  </p>
                </div>

                <div className="bg-background backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                  <BarChart className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 tracking-wide">
                    ANALYTICS
                  </h3>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">
                    Comprehensive analytics and insights to optimize performance
                    and ROI.
                  </p>
                </div>

                <div className="bg-background backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                  <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-pink-400 mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 tracking-wide">
                    GROWTH
                  </h3>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">
                    Organic growth strategies that build lasting relationships
                    with your audience.
                  </p>
                </div>

                <div className="bg-background backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 tracking-wide">
                    MANAGEMENT
                  </h3>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">
                    End-to-end social media management from planning to
                    execution and optimization.
                  </p>
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
      <section className="md:pl-24 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light text-center mb-12 md:mb-16 tracking-wide">
            RECENT SOCIAL CAMPAIGNS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {socialCampaigns.map((campaign) => (
              <HoverCard key={campaign.id}>
                <HoverCardTrigger asChild>
                  <div className="group relative cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl bg-background backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:scale-[1.02]">
                      {/* Campaign Image/Video */}
                      <div className="relative h-48 md:h-64 overflow-hidden">
                        {/* Background Video */}
                        <video
                          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          autoPlay
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) =>
                            (e.target as HTMLVideoElement).play()
                          }
                          onMouseLeave={(e) =>
                            (e.target as HTMLVideoElement).pause()
                          }
                        >
                          <source src={campaign.videoUrl} type="video/mp4" />
                        </video>

                        {/* Static Image */}
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-black/70"></div>

                        {/* Platform Badge */}
                        <div className="absolute top-3 md:top-4 left-3 md:left-4">
                          <span className="px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-green-500/90 text-green-100 backdrop-blur-sm border border-green-400/30">
                            {campaign.platform}
                          </span>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 md:top-4 right-3 md:right-4">
                          <span className="px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-purple-500/90 text-purple-100 backdrop-blur-sm border border-purple-400/30">
                            {campaign.category}
                          </span>
                        </div>

                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                          </div>
                        </div>

                        {/* Engagement Stats */}
                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                          <div className="flex items-center justify-between text-white">
                            <div className="flex items-center gap-2 md:gap-4">
                              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 md:px-3 py-1">
                                <Eye className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="text-xs md:text-sm font-medium">
                                  {campaign.engagement}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 border border-green-400/30">
                                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                                <span className="text-xs md:text-sm font-medium text-green-400">
                                  {campaign.growth}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <button className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                              </button>
                              <button className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                                <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Campaign Info */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-light mb-2 md:mb-3 text-foreground group-hover:text-green-400 transition-colors">
                          {campaign.title}
                        </h3>
                        <p className="text-foreground leading-relaxed mb-2 md:mb-3 text-sm md:text-base">
                          {campaign.description}
                        </p>
                        <div className="flex items-center justify-between text-xs md:text-sm text-foreground">
                          <span>{campaign.client}</span>
                          <span>{campaign.duration}</span>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-72 md:w-80 bg-gray-900/95 backdrop-blur-xl border-gray-700 text-foreground">
                  <div className="space-y-3">
                    <h4 className="text-base md:text-lg font-semibold text-green-400">
                      {campaign.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">
                      {campaign.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-gray-500">Client:</span>
                        <span className="text-gray-300">{campaign.client}</span>
                      </div>
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="text-gray-300">
                          {campaign.duration}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-gray-500">Platform:</span>
                        <span className="text-gray-300">
                          {campaign.platform}
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-700">
                      <h5 className="text-xs md:text-sm font-medium text-foreground mb-2">
                        Key Results:
                      </h5>
                      <ul className="space-y-1">
                        {campaign.results.map((result, index) => (
                          <li
                            key={index}
                            className="text-xs text-foreground flex items-center gap-2"
                          >
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Results Summary */}
          {/* <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="text-2xl md:text-4xl font-light text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                24M+
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Total Reach
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-4xl font-light text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                450%
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Avg Growth
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-4xl font-light text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Campaigns
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-4xl font-light text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Client Retention
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="md:pl-24 px-4 md:px-6 py-1 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-light mb-8 md:mb-12 tracking-wide">
            PLATFORMS WE MASTER
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-background p-4 md:p-6 rounded-xl hover:bg-pink-500/10 transition-colors hover:scale-105 transform duration-300 border border-gray-700/50 hover:border-pink-500/30">
              <h3 className="text-sm md:text-lg font-light tracking-wide">
                INSTAGRAM
              </h3>
            </div>
            <div className="bg-background p-4 md:p-6 rounded-xl hover:bg-blue-500/10 transition-colors hover:scale-105 transform duration-300 border border-gray-700/50 hover:border-blue-500/30">
              <h3 className="text-sm md:text-lg font-light tracking-wide">
                TELEGRAM
              </h3>
            </div>
            <div className="bg-background p-4 md:p-6 rounded-xl hover:bg-green-600/10 transition-colors hover:scale-105 transform duration-300 border border-gray-700/50 hover:border-green-600/30">
              <h3 className="text-sm md:text-lg font-light tracking-wide">
                Whatsapp
              </h3>
            </div>
            <div className="bg-background p-4 md:p-6 rounded-xl hover:bg-red-500/10 transition-colors hover:scale-105 transform duration-300 border border-gray-700/50 hover:border-red-500/30">
              <h3 className="text-sm md:text-lg font-light tracking-wide">
                YOUTUBE
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:pl-24 px-4 md:px-6 py-1 md:py-12 text-center mb-48">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-6 md:mb-8 tracking-wide">
            AMPLIFY YOUR VOICE
          </h2>
          <p className="text-lg md:text-xl text-foreground mb-8 md:mb-12 px-4">
            Ready to build a social presence that truly connects with your
            audience?
          </p>
          <Link to="/services">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-foreground px-8 md:px-12 py-3 md:py-4 rounded-full font-light text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              START YOUR STRATEGY
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialServices;
