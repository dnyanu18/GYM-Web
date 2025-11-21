import React from "react";
import SectionTitle from "../components/SectionTitle";
import ClassCard from "../components/ClassCard";

function Classes() {
  const classes = [
    {
      title: "Strength & Hypertrophy",
      level: "Intermediate",
      duration: "60 min",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Structured barbell and dumbbell training focused on progressive overload and muscle growth."
    },
    {
      title: "HIIT & Metabolic Finishers",
      level: "All Levels",
      duration: "45 min",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Short, intense intervals combined with explosive bodyweight movements to maximise calorie burn."
    },
    {
      title: "Cardio Endurance Ride",
      level: "Beginner–Intermediate",
      duration: "50 min",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Rhythm-based cycling class that keeps your heart rate in the sweet spot for endurance."
    },
    {
      title: "Strength & Mobility Flow",
      level: "All Levels",
      duration: "55 min",
      image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Blend of mobility drills and strength work to unlock range of motion and rock-solid joints."
    },
    {
      title: "Core & Stability Lab",
      level: "All Levels",
      duration: "40 min",
      image: "https://images.pexels.com/photos/4324020/pexels-photo-4324020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Targeted core training that supports better lifts, posture and day-to-day movement."
    },
    {
      title: "Weekend Sweat Camp",
      level: "All Levels",
      duration: "60 min",
      image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Community-driven outdoor style workout that resets your energy for the week ahead."
    }
  ];

  return (
    <section>
      <SectionTitle
        eyebrow="Classes"
        title="Choose the training style you enjoy."
        subtitle="Pick a mix of strength, conditioning and recovery sessions to build a sustainable routine."
      />
      <div className="grid grid-3">
        {classes.map((cls) => (
          <ClassCard key={cls.title} {...cls} />
        ))}
      </div>
    </section>
  );
}

export default Classes;
