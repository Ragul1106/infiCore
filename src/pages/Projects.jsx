import {
  CircuitBoard,
  Cpu,
  Wifi,
  Car,
  GraduationCap,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PCB Design",
      description:
        "Professional schematic design, multilayer PCB layout, prototyping, and fabrication support.",
      icon: <CircuitBoard className="w-14 h-14 text-blue-700" />,
    },
    {
      title: "Prototype Development",
      description:
        "From concept to working hardware prototypes for industrial and startup product development.",
      icon: <Cpu className="w-14 h-14 text-green-700" />,
    },
    {
      title: "IoT Solutions",
      description:
        "Smart connected systems using ESP32, sensors, MQTT, cloud integration, and automation.",
      icon: <Wifi className="w-14 h-14 text-purple-700" />,
    },
    {
      title: "EV Projects",
      description:
        "Electric vehicle architecture, battery systems, motor controllers, and smart EV innovations.",
      icon: <Car className="w-14 h-14 text-orange-700" />,
    },
    {
      title: "Training & Workshops",
      description:
        "Industry-ready workshops, internship projects, and practical engineering training programs.",
      icon: <GraduationCap className="w-14 h-14 text-indigo-700" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Our Work in Action
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
          Explore our practical engineering work, product development projects,
          innovation-driven prototypes, and hands-on training activities shaping
          the future of engineering.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
          >
            <div className="mb-5">{project.icon}</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-600 leading-8">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Project Highlights */}
      <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Project Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg">

          <div>
            ✔ Smart IoT Monitoring Systems
          </div>

          <div>
            ✔ Industrial Automation Projects
          </div>

          <div>
            ✔ Embedded Product Prototyping
          </div>

          <div>
            ✔ EV Battery Management Systems
          </div>

          <div>
            ✔ AI Edge Device Development
          </div>

          <div>
            ✔ Product Validation & Testing
          </div>

        </div>
      </div>

      {/* Innovation Section */}
      <div className="bg-blue-900 text-white rounded-2xl p-10 text-center shadow-xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          Building Real Products. Creating Real Engineers.
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-8">
          At InfiCore Technologies, every project is designed to provide
          real-world product-building experience, practical innovation, and
          engineering excellence aligned with industry needs.
        </p>
      </div>

    </div>
  );
};

export default Projects;