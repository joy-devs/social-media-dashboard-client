import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      

      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-gradient-to-r from-primary to-secondary text-white">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">Manage Your Social Media Like a Pro!</h1>
            <p className="py-4 text-lg">
              Track, analyze, and optimize your presence across <span className="font-bold">Facebook, YouTube, Instagram, and X</span>.
            </p>
            <button className="btn btn-accent btn-lg mt-4">Start Tracking Now</button>
          </div>
        </div>
      </section>

      {/* Social Media Platforms Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary">One Dashboard. Four Platforms.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div className="card bg-base-200 shadow-lg p-6 flex flex-col items-center">
            <FaFacebook className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Facebook</h3>
            <p>Monitor page performance, engagement, and ad insights.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6 flex flex-col items-center">
            <FaYoutube className="text-red-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">YouTube</h3>
            <p>Track video views, subscriber growth, and watch time.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6 flex flex-col items-center">
            <FaInstagram className="text-pink-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Instagram</h3>
            <p>Analyze post reach, story views, and audience engagement.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6 flex flex-col items-center">
            <FaTwitter className="text-blue-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">X (Twitter)</h3>
            <p>Monitor tweet interactions, trends, and follower growth.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-primary">Why Choose SocialX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">📊 Advanced Analytics</h3>
            <p>Get deep insights into engagement, audience growth, and post performance.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">🔥 Trending Content Tracker</h3>
            <p>Discover top-performing content and optimize your strategy.</p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">📅 Scheduling & Automation</h3>
            <p>Plan posts ahead of time and keep your audience engaged effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16 text-center bg-base-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary">Join Our Growing Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="stat">
            <div className="stat-value text-primary text-4xl">10M+</div>
            <div className="stat-title">Posts Tracked</div>
          </div>
          <div className="stat">
            <div className="stat-value text-primary text-4xl">5M+</div>
            <div className="stat-title">Engagement Reports</div>
          </div>
          <div className="stat">
            <div className="stat-value text-primary text-4xl">99%</div>
            <div className="stat-title">Accurate Insights</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-primary">What Our Users Say</h2>
        <div className="carousel w-full mt-10">
          <div className="carousel-item w-full flex justify-center">
            <div className="card bg-base-200 shadow-lg p-6 w-96">
              <p className="text-lg">"SocialX has transformed how I manage my social media. The analytics are spot on!"</p>
              <h4 className="text-primary font-semibold mt-2">- Jane Doe, Social Influencer</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <h2 className="text-3xl font-bold">Ready to Take Your Social Media to the Next Level?</h2>
        <p className="mt-4 text-lg">Start tracking your growth and engagement today!</p>
        <button className="btn btn-accent btn-lg mt-6">Get Started Now</button>
      </section>

      
    </div>
  );
};

export default LandingPage;
