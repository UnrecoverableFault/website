"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

const ResumeContent = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-500">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'm a passionate web developer with expertise in modern technologies like React, Next.js, and Tailwind CSS.
            I love creating beautiful, responsive, and user-friendly web applications.
          </p>
        </CardContent>
      </Card>

      {/* <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-500">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Experience</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Senior Web Developer at TechCorp (2018 - Present)</li>
            <li>Full Stack Developer at InnoSoft (2015 - 2018)</li>
            <li>Junior Developer at WebSolutions (2013 - 2015)</li>
          </ul>
        </CardContent>
      </Card> */}

      <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-500">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "AWS", "Docker"].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-8">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300" onClick={() => window.open('/resume.pdf', '_blank')}>
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>
    </div>
  )
}

export default ResumeContent

