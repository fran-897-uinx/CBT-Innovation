// import { useState } from "react";
import PricingCard from "./PricingCard";

const pricePlanList = [
  {
    plan: "Free",
    value: 0,
    period: "monthly",
    description: "Start learning with basic access",
    offers: [
      "Limited Exams per day",
      "Read News",
      "Basic Courses",
      "Join Public Groups",
      "Limited Messages",
      "Watch Videos (Low Quality)",
      "Community Support",
    ],
    popular: false,
  },
  {
    plan: "Pro",
    value: 5,
    period: "monthly",
    description: "Best for serious students",
    offers: [
      "Unlimited Exams",
      "Exam Analytics & History",
      "Downloadable Materials",
      "Certificates",
      "Unlimited Messages",
      "Join Private Groups",
      "HD Recorded & Live Videos",
    ],
    popular: true,
  },
  {
    plan: "Premium (Creator)",
    value: 10,
    period: "monthly",
    description: "For tutors and content creators",
    offers: [
      "Host Live Sessions",
      "Create Paid Courses",
      "1-on-1 Tutoring",
      "Create Private Groups",
      "Monetize Content",
      "Priority Support",
      "Advanced Analytics",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-gray-50 w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-blue-600 rounded"></span>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Pricing
            </span>
            <span className="w-8 h-1 bg-blue-600 rounded"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flexible Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. Start with our free plan
            and upgrade when you're ready.
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricePlanList.map((item) => (
            <PricingCard
              key={item.plan}
              plan={item.plan}
              value={item.value}
              period={item.period}
              description={item.description}
              offers={item.offers}
              isFeatured={item.popular}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All plans include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure platform</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Regular updates</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Mobile responsive</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ/Support */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help choosing the right plan?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold border border-blue-600 hover:border-blue-700 rounded-lg px-6 py-3 transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
