import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    position: "Reactjs Developer",
    date: "Aug 2023 – Present",
    company: "Kambaa Incorporation",
    location: "Coimbatore",
    description: [
      "Working on Independent Project in React Native for (Android & IOS)",
      "Create Controllers, modules, and services as per customer requirements",
      "Integrate the API provided by the backend team and verify it using Postman",
      "Meeting with the development team to define the scope and scale of software projects",
      "Currently working with Freshworks Products",
      "Projects: React Native (Grozerbeez), Reactjs (EasyDaily & AnythingKovai)",
    ],
  },
  {
    id: 2,
    position: "Web Application Developer",
    date: "Jan 2023 – May 2023",
    company: "INTUITIVE STACK SOLUTIONS PVT LTD",
    location: "Hyderabad",
    description: [
      "Resolving Problems that impact the design of current or developing products",
      "Create Controllers, Modules, and Services as per customer requirements",
      "Implemented new functionality for the frontend web-based applications",
      "Meeting with the development team to define the scope and scale of software projects",
    ],
  },
  {
    id: 3,
    position: "Associate Software Engineer",
    date: "Mar 2022 – Nov 2022",
    company: "BambeeQ Solutions Private Limited",
    location: "Chennai",
    description: [
      "Provide end-to-end service for database and user-facing websites",
      "Resolving Problems that impact the design of current or developing products",
      "Create components and modules as per customer requirements",
      "Implemented new functionality for the frontend web-based applications",
      "Meeting with the development team to define the scope and scale of software projects",
      "Projects: HMS (Hospital Management System), TMS (Task Management System), HRA",
    ],
  },
  {
    id: 4,
    position: "Project Delegate",
    date: "May 2021 - Dec 2021",
    company: "SRJ Infognana Systems Private Limited",
    location: "Coimbatore",
    description: [
      "Work closely with design, product management, and development teams",
      "Collaborate with back-end developers and web designers to improve usability",
      "Create components/modules as per customer requirements",
      "Maintain, update, and improve existing company websites",
      "Implemented modern functionalities for the frontend web-based applications",
      "Support immensely on optimal flow for rapidly changing design and technology",
      "Projects: Tab Service, Eassy Cart",
    ],
  },
  {
    id: 5,
    position: "Junior Developer",
    date: "Sep 2020 - Apr 2021",
    company: "Aaludra Technologies",
    location: "Coimbatore",
    description: [
      "Played a key role in the development of web-based software",
      "Perform code review, bug fix, QA, and problem solve",
      "Check/verify API functionality using POSTMAN, SWAGGER",
      "Provide technical support to the client facing issues",
      "Form alignment should get done as per user needs",
      "Project: SFC (Sakthi Fertilizers Corporations)",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-4xl">
            Professional Journey
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse"></div>

                <div className="w-full md:w-1/2 p-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        {exp.position}
                      </h3>
                      <span className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-full">
                        {exp.id}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Briefcase className="h-5 w-5 mr-2 text-indigo-600" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                        <span>{exp.date}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-700 dark:text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-indigo-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
