import {
  Cpu,
  Wifi,
  CircuitBoard,
  Bot,
  Car,
  Factory,
  GraduationCap,
  Laptop,
  Lightbulb,
  Briefcase,
  Wrench,
  Rocket,
} from "lucide-react";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Our Services
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
          InfiCore Technologies delivers complete engineering solutions from
          idea validation to product commercialization, along with practical
          industry-focused training and startup support.
        </p>
      </div>

      {/* Engineering Solutions */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-8">
          Engineering Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <CircuitBoard className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">PCB Design</h3>
            <p className="text-gray-600">
              High-quality multilayer PCB design, schematic creation, and layout optimization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Cpu className="w-12 h-12 text-green-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Embedded Systems</h3>
            <p className="text-gray-600">
              Firmware, hardware integration, and custom embedded product development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Wifi className="w-12 h-12 text-purple-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">IoT Solutions</h3>
            <p className="text-gray-600">
              Smart connected products with sensors, MQTT, cloud, and automation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Bot className="w-12 h-12 text-red-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI Edge Computing</h3>
            <p className="text-gray-600">
              AI-powered embedded systems for intelligent decision-making.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Car className="w-12 h-12 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">EV Innovation</h3>
            <p className="text-gray-600">
              Battery management, motor control systems, and EV architecture.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Factory className="w-12 h-12 text-indigo-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Industrial Automation</h3>
            <p className="text-gray-600">
              Smart factory systems, automation control, and Industry 4.0 integration.
            </p>
          </div>

        </div>
      </div>

      {/* Technical Consulting */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-8">
          Technical Consulting
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Lightbulb className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Product Consulting</h3>
            <p className="text-gray-600">
              End-to-end consulting for product planning, development strategy, and execution.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Briefcase className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Architecture Guidance</h3>
            <p className="text-gray-600">
              Hardware and software architecture design for scalable products.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Rocket className="w-12 h-12 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Startup Support</h3>
            <p className="text-gray-600">
              Mentorship, technical support, and product validation for startups.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Wrench className="w-12 h-12 text-purple-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Manufacturing Support</h3>
            <p className="text-gray-600">
              Production support, vendor coordination, and scalable manufacturing guidance.
            </p>
          </div>

        </div>
      </div>

      {/* Product Development Lifecycle */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
          Product Development Lifecycle
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <CircuitBoard className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">PCB Fabrication</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Factory className="w-12 h-12 text-green-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Assembly</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Wrench className="w-12 h-12 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Testing</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Cpu className="w-12 h-12 text-purple-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Prototype Development</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg md:col-span-2">
            <Rocket className="w-12 h-12 text-red-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Product Commercialization</h3>
            <p className="text-gray-600">
              Complete support for product launch, scaling, and market readiness.
            </p>
          </div>

        </div>
      </div>

      {/* Training Programs */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-8">
          Training & Skill Development
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Industry Ready Programs</h3>
            <p className="text-gray-600">
              Practical engineering training aligned with industry requirements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Laptop className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Internship Training</h3>
            <p className="text-gray-600">
              Live project-based internship training with real product exposure.
            </p>
          </div>

        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Technologies We Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "Arduino",
            "ESP32",
            "Raspberry Pi",
            "STM32",
            "Python",
            "NodeMCU",
            "MQTT",
            "TensorFlow Lite",
          ].map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              {tech}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;