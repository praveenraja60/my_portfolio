import React from "react";
import { motion } from "framer-motion";
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
    date: "May 2021 – December 2021",
    company: "SRJ Infognana Systems Private Limited",
    location: "Coimbatore",
    description: [
      "Collaborated closely with design, product management, and development teams to create elegant, responsive, and interactive client webpages.",
      "Worked with back-end developers and web designers to enhance usability and user experience.",
      "Developed components and modules tailored to customer requirements.",
      "Maintained, updated, and improved existing company websites for optimal performance.",
      "Implemented modern functionalities for frontend web-based applications.",
      "Supported seamless integration of rapidly evolving design and technology.",
      "Pushed the latest code to GitHub for version control and collaboration.",
      "Key Projects: Tab Service, Easy Cart.",
    ],
  },
  {
    id: 5,
    position: "Junior Developer",
    date: "September 2020 – April 2021",
    company: "Aaludra Technologies",
    location: "Coimbatore",
    description: [
      "Played a pivotal role in developing, improving, and operating web-based software systems.",
      "Conducted thorough code reviews, addressed bugs, performed QA testing, and effectively solved problems.",
      "Verified API functionality using tools such as POSTMAN and SWAGGER to ensure reliable performance.",
      "Provided responsive technical support to clients, resolving issues promptly to ensure satisfaction.",
      "Ensured precise form alignment according to user needs and specifications.",
      "Contributed significantly to the success of key project initiatives, including SFC (Sakthi Fertilizers Corporations).",
      "Collaborated closely with teams to optimize software functionality and enhance user experience.",
      "Facilitated continuous improvement through proactive problem-solving and innovative solutions.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-4xl">
            Professional Journey
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
        </motion.div>

        <div className="relative">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 p-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg"
                  >
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
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="mr-2 text-indigo-600">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
