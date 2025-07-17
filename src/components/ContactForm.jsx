import React, { useRef, useState } from "react";
import ContactCard from "./ContactCard";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [_message, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const address = <>Plot No K240 & K241, Phase II,<br></br>SITE Super Highway, Karachi</>

  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !phone || !subject || !message) {
      setMsg("Please fill in all fields.");
      setSuccess(false);
      return;
    }

    if (!emailRegex.test(email)) {
      setMsg("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    emailjs
      .sendForm(
        "service_57hz0p1", // e.g., service_abc123
        "template_q6pmo3e", // e.g., template_xyz456
        form.current,
        "XPLhEu2byTgynGvRk" // e.g., FdfgHJjfhgh334
      )
      .then(
        (result) => {
          setMsg("Email sent successfully!");
          setSuccess(true);
          setFullName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          setMsg(error.text);
          setSuccess(true);
          // console.log("FAILED...", error.text);
          // alert("Email sending failed.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full p-4 md:p-12 gap-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <strong className="text-2xl md:text-4xl mb-2">
          Still have a question?
        </strong>
        <p className="text-sm md:text-base text-gray-500">
          We are available to respond to your messages.
          <br />
          Reach out to us anytime and we’ll happily answer your questions.
        </p>
        <div className="flex flex-col gap-6 mt-10">
          <ContactCard title="Email Us" content="info@edgeexpert.com.pk" />
          <ContactCard title="Hotline" content="+92 (213) 641 0300" />
          <ContactCard
            title="Office Address"
            // content={`6338, Presidential Court #204\nFt. Myers Florida 33919`}
            content={address}
          />
        </div>
      </div>

      {/* Right Side */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full md:w-1/2 flex flex-col gap-7"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name: John Doe"
          className="h-10 text-sm border border-gray-300 rounded-lg p-2 bg-gray-100 md:w-3/4 max-w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email: johndeo@example.com"
          className="h-10 text-sm border border-gray-300 rounded-lg p-2 bg-gray-100 md:w-3/4 max-w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone: +1234567890"
          className="h-10 text-sm border border-gray-300 rounded-lg p-2 bg-gray-100 md:w-3/4 max-w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          name="title"
          placeholder="Subject"
          className="h-10 text-sm border border-gray-300 rounded-lg p-2 bg-gray-100 md:w-3/4 max-w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Write your message/questions here ..."
          className="text-sm border border-gray-300 rounded-lg p-2 bg-gray-100 h-48 resize-none md:w-3/4 max-w-full  focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="h-10 bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 md:w-3/4 w-full max-w-full cursor-pointer "
          >
            Send
          </button>
          {_message && (
            <div
              className={`text-sm ${
                success ? "text-green-500" : "text-red-500"
              }`}
            >
              {_message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
