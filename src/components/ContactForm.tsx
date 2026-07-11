import { useState, type FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more (min 10 chars)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`);
    window.location.href = `mailto:manikandan.mit@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = (k: keyof typeof values) => ({
    value: values[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value })),
    "aria-invalid": Boolean(errors[k]),
  });

  const inputCls =
    "w-full bg-transparent border-0 border-b border-hairline focus:border-accent focus:outline-none py-3 text-lg placeholder:text-ink-dim transition-colors";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="text-eyebrow block mb-2">Your name</label>
          <input id="name" type="text" placeholder="Ada Lovelace" className={inputCls} maxLength={100} {...field("name")} />
          {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-eyebrow block mb-2">Email</label>
          <input id="email" type="email" placeholder="you@company.com" className={inputCls} maxLength={255} {...field("email")} />
          {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-eyebrow block mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell me about the role, product, or problem…"
          className={`${inputCls} resize-none`}
          maxLength={1000}
          {...(field("message") as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
        {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
        >
          Send message
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>
        {sent && (
          <span className="text-sm text-signal">
            ✓ Opening your email client…
          </span>
        )}
      </div>
    </form>
  );
}
