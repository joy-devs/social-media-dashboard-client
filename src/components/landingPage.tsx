import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-gradient-to-r from-primary to-secondary text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold">Connect, Share, Engage</h1>
        <p className="py-4 text-lg max-w-2xl">
          Join the fastest-growing social media platform and stay connected with your friends and community.
        </p>
        <button className="btn btn-accent btn-lg mt-4">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-primary">Why Choose SocialX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">🔗 Seamless Connectivity</h3>
            <p>Stay connected with your friends and loved ones anytime, anywhere.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">📰 Personalized Feed</h3>
            <p>Get content tailored to your interests and engage with trending topics.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">🔒 Secure & Private</h3>
            <p>Your data is safe with our end-to-end encryption and privacy controls.</p>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="bg-secondary py-16 text-white text-center">
        <h2 className="text-3xl font-bold">Our Growing Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          <div>
            <h3 className="text-5xl font-bold">1M+</h3>
            <p className="text-lg">Active Users</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">500K+</h3>
            <p className="text-lg">Daily Posts</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">99.9%</h3>
            <p className="text-lg">Server Uptime</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-primary">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="card bg-base-200 shadow-lg p-6">
            <p className="text-lg italic">"SocialX changed the way I connect with my friends!"</p>
            <p className="mt-4 font-bold">- Alex Johnson</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <p className="text-lg italic">"I love the security and privacy controls on this platform."</p>
            <p className="mt-4 font-bold">- Sarah Lee</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <p className="text-lg italic">"A fantastic platform with amazing features!"</p>
            <p className="mt-4 font-bold">- Daniel Brown</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-white py-16 text-center">
        <h2 className="text-4xl font-bold">Ready to Join?</h2>
        <p className="text-lg mt-4">Create an account now and start sharing your moments!</p>
        <button className="btn btn-accent btn-lg mt-6">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="footer p-6 bg-base-200 text-base-content text-center">
        <p>© {new Date().getFullYear()} SocialX - All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="link link-primary">Privacy Policy</a>
          <a href="#" className="link link-primary">Terms of Service</a>
          <a href="#" className="link link-primary">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
