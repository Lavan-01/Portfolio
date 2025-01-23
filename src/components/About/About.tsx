import React from 'react';
import { CheckCircle, Database, Bug } from 'lucide-react';

const skills = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Manual Testing",
    description: "Skilled in functional, regression, and integration testing"
  },
  {
    icon: <Bug className="w-6 h-6" />,
    title: "Automation Testing",
    description: "Proficient in Selenium, Cucumber, and creating test scripts"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Defect Tracking & Management",
    description: "Experienced in JIRA and other defect tracking tools"
  }
];

export function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              I'm a QA Engineer with 2.5 years of experience at Genpact, specializing in testing LoanIQ projects. Proficient in manual and automated testing, defect tracking, and test case design. 
              Experienced with tools like Selenium, JIRA, Postman, and Cucumber, and adept at ensuring high-quality deliverables through thorough functional, regression, and integration testing. 
              Skilled in identifying and resolving issues to optimize system performance and maintain compliance with client requirements.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              When I'm not working, you can find me playing cricket, 
              exploring trading strategies, or watching movies to unwind.

            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400 shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}