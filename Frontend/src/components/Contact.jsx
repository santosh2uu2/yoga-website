import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team member details */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-700">Yoga Instructor</p>
                <p className="mt-2">John has over 10 years of experience in yoga and meditation. He specializes in Vinyasa and Hatha Yoga.</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-700">Wellness Coach</p>
                <p className="mt-2">Jane is a certified wellness coach with a passion for holistic health. She guides our guests in achieving balance and well-being.</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-700">Nutritionist</p>
                <p className="mt-2">Emily provides expert advice on nutrition and diet, helping our guests enjoy delicious and healthy meals during their retreat.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-green-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-semibold mb-4">Welcome to Our Yoga Retreat System</h2>
              <p className="text-gray-800 mb-6">
                Embark on a journey of self-discovery and inner peace with our carefully curated yoga retreats. At our retreats, we provide a serene environment where you can disconnect from the stresses of everyday life and reconnect with your mind, body, and spirit.
              </p>
              <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                <li><strong>Personalized Retreats:</strong> Tailored experiences to meet your individual needs, whether you're seeking relaxation, rejuvenation, or a deeper connection with yourself.</li>
                <li><strong>Expert Instructors:</strong> Our team of certified yoga instructors brings years of experience and a deep understanding of various yoga practices, ensuring that you receive the highest quality guidance.</li>
                <li><strong>Holistic Wellness:</strong> We offer more than just yoga. Our retreats include meditation sessions, wellness workshops, nutritious meals, and nature walks to promote overall well-being.</li>
                <li><strong>Beautiful Locations:</strong> Our retreats are hosted in serene and picturesque locations, chosen to enhance your experience and allow you to fully immerse yourself in nature.</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>Comprehensive Programs:</strong> We offer a variety of programs that cater to all levels, from beginners to advanced practitioners.</li>
                <li><strong>Community Atmosphere:</strong> Join a supportive and like-minded community where you can share experiences, make new friends, and grow together.</li>
                <li><strong>Sustainable Practices:</strong> We are committed to sustainability and ensuring that our retreats leave a minimal environmental footprint.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://photos.tpn.to/pg/si/mq/mt/653x490.jpg" className="w-full h-auto rounded-lg shadow-lg" alt="Yoga Retreat" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
