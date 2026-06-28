import {
  Cpu,
  CircuitBoard,
  Bot,
  Factory,
  Award,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      semester: "Semester 1",
      title: "Intelligent Product Engineering",
      icon: <CircuitBoard className="w-12 h-12 text-blue-700" />,
      duration: "4 Months",
      modules: [
        "Unit 1 - Product Design Thinking",
        "Unit 2 - Electronic Product Architecture",
        "Unit 3 - PCB Design & Manufacturing",
        "Unit 4 - Prototype Development",
        "Unit 5 - Product Commercialization",
      ],
      miniProject: "Develop a commercial electronic product prototype.",
      tools: ["KiCad", "Altium", "Proteus", "Git"],
      output: "Product Development Engineer",
    },

    {
      semester: "Semester 2",
      title: "Smart Connected Systems Engineering",
      icon: <Cpu className="w-12 h-12 text-green-700" />,
      duration: "4 Months",
      modules: [
        "Unit 1 - Embedded System Foundations",
        "Unit 2 - Communication Technologies",
        "Unit 3 - Cloud Connected Devices",
        "Unit 4 - Edge Device Security",
        "Unit 5 - Real-world IoT Deployments",
      ],
      miniProject: "Build a Smart Monitoring System.",
      tools: ["PlatformIO", "Arduino IDE", "AWS IoT Core", "Node-RED"],
      output: "Embedded IoT Engineer",
    },

    {
      semester: "Semester 3",
      title: "Edge AI & Intelligent Embedded Systems",
      icon: <Bot className="w-12 h-12 text-purple-700" />,
      duration: "4 Months",
      modules: [
        "Unit 1 - AI Fundamentals for Engineers",
        "Unit 2 - TinyML",
        "Unit 3 - Computer Vision on Embedded Devices",
        "Unit 4 - Predictive Analytics",
        "Unit 5 - AI Product Deployment",
      ],
      miniProject: "AI-Based Smart Quality Inspection System.",
      tools: ["TensorFlow Lite", "Edge Impulse", "OpenCV", "Python"],
      output: "Edge AI Engineer",
    },

    {
      semester: "Semester 4",
      title: "Industrial Automation & Industry 4.0 Systems",
      icon: <Factory className="w-12 h-12 text-orange-700" />,
      duration: "4 Months",
      modules: [
        "Unit 1 - Industrial Automation Basics",
        "Unit 2 - Industrial Communication",
        "Unit 3 - Industrial IoT Platforms",
        "Unit 4 - Smart Factory Concepts",
        "Unit 5 - Industry 4.0 Project Deployment",
      ],
      miniProject: "Smart Factory Monitoring System.",
      tools: ["Node-RED", "ThingsBoard", "InfluxDB", "Grafana"],
      output: "Industrial IoT Engineer",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Industry-Ready Engineering Programs
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
          Learn. Design. Build. Deploy. Innovate. Structured flagship programs
          designed to transform students into product engineers, IoT experts,
          AI specialists, and Industry 4.0 professionals.
        </p>
      </div>

      {/* Semester Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-5">
              <div>{course.icon}</div>

              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                {course.semester}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {course.title}
            </h2>

           

            {/* Modules */}
            <div>
              <h3 className="font-bold text-lg text-blue-900 mb-3">
                Modules
              </h3>

              <ul className="space-y-2 text-gray-700">
                {course.modules.map((module, i) => (
                  <li key={i}>✔ {module}</li>
                ))}
              </ul>
            </div>

            {/* Mini Project */}
            <div className="mt-6">
              <h3 className="font-bold text-lg text-green-700 mb-2">
                Mini Project
              </h3>

              <p className="text-gray-700">{course.miniProject}</p>
            </div>

            {/* Software Tools */}
            <div className="mt-6">
              <h3 className="font-bold text-lg text-orange-700 mb-3">
                Software Tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Industry Output */}
            <div className="mt-6 p-4 bg-gray-100 rounded-xl">
              <p className="font-semibold text-gray-800">
                Industry Output:
              </p>

              <p className="text-blue-700 font-bold">{course.output}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Final Outcome */}
      <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
          Final Outcome
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg">

          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-700" />
            Certification
          </div>

          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-green-700" />
            Internship Opportunities
          </div>

          <div className="flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-purple-700" />
            Placement Support
          </div>

          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-orange-700" />
            Market-Ready Product Prototype
          </div>

          <div className="flex items-center gap-3">
            <CircuitBoard className="w-6 h-6 text-red-700" />
            PCB Design Skills
          </div>

          <div className="flex items-center gap-3">
            <Bot className="w-6 h-6 text-indigo-700" />
            Embedded + AI + IoT Expertise
          </div>

          <div className="flex items-center gap-3">
            <Factory className="w-6 h-6 text-yellow-700" />
            Industry 4.0 Experience
          </div>

          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-pink-700" />
            Startup / Product Development Mindset
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-900 text-white rounded-2xl p-10 text-center shadow-xl">
        <Award className="w-14 h-14 mx-auto mb-5" />

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          From Learning to Launching the Future
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-8">
          Build 4 complete semester projects, gain hands-on industry exposure,
          develop market-ready prototypes, and become a next-generation engineer.
        </p>
      </div>

    </div>
  );
};

export default Courses;