import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_3aish2d",
        "template_pduuduo",
        e.target,
        "PA6ywWxNZCJrOZDhn"
      );
      setStatus("sent");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
      <input name="name" placeholder="*Your name" className="w-full p-3 rounded bg-white/5 border border-white/10" required />
      <input name="company" placeholder="Company name" className="w-full p-3 rounded bg-white/5 border border-white/10"/>
      <input type="email" name="reply_to" placeholder="*Your email" className="w-full p-3 rounded bg-white/5 border border-white/10" required />
      <textarea name="message" placeholder="*Message" className="w-full p-3 rounded bg-white/5 border border-white/10 h-28" required />
      <button type="submit" className="rounded-2xl px-5 py-3 bg-gradient-to-r from-[#AEB6C1] to-[#6B7684] text-slate-900 font-semibold shadow-lg">
        Send
      </button>

      {status === "sending" && <p className="text-sm text-slate-400 mt-2">Sending…</p>}
      {status === "sent" && <p className="text-sm text-emerald-400 mt-2">Sent! We will get back to you on that!.</p>}
      {status === "error" && <p className="text-sm text-rose-400 mt-2">Failed to send. Try again.</p>}
    </form>
  );
}
