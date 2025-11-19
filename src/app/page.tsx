"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Sparkles, MapPin, Heart, Star, ThumbsUp, Smile, Award, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="Brew Haven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Discover Premium Coffee Crafted with Passion"
          description="Experience the finest specialty coffee blends, artisan pastries, and a welcoming atmosphere perfect for work or relaxation"
          tag="Specialty Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "features" },
            { text: "Reserve Table", href: "contact" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557353165-apu9m92x.jpg", imageAlt: "Artisan coffee shop interior" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557354553-xpoh5btf.jpg", imageAlt: "Premium espresso machine" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557356113-m2sa0d3q.jpg", imageAlt: "Latte art coffee" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557357362-ic4u4ior.jpg", imageAlt: "Coffee beans roasting" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557358668-8z1kfemn.jpg", imageAlt: "Cozy seating area" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We believe every cup tells a story of dedication, craftsmanship, and the perfect blend of quality ingredients sourced from ethical coffee farms worldwide"
          buttons={[
            { text: "Learn Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Our Coffee Experience"
          description="Explore what makes our coffee shop special, from carefully selected beans to expertly trained baristas"
          tag="Menu Highlights"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Single-Origin Espresso",
              description: "Meticulously sourced from coffee regions around the world. Each shot delivers unique flavor profiles and exceptional crema.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557359963-cd7fjxz6.jpg"
            },
            {
              id: 2,
              title: "Artisan Pastries & Bakes",
              description: "Daily fresh pastries, croissants, and desserts baked in-house. Perfect complement to any specialty coffee drink.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557361244-9cpv82ve.jpg"
            },
            {
              id: 3,
              title: "Expert Barista Craft",
              description: "Our certified baristas bring passion and precision to every pour. Specialty drinks tailored to your taste preferences.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557362515-cqwzvgdk.jpg"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="By The Numbers"
          description="See how we've built a thriving community of coffee lovers"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          metrics={[
            { id: "1", value: "8K+", description: "Happy Customers Monthly" },
            { id: "2", value: "50+", description: "Unique Coffee Blends" },
            { id: "3", value: "12", description: "Years of Excellence" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real stories from coffee enthusiasts who've made Brew Haven their favorite spot"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jessica Morgan",
              role: "Coffee Enthusiast",
              testimonial: "The best espresso I've had outside of Italy. The baristas truly understand coffee and care about every detail.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557364299-p8eikm4t.jpg",
              icon: Heart
            },
            {
              id: "2",
              name: "David Chen",
              role: "Freelance Designer",
              testimonial: "Perfect workspace with amazing coffee. I come here almost daily for the ambiance and exceptional quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557365524-38ug71vv.jpg",
              icon: Star
            },
            {
              id: "3",
              name: "Sarah Williams",
              role: "Marketing Manager",
              testimonial: "Consistently delivers exceptional drinks and outstanding customer service. A true gem in the neighborhood.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557366590-knyj3x4t.jpg",
              icon: ThumbsUp
            },
            {
              id: "4",
              name: "Marcus Thompson",
              role: "Writer",
              testimonial: "The cozy atmosphere and premium coffee blend make it my creative sanctuary. Highly recommended to all coffee lovers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557367764-wyv2k3zq.jpg",
              icon: Smile
            },
            {
              id: "5",
              name: "Emma Rodriguez",
              role: "Entrepreneur",
              testimonial: "Great specialty drinks and the pastries are absolutely divine. This is where business meetings happen.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557369016-4kqfnymw.jpg",
              icon: Award
            },
            {
              id: "6",
              name: "James Park",
              role: "Tech Professional",
              testimonial: "Brew Haven sets the standard for specialty coffee shops. Quality, consistency, and genuine hospitality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763557370321-omxyjshv.jpg",
              icon: Zap
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Visit Us?"
          description="Subscribe to our newsletter for exclusive offers, new menu items, and special events"
          tagIcon={MapPin}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time. We never sell your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew Haven"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "Menu", href: "features" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reviews", href: "testimonials" },
                { label: "Hours", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Gift Cards", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}