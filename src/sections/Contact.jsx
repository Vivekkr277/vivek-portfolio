import { motion } from "framer-motion";

import { Section, Container } from "@layout";
import { SectionHeading, Card, Button, Icon } from "@ui";

import contactInfo, { socialLinks } from "@data/contact";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          label="CONTACT"
          title="Let's Build Something Great"
          description="Whether you have a project, job opportunity, or just want to connect, I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="space-y-6 p-8">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-5 rounded-xl border border-white/5 p-4 transition hover:border-blue-500/40"
                >
                  <Icon icon={item.icon} variant="glass" />

                  <div>
                    <p className="text-sm text-zinc-500">{item.title}</p>

                    <h4 className="text-white">{item.value}</h4>
                  </div>
                </a>
              ))}

              <div className="flex gap-4 pt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={social.icon} variant="secondary" />
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 p-8"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                {...register("subject", {
                  required: "Subject is required",
                })}
              />
              {errors.text && (
                <p className="text-sm text-red-500">{errors.text.message}</p>
              )}

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                {...register("message", {
                  required: "Message is required",
                })}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
