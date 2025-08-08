import React, { useState } from 'react';

function ContactUs() {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div style={{ maxWidth: '400px', margin: '40px auto', padding: '24px', border: '1px solid #ddd', borderRadius: '8px', background: '#fafafa' }}>
			<h2>Contact Us</h2>
			{submitted ? (
				<div style={{ color: 'green', marginBottom: '16px' }}>Thank you for contacting us!</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div style={{ marginBottom: '12px' }}>
						<label>Name:</label><br />
						<input type="text" name="name" value={form.name} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
					</div>
					<div style={{ marginBottom: '12px' }}>
						<label>Email:</label><br />
						<input type="email" name="email" value={form.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
					</div>
					<div style={{ marginBottom: '12px' }}>
						<label>Message:</label><br />
						<textarea name="message" value={form.message} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
					</div>
					<button type="submit" style={{ padding: '8px 16px' }}>Send</button>
				</form>
			)}
		</div>
	);
}

export default ContactUs;
