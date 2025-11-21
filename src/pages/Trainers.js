import React from "react";
import SectionTitle from "../components/SectionTitle";
import TrainerCard from "../components/TrainerCard";

function Trainers() {
  const trainers = [
    {
      name: "Aarav Desai",
      role: "Strength & Conditioning Coach",
      image: "https://i.pinimg.com/originals/f6/eb/00/f6eb00a66abc2730832553f8a57f3696.png",
      specialties: "Muscle gain • Powerlifting • Performance"
    },
    {
      name: "Diya Kapoor",
      role: "Fat Loss Specialist",
      image: "https://img.freepik.com/premium-photo/fit-muscular-female-personal-trainer-is-holding-tablet-her-hands-smiling-gym_232070-15233.jpg",
      specialties: "Fat loss • HIIT • Habit coaching"
    },
    {
      name: "Rohan Sharma",
      role: "Mobility & Rehab Coach",
      image: "https://img.freepik.com/premium-photo/man-gym-gym-trainer-fitness-gym-man-hd-image_594776-2510.jpg",
      specialties: "Mobility • Rehab-safe training • Posture"
    },
    {
      name: "Sana Sheikh",
      role: "Strength & Conditioning",
      image: "https://th.bing.com/th/id/R.86277088d36148e6c331f5fcdc0ba236?rik=QY3bP0W5Lwghqg&riu=http%3a%2f%2fwww.ebony.com%2fwp-content%2fuploads%2f2022%2f11%2f18%2fGettyImages-1047643096-1.jpg&ehk=NDwmzlGamuySKVNDYmSGAiCJvqpw%2b9ILnyg8fGzQyq4%3d&risl=&pid=ImgRaw&r=0",
      specialties: "Strength • Women’s training • Mindset"
    },
    {
      name: "Karan Mehta",
      role: "Performance Coach",
      image: "https://c8.alamy.com/comp/T0459D/portrait-of-smiling-personal-fitness-trainer-in-gym-confident-man-with-folded-hands-looking-at-camera-fitness-sport-training-people-concept-T0459D.jpg",
      specialties: "Speed • Agility • Athlete development"
    },
    {
      name: "Ananya Rao",
      role: "Yoga & Breathwork",
      image: "https://www.shutterstock.com/shutterstock/photos/723453481/display_1500/stock-photo-closeup-portrait-young-attractive-woman-lifting-weight-in-gym-indoors-with-equipment-in-the-723453481.jpg",
      specialties: "Yoga • Mobility • Stress management"
    }
  ];

  return (
    <section>
      <SectionTitle
        eyebrow="Team"
        title="Meet your coaching squad."
        subtitle="Every coach is certified, experienced and trained to make your workouts safe, effective and fun."
      />
      <div className="grid grid-3">
        {trainers.map((t) => (
          <TrainerCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}

export default Trainers;
