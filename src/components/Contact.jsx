import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosMailUnread } from 'react-icons/io';
import { FaInstagram, FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
    hover: { scale: 1.1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setStatus('All fields are required.');
            return;
        }

        try {
            await emailjs.send(
                'service_ohm6u5d',
                'template_4djg59n',
                { name, email, message },
                '2Ud2UJv0jgqx-6PjF'
            );
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('Failed to send message. Please try again later.');
        }
    };

    return (
        <section className="min-h-screen flex flex-col md:flex-row justify-center px-4 md:px-10" id="contact">
            <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight my-20">Get In Touch</h2>
                <div className="h-1 w-20 bg-white mb-8"></div>

                <motion.h3
                    className="text-6xl md:text-8xl leading-none"
                    initial="hidden"
                    whileInView="visible"
                    variants={inputVariants}
                >
                    Write something intriguing
                </motion.h3>

                <motion.p
                    className="text-lg md:text-2xl mt-6 max-w-3xl"
                    initial="hidden"
                    whileInView="visible"
                    variants={inputVariants}
                >
                    Your enthusiasm and approach towards joining the company
                </motion.p>

                {[{
                    href: 'mailto:arinthamke@gmail.com',
                    icon: <IoIosMailUnread className="text-xl md:text-2xl text-red-500" />,
                    label: 'G-Mail',
                }, {
                    href: 'https://www.instagram.com/_ft.arxn_',
                    icon: <FaInstagram className="text-xl md:text-2xl text-pink-500" />,
                    label: 'Instagram',
                }, {
                    href: 'https://github.com/Arin0005',
                    icon: <FaGithub className="text-xl md:text-2xl text-neutral-400" />,
                    label: 'GitHub',
                }, {
                    href: 'https://www.hackerrank.com/profile/arinthamke',
                    icon: <FaHackerrank className="text-xl md:text-2xl text-green-500" />,
                    label: 'HackerRank',
                }, {
                    href: 'https://www.linkedin.com/in/arin-thamke/',
                    icon: <FaLinkedin className="text-xl md:text-2xl text-blue-600" />,
                    label: 'LinkedIn',
                }].map((link, idx) => (
                    <motion.a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-2xl md:text-3xl font-medium"
                        initial="hidden"
                        whileInView="visible"
                        variants={inputVariants}
                    >
                        {link.icon}
                        {link.label}
                    </motion.a>
                ))}
            </div>

            <motion.div
                className="flex-1 w-full md:w-3/7 mt-5 md:mt-20 ml-0 md:ml-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                <h3 className="text-3xl font-semibold mb-4 mt-4">Contact Me</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={inputVariants} className="form-group">
                        <label htmlFor="name" className="block text-lg">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                            aria-label="Your Name"
                        />
                    </motion.div>

                    <motion.div variants={inputVariants} className="form-group">
                        <label htmlFor="email" className="block text-lg">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                            aria-label="Your Email"
                        />
                    </motion.div>

                    <motion.div variants={inputVariants} className="form-group">
                        <label htmlFor="message" className="block text-lg">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Message"
                            rows="4"
                            aria-label="Your Message"
                        />
                    </motion.div>

                    {status && <p className="text-red-500">{status}</p>}

                    <motion.button
                        type="submit"
                        variants={buttonVariants}
                        whileHover="hover"
                        className="w-full p-3 bg-transparent border-2 border-purple-500 text-white rounded-md  hover:text-purple-500 hover:border-purple-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
