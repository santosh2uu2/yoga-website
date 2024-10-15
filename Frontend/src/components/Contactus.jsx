import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header
        className="relative h-72 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.google.com/imgres?q=contact%20us%20pics&imgurl=http%3A%2F%2Fxcoders.in%2Fwp-content%2Fuploads%2F2020%2F06%2Fcontact-us-banner.png&imgrefurl=https%3A%2F%2Fxcoders.in%2Fcontact-us%2F&docid=gNf03kQCmDCpOM&tbnid=4UTdUrfVijMA8M&vet=12ahUKEwiq_Yaxp_SHAxVczDgGHYRXEUUQM3oECEIQAA..i&w=2200&h=700&hcb=2&ved=2ahUKEwiq_Yaxp_SHAxVczDgGHYRXEUUQM3oECEIQAA')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-80 flex justify-center items-center">
          <h1 className="text-white text-5xl font-extrabold shadow-lg">Contact Us</h1>
        </div>
      </header>

      {/* Contact Content Section */}
      <section className="text-center py-12 bg-gradient-to-r from-indigo-100 to-blue-100">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Let's Start a Conversation</h2>
        <div className="flex justify-center items-center">
          <h3 className="text-2xl font-semibold text-gray-700">Ask how we can help you:</h3>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-12 bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Contact Number</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-6 border-t text-gray-800">Santhosh Kumar</td>
                  <td className="py-3 px-6 border-t text-gray-800">9963845715</td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-6 border-t text-gray-800">Tejaswi</td>
                  <td className="py-3 px-6 border-t text-gray-800">9515362451</td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-6 border-t text-gray-800">Nissi Joyce</td>
                  <td className="py-3 px-6 border-t text-gray-800">7842263827</td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-6 border-t text-gray-800">Veda Sahitha</td>
                  <td className="py-3 px-6 border-t text-gray-800">9573043592</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-6 text-center">
        <p className="text-sm text-gray-600">&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
