import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiTwotoneAudio } from "react-icons/ai";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-5/12 bg-white rounded-lg p-8 flex flex-col mb-8 shadow-md">
            <div className="flex items-center justify-between mb-4 pb-2">
              <p className="text-gray-600 text-sm">MNG</p>
              <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                <FaArrowRight />
              </button>
            </div>
            <textarea
              id="editor"
              rows="8"
              className="block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Write an article..."
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 py-2  h-8 text-xs w-20">
              Translate
            </button>
            <button className="bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 py-2  h-8 text-xs w-auto">
              <AiTwotoneAudio />
            </button>
          </div>
          <div className="w-full lg:w-5/12 bg-white rounded-lg p-8 flex flex-col mb-8 shadow-md">
            <div className="flex items-center justify-between mb-4 pb-2">
              <button className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                <FaArrowLeft />
              </button>
              <p className="text-gray-600 text-sm text-center">CHN</p>
            </div>
            <textarea
              id="editor"
              rows="8"
              className="block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
