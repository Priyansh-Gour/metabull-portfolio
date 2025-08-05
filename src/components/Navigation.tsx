import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Settings,
  Code,
  Video,
  Share2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../pages/assets/assests/cropped-WhatsApp_Image_2024-12-02_at_14.02.28_62850caf-removebg-preview.png";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Services", icon: Settings },
    { path: "/web-services", label: "Web Dev", icon: Code },
    { path: "/video-services", label: "Video", icon: Video },
    { path: "/social-services", label: "Social", icon: Share2 },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleItemClick = (path: string) => {
    setActiveItem(activeItem === path ? null : path);
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-full z-50">
        <div
          className={`h-full bg-background/80 backdrop-blur-md border-r border-border transition-all duration-300 ease-in-out
          ${isExpanded ? "w-64" : "w-20"}`}
        >
          {/* Logo (now acts as toggle) */}
          <div
            className="flex items-center p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <img src={logo} alt="Logo" className="h-8" />
            {isExpanded && (
              <h1 className="ml-3 text-xl font-bold whitespace-nowrap grid">
                METABULL <span className="text-purple-400">UNIVERSE</span>
              </h1>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 p-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    onClick={() => handleItemClick(link.path)}
                    className={`flex items-center p-3 rounded-lg transition-all ${
                      isActive(link.path)
                        ? "bg-purple-500/20 text-purple-400"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {isExpanded && (
                      <span className=" mt-0 whitespace-nowrap">
                        {link.label}
                      </span>
                    )}
                  </Link>

                  {/* Tooltip for collapsed state */}
                  {!isExpanded && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-foreground text-background text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {link.label}
                      <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-foreground transform rotate-45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <div className="flex justify-between items-center">
              <ThemeToggle />
              {isExpanded && (
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (unchanged) */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="https://metabulluniverse.com/"
              className="text-xl md:text-2xl font-bold tracking-wide flex justify-center items-center gap-4 hover:scale-105 transition-transform"
            >
              <img src={logo} alt="" className="h-10 ml-3" />
              <h1 className="md:opacity-100 opacity-0">
                METABULL <span className="text-purple-400">UNIVERSE</span>
              </h1>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border flex bg-background/95 backdrop-blur-md">
              <div className="flex flex-col  space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full text-sm font-medium w-fit mx-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
