import {
  Cpu,
  Wifi,
  CircuitBoard,
  Car,
  GraduationCap,
  Briefcase,
  Lightbulb,
  FlaskConical,
} from "lucide-react";

const Programs = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Academic Collaboration Programs
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto">
          Empowering colleges, students, and innovators through practical
          engineering training, faculty development, startup support, and
          product-based learning.
        </p>
      </div>

      {/* Faculty Development */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-8">
          Faculty Development Programs
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Cpu className="mx-auto w-12 h-12 text-blue-700 mb-4" />
            <h3 className="font-bold text-lg">Embedded Systems</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Wifi className="mx-auto w-12 h-12 text-green-700 mb-4" />
            <h3 className="font-bold text-lg">IoT Technology</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <CircuitBoard className="mx-auto w-12 h-12 text-purple-700 mb-4" />
            <h3 className="font-bold text-lg">PCB Design</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Car className="mx-auto w-12 h-12 text-orange-700 mb-4" />
            <h3 className="font-bold text-lg">EV Technology</h3>
          </div>

        </div>
      </div>

      {/* Student Skill Programs */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
          Student Skill Programs
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <GraduationCap className="mx-auto w-12 h-12 text-indigo-700 mb-4" />
            <h3 className="font-bold text-lg">Hands-on Workshops</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Briefcase className="mx-auto w-12 h-12 text-green-700 mb-4" />
            <h3 className="font-bold text-lg">Internship Programs</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Lightbulb className="mx-auto w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="font-bold text-lg">Industry Projects</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <CircuitBoard className="mx-auto w-12 h-12 text-red-700 mb-4" />
            <h3 className="font-bold text-lg">Product Development Training</h3>
          </div>

        </div>
      </div>

      {/* Innovation Support */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-8">
          Innovation Support
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Lightbulb className="mx-auto w-12 h-12 text-blue-700 mb-4" />
            <h3 className="font-bold text-lg">Startup Mentoring</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FlaskConical className="mx-auto w-12 h-12 text-purple-700 mb-4" />
            <h3 className="font-bold text-lg">Prototype Building</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Briefcase className="mx-auto w-12 h-12 text-green-700 mb-4" />
            <h3 className="font-bold text-lg">Technical Reviews</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <GraduationCap className="mx-auto w-12 h-12 text-orange-700 mb-4" />
            <h3 className="font-bold text-lg">Project Incubation</h3>
          </div>

        </div>
      </div>

      {/* Flagship Programs */}
      <div className="bg-blue-900 text-white rounded-2xl p-10 shadow-xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Flagship Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              PCB Design & Product Development
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Schematic Design</li>
              <li>✔ PCB Layout</li>
              <li>✔ Manufacturing Process</li>
              <li>✔ Product Lifecycle</li>
            </ul>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-green-700">
              Embedded Systems & IoT
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>✔ ATMEGA328 Programming</li>
              <li>✔ Sensors & Peripherals</li>
              <li>✔ Communication Protocols</li>
              <li>✔ Cloud Integration</li>
            </ul>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-700">
              EV Innovation & Entrepreneurship
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Electric Vehicles</li>
              <li>✔ Battery Systems</li>
              <li>✔ Motor Controllers</li>
              <li>✔ Product Innovation</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Programs;