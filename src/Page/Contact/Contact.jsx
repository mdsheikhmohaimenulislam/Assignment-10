// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ email: "", message: "" });
//   const [allMessages, setAllMessages] = useState([]);

//   // Fetch all messages
//   useEffect(() => {
//     fetch("https://mango-server-seven.vercel.app/messages") // replace with your server
//       .then((res) => res.json())
//       .then((data) => setAllMessages(data))
//       .catch((err) => console.error("Error fetching messages", err));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send to server
//     fetch("https://mango-server-seven.vercel.app/messages", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         toast.success("Message sent successfully!");
//         setFormData({ email: "", message: "" });
//       })
//       .catch((err) => {
//         console.error("Submit error", err);
//         toast.error("Failed to send message.");
//       });
//   };

//   return (
//     <section className="bg-green-50 min-h-screen p-6 md:p-12">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-green-800">Contact Us</h2>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-lg shadow p-6 mb-10"
//         >
//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Email</label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//               placeholder="your@email.com"
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               placeholder="Type your message..."
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
//           >
//             Send Message
//           </button>
//         </form>

//         <div>
//           <h3 className="text-xl font-bold text-green-700 mb-3">All Messages</h3>
//           <ul className="space-y-3">
//             {allMessages.map((msg, index) => (
//               <li key={index} className="bg-white p-4 rounded shadow">
//                 <p className="text-sm text-gray-800">
//                   <strong>Email:</strong> {msg.email}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
