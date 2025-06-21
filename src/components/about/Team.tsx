"use client";

import { Instagram, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Tanmay Sharma",
    role: "Orthodontist & Dental Surgeon",
    image: "/tan.jpeg",
    bio: "B.D.S. from Darshan Dental College and Hospital, Udaipur (University of Rajasthan) and M.D.S. from Kothiwal Dental College & Research Center, Moradabad (MJPR University, Bareilly).",
    linkedin: "https://www.instagram.com/drtanmaysharma/",
    email: "drtanmaysharma@gmail.com",
  },
  {
    name: "Dr. Ridam Jain",
    role: "Orthodontist & Smile Design Expert",
    image: "/ridam.jpeg",
    bio: "B.D.S. from SDM Dental College, Dharwad, Karnataka and M.D.S. from Kothiwal Dental College, Moradabad, Uttar Pradesh.",
    linkedin: "https://www.instagram.com/oldgloryorthodontics/",
    email: "ridam@oldglorydental.com",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 rounded-full bg-sky-400"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Meet Our Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A compassionate team delivering exceptional dental care with precision and empathy.
          </p>
        </div>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-sky-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center px-6 py-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-800 mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-sky-500 font-medium text-sm mb-4 text-center">
                  {member.role}
                </p>
                <p className="text-slate-600 text-center text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-800 transition-colors bg-sky-50 hover:bg-sky-100 p-2 rounded-full"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sky-600 hover:text-sky-800 transition-colors bg-sky-50 hover:bg-sky-100 p-2 rounded-full"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
