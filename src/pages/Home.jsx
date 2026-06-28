import founder from "../assets/images/founder.jpeg";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Wifi,
  CircuitBoard,
  Car,
  Lightbulb,
  GraduationCap,
  Award,
  Briefcase,
  Rocket,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#1e3a8a] text-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 py-16">

        {/* Left */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Engineering Infinite Possibilities
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-8 max-w-xl">
            Innovating through Embedded Systems, IoT, PCB Design, EV
            Technologies, Product Development, and Industry-focused Engineering Training.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/courses")}
              className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Explore Courses
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={founder}
            alt="Founder"
            className="w-[300px] md:w-[420px] rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-white px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src={founder}
              alt="Founder"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Meet Our Founder
            </h2>

            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Askar Ali N
            </h3>

            <p className="text-lg text-gray-600 mb-4">
              Founder & CEO
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              With a vision to bridge academic knowledge and industrial needs,
              InfiCore Technologies was founded to create practical engineers,
              innovators, and future entrepreneurs through real-world product development.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-16 py-16 bg-gray-100">
        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-blue-900">100+</h2>
            <p className="mt-2 text-gray-600">Students Trained</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-green-700">25+</h2>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-orange-700">10+</h2>
            <p className="mt-2 text-gray-600">College Collaborations</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-purple-700">5+</h2>
            <p className="mt-2 text-gray-600">Product Innovations</p>
          </div>

        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-14">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Cpu className="mx-auto w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold">Embedded Systems</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Wifi className="mx-auto w-12 h-12 text-green-700 mb-4" />
            <h3 className="text-xl font-bold">IoT Solutions</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <CircuitBoard className="mx-auto w-12 h-12 text-purple-700 mb-4" />
            <h3 className="text-xl font-bold">PCB Design</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Car className="mx-auto w-12 h-12 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold">EV Innovation</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Lightbulb className="mx-auto w-12 h-12 text-red-700 mb-4" />
            <h3 className="text-xl font-bold">Product Development</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <GraduationCap className="mx-auto w-12 h-12 text-indigo-700 mb-4" />
            <h3 className="text-xl font-bold">Industry Training</h3>
          </div>

        </div>
      </section>

      {/* FLAGSHIP PROGRAMS PREVIEW */}
      <section className="bg-white px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-14">
          Flagship Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <CircuitBoard className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold">PCB Design & Product Development</h3>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <Cpu className="w-12 h-12 text-green-700 mb-4" />
            <h3 className="text-xl font-bold">Embedded Systems & IoT</h3>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <Car className="w-12 h-12 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold">EV Innovation & Entrepreneurship</h3>
          </div>

        </div>
      </section>

      {/* WHY INFiCORE */}
      <section className="px-6 md:px-16 py-16 bg-gray-100">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-14">
          Why InfiCore?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <Award className="mx-auto w-12 h-12 text-blue-700 mb-4" />
            <h3 className="font-bold text-xl mb-4">Industry-Oriented Training</h3>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <Briefcase className="mx-auto w-12 h-12 text-green-700 mb-4" />
            <h3 className="font-bold text-xl mb-4">Product-Based Learning</h3>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <Rocket className="mx-auto w-12 h-12 text-orange-700 mb-4" />
            <h3 className="font-bold text-xl mb-4">Startup Mindset</h3>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white text-center px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Building Real Engineers. Creating Real Innovations.
        </h2>

        <p className="mt-5 text-lg max-w-3xl mx-auto leading-8">
          Join InfiCore Technologies and start your journey towards practical
          engineering, product innovation, and entrepreneurship.
        </p>
      </section>

    </div>
  );
};

export default Home;