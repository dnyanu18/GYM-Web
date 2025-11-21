import React from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ClassCard from "../components/ClassCard";
import TrainerCard from "../components/TrainerCard";
import PricingCard from "../components/PricingCard";

function Home() {
  const classData = [
    {
      title: "Strength & Hypertrophy",
      level: "Intermediate",
      duration: "60 min",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Progressive overload based strength program designed to build lean muscle and raw strength."
    },
    {
      title: "HIIT Conditioning",
      level: "All Levels",
      duration: "45 min",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "High-intensity intervals that torch calories and skyrocket your endurance in under an hour."
    },
    {
      title: "Mobility & Core Flow",
      level: "Beginner",
      duration: "50 min",
      image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Low-impact session focused on stability, posture and joint health to keep you injury-free."
    }
  ];

  const trainerData = [
    {
      name: "Aarav Desai",
      role: "Strength & Conditioning Coach",
      image: "https://i.pinimg.com/originals/f6/eb/00/f6eb00a66abc2730832553f8a57f3696.png",
      specialties: "Powerlifting • Muscle gain • Athletic performance"
    },
    {
      name: "Diya Kapoor",
      role: "Fat Loss Specialist",
      image: "https://img.freepik.com/premium-photo/fit-muscular-female-personal-trainer-is-holding-tablet-her-hands-smiling-gym_232070-15233.jpg",
      specialties: "Sustainable fat loss • HIIT • Nutrition basics"
    },
    {
      name: "Rohan Sharma",
      role: "Mobility & Rehab Coach",
      image: "https://img.freepik.com/premium-photo/man-gym-gym-trainer-fitness-gym-man-hd-image_594776-2510.jpg",
      specialties: "Mobility • Posture correction • Rehab-friendly training"
    }
  ];

  const pricingData = [
    {
      name: "Starter",
      price: "999",
      period: "month",
      features: [
        "Gym floor access",
        "Locker & shower",
        "Basic onboarding plan"
      ]
    },
    {
      name: "Pro",
      price: "1799",
      period: "month",
      features: [
        "All Starter benefits",
        "Unlimited group classes",
        "Body composition check",
        "Priority support"
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: "2999",
      period: "month",
      features: [
        "All Pro benefits",
        "2 PT sessions / month",
        "Personalized training plan",
        "Nutrition guidance"
      ]
    }
  ];

  return (
    <>
      <Hero />

      <section style={{ marginTop: "3rem" }}>
        <SectionTitle
          eyebrow="Programs"
          title="Classes that match your goals."
          subtitle="Whether you want to lose fat, build muscle or just feel better, we have a track designed for you."
          align="center"
        />
        <div className="grid grid-3">
          {classData.map((cls) => (
            <ClassCard key={cls.title} {...cls} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3.2rem" }}>
        <SectionTitle
          eyebrow="Coaches"
          title="Train with certified experts."
          subtitle="Our coaches blend science and experience to build plans that work in real life."
          align="center"
        />
        <div className="grid grid-3">
          {trainerData.map((t) => (
            <TrainerCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3.2rem" }}>
        <SectionTitle
          eyebrow="Membership"
          title="Simple pricing, serious results."
          subtitle="No hidden fees, no long-term lock-ins. Upgrade, pause or cancel anytime."
          align="center"
        />
        <div className="grid grid-3">
          {pricingData.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
