import React from 'react';

const ContactSection = () => {
    return (
        <section className="py-16  text-center px-4">
            <h2 className="text-3xl font-semibold mb-4 headline-color">Get in Touch</h2>
            <p className="max-w-3xl mx-auto mb-6">
                For bookings, collaborations, or culinary inquiries — reach out to CHEF DAWN today.
            </p>
            <form className="max-w-xl mx-auto space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                ></textarea>
                <button type="submit" className="primaryButton  px-6 py-2 rounded">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactSection;