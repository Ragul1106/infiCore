// import qrCode from "../assets/images/qr.jpg";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Contact InfiCore Technologies
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Have an idea, project, or collaboration in mind? Connect with us and
          let’s build innovative engineering solutions together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Contact Info */}
        <div className="space-y-8">

          {/* Contact Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold text-lg">Office Address</h3>
                <p>
                  InfiCore Technologies Pvt Ltd <br />
                  Coimbatore, Tamil Nadu <br />
                  India - 641001
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p>+91 97897 38080</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p>contact.inficoretechnologies@gmail.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p>Monday - Saturday : 9:00 AM - 6:00 PM</p>
              </div>

            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919789738080"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* QR Code */}
          {/* <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-5">
              Scan QR to Connect
            </h2>

            <img
              src={qrCode}
              alt="WhatsApp QR Code"
              className="w-52 mx-auto rounded-xl"
            />
          </div> */}
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-xl  rounded-2xl p-8">
          <h2 className="text-2xl font-bold  text-blue-900 mb-8">
            Send us a Message
          </h2>

          <form
            action="https://formspree.io/f/xvzjrrej"
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Google Map */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Our Location
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125324.16358328481!2d76.87777377455797!3d11.01008105118142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1782643209306!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-blue-900 text-white p-10 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">
          Let’s Build the Future Together
        </h2>

        <p className="mt-4 text-lg">
          Empowering innovation through Embedded Systems, IoT, AI, and Product
          Engineering.
        </p>
      </div>

    </div>
  );
};

export default Contact;