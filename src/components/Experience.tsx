import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { AnimatedTimeline } from "./AnimatedTimeline";

const experiences = [
  {
    id: 1,
    position: "Reactjs Developer",
    date: "Aug 2023 – Present",
    company: "Kambaa Incorporation",
    location: "Coimbatore",
    description: [
      "Transformed legacy projects into modern, responsive applications using React.js, resulting in significant improvements in performance, speed, and overall efficiency.",
      "Designed and developed a feature-rich Admin Panel with tailored functionalities for both customers and delivery personnel, enhancing operational control and user accessibility.",
      "Overhauled the user interface with a fresh, intuitive design and integrated advanced features aligned with specific client requirements.",
      "Took ownership of end-to-end development on several standalone projects using React Native, successfully launching apps on both Android and iOS with seamless cross-platform compatibility.",
      "Integrated a smart alert system for real-time order notifications, significantly improving the end-user experience and response time.",
      "Handled payment integration using Razorpay, ensuring secure, reliable, and smooth transaction workflows across platforms.",
      "Regularly deployed updated code to production servers, ensuring seamless integration, minimal downtime, and optimal performance.",
      "Played a key role in major projects such as Grozerbeez (React Native), EasyDaily, and AnythingKovai (React.js).",
      "Embraced agile methodologies, contributing to faster development cycles and timely project deliveries.",
      "Worked closely with senior backend developers using Node.js to identify bottlenecks and implement performance enhancements.",
      "Promoted a culture of collaboration by sharing insights and best practices, ultimately contributing to team growth and project success.",
      "Maintained a proactive approach to troubleshooting, continuously improving systems through innovative and efficient solutions.",
      "Built new projects with Prompt using AI and integrated with Supabase.",
      "Tested upcoming AI technologies and created presentations on findings.",
      "Managed and maintained projects developed using PHP, Laravel, and Next.js, ensuring smooth functionality.",
    ],
  },
  {
    id: 2,
    position: "Web Application Developer",
    date: "Jan 2023 – May 2023",
    company: "Intuitive Stack Solutions Private Limited",
    location: "Hyderabad",
    description: [
      "Identified and resolved design issues in both existing and developing products.",
      "Developed controllers, modules, and services tailored to customer requirements.",
      "Implemented new functionalities for frontend web applications, enhancing the overall user experience.",
      "Conducted thorough manual testing of projects and meticulously documented feedback.",
      "Collaborated closely with the development team to define the scope and scale of software projects.",
      "Applied best practices in software development to ensure high-quality deliverables.",
      "Utilized project management tools to track progress and ensure timely completion of tasks.",
    ],
  },
  {
    id: 3,
    position: "Associate Software Engineer",
    date: "Mar 2022 – Nov 2022",
    company: "BambeeQ Solutions Private Limited",
    location: "Chennai",
    description: [
      "Delivered comprehensive end-to-end services, engaging in projects encompassing databases and user-facing websites.",
      "Resolved complex design issues affecting both current and developing products.",
      "Developed components and modules precisely tailored to customer specifications.",
      "Implemented advanced functionalities for frontend web-based applications, enhancing overall usability and performance.",
      "Collaborated closely with the development team to define the scope and scale of software projects.",
      "Key Projects: HMS (Hospital Management System), TMS (Task Management System), HRA.",
      "Enhanced project outcomes through proactive problem-solving and innovation.",
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
      "Maintained, updated, and improved existing company websites for optimal performance and reliability.",
      "Implemented modern functionalities for frontend web-based applications, ensuring cutting-edge features.",
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

        <AnimatedTimeline>
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-center timeline-item ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                    },
                  },
                }}
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
        </AnimatedTimeline>
      </div>
    </section>
  );
}
