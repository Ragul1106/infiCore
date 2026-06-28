import {
  Cpu,
  CircuitBoard,
  Car,
  Bot,
  Award,
  Clock,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "PCB Design & Product Development Program",
      icon: <CircuitBoard className="w-12 h-12 text-blue-700" />,
      duration: "6 Months",
      modules: [
        "Schematic Design",
        "PCB Layout",
        "Manufacturing",
        "Product Lifecycle",
      ],
    },
    {
      title: "Embedded Systems & IoT Program",
      icon: <Cpu className="w-12 h-12 text-green-700" />,
      duration: "5 Months",
      modules: [
        "ATMEGA328",
        "ESP32",
        "Sensors",
        "Communication Protocols",
        "Cloud Integration",
      ],
    },
    {
      title: "EV Innovation Program",
      icon: <Car className="w-12 h-12 text-orange-700" />,
      duration: "4 Months",
      modules: [
        "Battery Systems",
        "Motor Controllers",
        "EV Architecture",
      ],
    },
    {
      title: "Edge AI Program",
      icon: <Bot className="w-12 h-12 text-purple-700" />,
      duration: "4 Months",
      modules: [
        "TinyML",
        "TensorFlow Lite",
        "Edge Devices",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Flagship Programs
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
          Industry-driven learning programs designed to build practical
          engineering skills, product-building knowledge, and startup readiness.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="mb-5">{course.icon}</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {course.title}
            </h2>

            <p className="flex items-center gap-2 text-gray-600 mb-5">
              <Clock className="w-5 h-5" />
              Duration: {course.duration}
            </p>

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
          </div>
        ))}
      </div>

      {/* Program Benefits */}
      <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
          What You Will Get
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
            Real-Time Product Development
          </div>

          <div className="flex items-center gap-3">
            <CircuitBoard className="w-6 h-6 text-red-700" />
            Hands-on Hardware Experience
          </div>

          <div className="flex items-center gap-3">
            <Bot className="w-6 h-6 text-indigo-700" />
            Industry-Oriented Technical Skills
          </div>

        </div>
      </div>

      {/* Certification CTA */}
      <div className="bg-blue-900 text-white rounded-2xl p-10 text-center shadow-xl">
        <Award className="w-14 h-14 mx-auto mb-5" />

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Certification • Internship • Placement
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-8">
          Every flagship program includes project certification, practical
          internship experience, and placement-oriented training to make you
          industry-ready.
        </p>
      </div>

    </div>
  );
};

export default Courses;