import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";

const certifications = [
  {
    title: "EMC Academic Associate",
    issuer: "DELL Technologies",
    description: "Cloud Infrastructure and Services",
    verification: "E7YZ7VW61 FFQ2CSD",
    link: "https://www.certmetrics.com/emc/public/verification.aspx",
  },
  {
    title: "Mobile Computing",
    issuer: "NPTEL Online Certification",
    description: "Funded by Ministry of HRD, Govt. of India",
  },
];

const awards = [
  {
    title: "Certificate of Appreciation",
    year: "2021",
    issuer: "Aaludra Technologies",
    description: "Awarded for exemplary diligence",
  },
  {
    title: "Service Certificate",
    year: "2014 - 2016",
    issuer: "National Service Scheme (NSS)",
    description: "Recognized for completing two years of dedicated service",
  },
];

export function Certifications() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Certifications & Awards
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-indigo-600" />
              Professional Credentials
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md"
                >
                  <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {cert.description}
                  </p>
                  {cert.verification && (
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Verification Code: <span className="font-mono">{cert.verification}</span>
                      </p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Verify Certificate →
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-indigo-600" />
              Awards & Honors
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md"
                >
                  <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {award.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {award.issuer}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {award.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {award.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
