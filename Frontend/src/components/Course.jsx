import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2a1 1 0 01.894.553l2.121 4.293 4.738.69a1 1 0 01.555 1.705l-3.422 3.343.808 4.698a1 1 0 01-1.454 1.054L12 14.254l-4.21 2.211a1 1 0 01-1.454-1.054l.808-4.698-3.422-3.343a1 1 0 01.555-1.705l4.738-.69L11.106 2.553A1 1 0 0112 2z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">WELCOME TO COURSES</p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {book.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex mt-2">
                {renderStars(item.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
