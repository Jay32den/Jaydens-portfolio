"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
  onSubmit={sendEmail} 
  ref={form}
  className="w-full lg:w-1/2 h-auto lg:h-full bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-6 lg:p-12"
>
  <span className="text-lg lg:text-xl">Dear Jayden Sisk,</span>
  <textarea
    className="bg-transparent border-b-2 border-b-black outline-none resize-none w-full"
    name="user_message"
    rows={6}
  />
  <span className="text-lg lg:text-xl">My Email is:</span>
  <input
    name="user_email"
    type="text"
    className="bg-transparent border-b-2 border-b-black outline-none w-full"
  />
  <span className="text-lg lg:text-xl">Regards</span>
  <button 
    type="submit"
    className="bg-purple-200 rounded font-semibold text-gray-600 p-4 w-full lg:w-auto mt-4"
  >
    Send
  </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;