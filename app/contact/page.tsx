import { Background } from "@/components/Background";
import NewsletterSignup from "@/components/newsletter";
import React from "react";


export default function Contact() {
  const foodVlogs = (e: Event) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <Background>
      <div className="mt-8 mb-12">
        <main className="container mx-auto px-6 md:px-12 pt-20">
          <div className="min-h-screen flex flex-col items-center justify-center py-20">
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl font-bold tracking-tighter text-[#343a40] transition-transform duration-500 ease-in-out hover:scale-105">
                My Contact info
              </h1>
              <p className="max-w-[800px] text-[#495057] md:text-2xl transition-opacity duration-500 ease-in-out hover:opacity-90">
                Enter Your Details So i can Contact Your Directly
              </p>
            </div>
            <div className="w-full lg:w-2/3 max-w-xl mt-12">
              <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-lg font-medium text-[#343a40] mb-2"
                  >
                    Enter Your Phone Number
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] transition duration-300"
                    placeholder="Paste your LinkedIn profile link here"
                  />
                </div>
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-lg font-medium text-[#343a40] mb-2"
                  >
                    Enter Your Email
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] transition duration-300"
                    placeholder="Paste your LinkedIn profile link here"
                  />
                </div>
                <div>
                  <div>
                    <div>
                      <label
                        htmlFor="linkedin"
                        className="block text-lg font-medium text-[#343a40] mb-2"
                      >
                        Enter Your Email
                      </label>
                      <textarea
                        id="linkedin"
                        className="w-full p-3 h-56 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff] transition duration-300 resize-none"
                        placeholder="Paste your LinkedIn profile link here"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="inline-flex h-12 items-center justify-center rounded-md bg-blue-500 px-6 text-lg font-medium text-white shadow-lg transition-colors duration-300 ease-in-out hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b] focus-visible:ring-opacity-50"
                  >
                    <a href="/resume.pdf" download='resume.pdf'>Submit</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <NewsletterSignup />
    </Background>
  )
}