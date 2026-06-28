import {
  GraduationCap,
  Briefcase,
  Lightbulb,
  Building2,
  Handshake,
  FlaskConical,
  Award,
  Users,
} from "lucide-react";

const Colleges = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Benefits to Colleges
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
          InfiCore Technologies collaborates with academic institutions to
          empower students with practical engineering skills, industry exposure,
          innovation support, and placement-oriented development.
        </p>
      </div>

      {/* For Students */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-8">
          For Students
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <GraduationCap className="mx-auto w-14 h-14 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Practical Learning
            </h3>
            <p className="text-gray-600">
              Hands-on practical training with real-world engineering projects.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Briefcase className="mx-auto w-14 h-14 text-green-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Industry Exposure
            </h3>
            <p className="text-gray-600">
              Gain direct exposure to industrial tools, workflows, and product development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Award className="mx-auto w-14 h-14 text-purple-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Employability & Skillset
            </h3>
            <p className="text-gray-600">
              Build technical and practical skills aligned with industry needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Users className="mx-auto w-14 h-14 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Internship Opportunities
            </h3>
            <p className="text-gray-600">
              Internship and live project opportunities for career growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Lightbulb className="mx-auto w-14 h-14 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Product Development
            </h3>
            <p className="text-gray-600">
              Experience complete product development lifecycle and innovation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <FlaskConical className="mx-auto w-14 h-14 text-red-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Startup Exposure
            </h3>
            <p className="text-gray-600">
              Learn entrepreneurship and startup-building through incubation support.
            </p>
          </div>

        </div>
      </div>

      {/* For Institutions */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
          For Institutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Building2 className="mx-auto w-14 h-14 text-indigo-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Improved Placement Readiness
            </h3>
            <p className="text-gray-600">
              Strengthen placement outcomes through industry-focused practical training.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Handshake className="mx-auto w-14 h-14 text-green-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Industry Collaboration & MoUs
            </h3>
            <p className="text-gray-600">
              Establish strategic partnerships and industrial collaborations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <FlaskConical className="mx-auto w-14 h-14 text-purple-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Innovation & Research Culture
            </h3>
            <p className="text-gray-600">
              Promote product innovation, research projects, and startup ecosystem.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <GraduationCap className="mx-auto w-14 h-14 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              NEP-Aligned Practical Learning
            </h3>
            <p className="text-gray-600">
              Support modern practical learning frameworks aligned with NEP standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Award className="mx-auto w-14 h-14 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Institutional Reputation
            </h3>
            <p className="text-gray-600">
              Enhance institutional reputation through innovation-driven learning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Users className="mx-auto w-14 h-14 text-red-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Access to Industry Expertise
            </h3>
            <p className="text-gray-600">
              Connect students and faculty with industry experts and mentors.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white rounded-2xl p-10 text-center shadow-xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          Partner with InfiCore Technologies
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-8">
          Together, we can transform engineering education through innovation,
          practical learning, product development, and industry collaboration.
        </p>
      </div>

    </div>
  );
};

export default Colleges;