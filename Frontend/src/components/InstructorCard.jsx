import React from 'react';

// Sample instructor data with images
const instructors = [
  {
    name: "Emily Johnson",
    rating: 4.7,
    numberOfClassesTaught: 120,
    experience: "10 years",
    age: 32,
    currentTeaching: "Vinyasa Yoga",
    profilePicture: "https://sreeramkrishnayogasram.com/wp-content/uploads/2023/09/yoga-instructor-1.jpg",
    id: "instructor-1"
  },
  {
    name: "Michael Lee",
    rating: 4.5,
    numberOfClassesTaught: 95,
    experience: "8 years",
    age: 28,
    currentTeaching: "Ashtanga Yoga",
    profilePicture: "https://purefulyoga.com/wp-content/uploads/2022/10/what-name-do-i-call-a-yoga-instructor.jpg",
    id: "instructor-2"
  },
  {
    name: "Sophia Martinez",
    rating: 4.9,
    numberOfClassesTaught: 150,
    experience: "12 years",
    age: 35,
    currentTeaching: "Hatha Yoga",
    profilePicture: "https://www.momoyoga.com/assets/images/1637-4357616701524-dnRZsN/yin-yoga-article.jpg?height=420&width=920",
    id: "instructor-3"
  },
  {
    name: "David Patel",
    rating: 4.6,
    numberOfClassesTaught: 110,
    experience: "9 years",
    age: 30,
    currentTeaching: "Yin Yoga",
    profilePicture: "https://www.yogarenewteachertraining.com/wp-content/uploads/2021/04/iStock-1074944940.jpg",
    id: "instructor-4"
  },
  {
    name: "Laura Green",
    rating: 4.8,
    numberOfClassesTaught: 105,
    experience: "7 years",
    age: 29,
    currentTeaching: "Power Yoga",
    profilePicture: "https://yogajala.com/wp-content/uploads/Yoga-Instructor-Jobs_-8-Paths-To-Take-After-Your-Yoga-Teacher-Training-6.jpg",
    id: "instructor-5"
  },
  {
    name: "James Brown",
    rating: 4.4,
    numberOfClassesTaught: 80,
    experience: "6 years",
    age: 31,
    currentTeaching: "Restorative Yoga",
    profilePicture: "https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/maininternational/IndiaTv480c34_yograjCP.jpg",
    id: "instructor-6"
  }
];

// InstructorCard Component
const InstructorCard = ({ instructor }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img 
        src={instructor.profilePicture} 
        alt={instructor.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{instructor.name}</h2>
        <p className="text-gray-700">Classes Taught: {instructor.numberOfClassesTaught}</p>
        <p className="text-gray-700">Experience: {instructor.experience}</p>
        <p className="text-gray-700">Age: {instructor.age}</p>
        <p className="text-gray-700">Currently Teaching: {instructor.currentTeaching}</p>
        <p className="text-gray-700">Rating: {instructor.rating} / 5</p>
      </div>
    </div>
  );
};

// InstructorList Component
const InstructorList = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {instructors.map(instructor => (
        <InstructorCard key={instructor.id} instructor={instructor} />
      ))}
    </div>
  );
};

export default InstructorList;
