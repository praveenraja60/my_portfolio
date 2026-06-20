import { type ChangeEvent, type FormEvent, useState } from "react";
import {
  Download,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "praveenraja60@gmail.com",
    href: "mailto:praveenraja60@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 95665 02092",
    href: "tel:+919566502092",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "praveen-rajkumar",
    href: "https://www.linkedin.com/in/praveen-rajkumar-59163416b/",
    icon: Linkedin,
  },
  {
    label: "Location",
    value: "India",
    href: "#contact",
    icon: MapPin,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const updateField =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formData.subject || "Portfolio inquiry";
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:praveenraja60@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email app with the message ready to send.");
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Let us build something sharp.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Reach out for frontend roles, React Native work, dashboard builds,
              product UI improvements, or AI-assisted prototypes.
            </p>

            <div className="mt-8 grid gap-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isLocation = method.label === "Location";

                const content = (
                  <>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase text-slate-500 dark:text-slate-400">
                        {method.label}
                      </p>
                      <p className="mt-1 truncate text-sm font-bold text-slate-900 dark:text-white">
                        {method.value}
                      </p>
                    </div>
                  </>
                );

                return isLocation ? (
                  <div
                    key={method.label}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    {content}
                  </div>
                ) : (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === "LinkedIn" ? "_blank" : undefined}
                    rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-300 dark:hover:bg-white/10"
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <a
              href="/Assets/Praveen Resume.pdf"
              download="Praveen_Rajkumar_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-200"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-200">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  Send a Message
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Your email app will open with the draft.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Name
                <input
                  type="text"
                  value={formData.name}
                  onChange={updateField("name")}
                  required
                  className="h-12 rounded-lg border border-slate-300 bg-white px-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Email
                <input
                  type="email"
                  value={formData.email}
                  onChange={updateField("email")}
                  required
                  className="h-12 rounded-lg border border-slate-300 bg-white px-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              Subject
              <input
                type="text"
                value={formData.subject}
                onChange={updateField("subject")}
                className="h-12 rounded-lg border border-slate-300 bg-white px-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                placeholder="Frontend opportunity"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              Message
              <textarea
                value={formData.message}
                onChange={updateField("message")}
                required
                rows={6}
                className="resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                placeholder="Tell me about the role, project, or product..."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-sm font-semibold text-teal-700 dark:text-teal-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
