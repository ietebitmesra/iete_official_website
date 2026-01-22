import React from "react";
import { Linkedin } from "lucide-react";
import team from "../data/profile";

const Alumni = () => {
    const placeholder = "https://via.placeholder.com/112?text=Alumni";

    return (
        <div
            id="alumni"
            className="relative w-full min-h-screen p-8 overflow-hidden bg-black"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#a941d2] via-[#f97316] to-white">
                    <span className="border-b-2 pb-2 inline-block">Alumni</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {team.map((alumnus) => (
                        <div
                            key={alumnus.name}
                            className="group relative rounded-2xl bg-gradient-to-br from-[#010b3a] via-[#235490] to-[#bbbdda] border border-[#3f3554] hover:border-[#a941d2] shadow-lg flex flex-col items-center p-8 transition-all duration-300 hover:shadow-[#a941d2]/30 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="relative mb-4">
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#a941d2] via-transparent to-[#f97316] blur-lg opacity-40 group-hover:opacity-80 transition" />
                                <img
                                    src={alumnus.profile_photo !== "NA" ? alumnus.profile_photo : placeholder}
                                    alt={alumnus.name}
                                    className="w-28 h-28 object-cover rounded-full border-4 border-yellow-500 relative z-10 shadow-lg transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <h2 className="text-lg md:text-xl font-bold mb-1 text-center group-hover:text-[#f97316] transition">
                                {alumnus.name}
                            </h2>
                            <p className="text-gray-300 font-serif mb-4 mt-1 text-center">
                                {(alumnus.role || "Alumni").toUpperCase()}
                            </p>

                            <div className="w-full flex flex-col gap-1 text-sm text-gray-200 text-center min-h-[56px]">
                                {alumnus.experience?.length ? (
                                    alumnus.experience.map((exp, i) => (
                                        <span key={`${alumnus.name}-exp-${i}`} className="block">
                                            <span className="font-semibold">{exp.role}</span> @ {exp.company}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-gray-400">Experience coming soon</span>
                                )}
                            </div>

                            {alumnus.linkedin && alumnus.linkedin !== "NA" && (
                                <div className="flex space-x-3 mt-auto pt-3">
                                    <a
                                        href={alumnus.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="LinkedIn"
                                        className="group relative rounded-full p-2 hover:bg-blue-600 transition"
                                    >
                                        <Linkedin className="w-6 h-6 text-blue-300 group-hover:text-white" />
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alumni;
