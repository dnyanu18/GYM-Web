import React from "react";
import SectionTitle from "../components/SectionTitle";
import PricingCard from "../components/PricingCard";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "999",
      period: "month",
      features: [
        "Gym floor access",
        "Locker & shower",
        "Basic onboarding plan",
        "Access to app workouts"
      ]
    },
    {
      name: "Pro",
      price: "1799",
      period: "month",
      highlighted: true,
      features: [
        "Unlimited group classes",
        "Body composition analysis",
        "Progress tracking check-ins",
        "Member events & workshops"
      ]
    },
    {
      name: "Elite",
      price: "2999",
      period: "month",
      features: [
        "4 PT sessions / month",
        "Custom nutrition guidelines",
        "Priority support & coaching",
        "Guest passes (2 / month)"
      ]
    }
  ];

  return (
    <section>
      <SectionTitle
        eyebrow="Membership"
        title="Pick a plan that fits your routine."
        subtitle="Upgrade or pause anytime. All memberships include access to IronPulse mobile app."
      />
      <div className="grid grid-3">
        {plans.map((p) => (
          <PricingCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Pricing;
