import {
  GraduationCap,
  CircuitBoard,
  Rocket,
  Lightbulb,
} from "lucide-react";

const Roadmap = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Growth Roadmap
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
          Our roadmap is designed to transform students into industry-ready
          engineers and future entrepreneurs through a structured journey of
          skill development, product building, and startup incubation.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-900 ml-6 md:ml-20 space-y-16">

        {/* Year 1 */}
        <div className="relative pl-10">
          <div className="absolute -left-6 top-2 bg-blue-900 text-white p-3 rounded-full shadow-lg">
            <GraduationCap className="w-6 h-6" />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Year 1 – Skill Development
            </h2>

            <ul className="space-y-3 text-gray-700 leading-8">
              <li>✔ Foundation in Embedded Systems</li>
              <li>✔ PCB Design Basics</li>
              <li>✔ IoT Fundamentals</li>
              <li>✔ Practical Workshops</li>
              <li>✔ Technical Skill Building</li>
            </ul>
          </div>
        </div>

        {/* Year 2 */}
        <div className="relative pl-10">
          <div className="absolute -left-6 top-2 bg-green-700 text-white p-3 rounded-full shadow-lg">
            <CircuitBoard className="w-6 h-6" />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Year 2 – Product Development
            </h2>

            <ul className="space-y-3 text-gray-700 leading-8">
              <li>✔ Real-world Project Development</li>
              <li>✔ Prototype Building</li>
              <li>✔ Industrial Training</li>
              <li>✔ Product Testing & Validation</li>
              <li>✔ Innovation Projects</li>
            </ul>
          </div>
        </div>

        {/* Year 3 */}
        <div className="relative pl-10">
          <div className="absolute -left-6 top-2 bg-orange-700 text-white p-3 rounded-full shadow-lg">
            <Rocket className="w-6 h-6" />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">
              Year 3 – Startup Incubation
            </h2>

            <ul className="space-y-3 text-gray-700 leading-8">
              <li>✔ Startup Mentoring</li>
              <li>✔ Product Commercialization</li>
              <li>✔ Entrepreneurship Training</li>
              <li>✔ Business Model Development</li>
              <li>✔ Market Launch Support</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Final Vision */}
      <div className="mt-20 bg-blue-900 text-white rounded-2xl p-10 text-center shadow-xl">
        <Lightbulb className="w-16 h-16 mx-auto mb-5" />

        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          The Final Destination
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-8">
          Our ultimate goal is to create future-ready engineers, innovators,
          and entrepreneurs capable of building impactful technologies for the
          world.
        </p>
      </div>

    </div>
  );
};

export default Roadmap;