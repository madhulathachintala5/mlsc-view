import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const interestOptions = [
  "AI",
  "Cloud",
  "GitHub",
  "Azure",
  "Web Development",
  "Data",
  "Design",
  "Events",
  "Documentation",
  "Social Media",
];

type Errors = Partial<Record<"name" | "email" | "branch" | "year" | "interests", string>>;

export type JoinSubmission = {
  name: string;
  email: string;
  branch: string;
  year: string;
  interests: string[];
};

/** Swap this for a backend call later — the form UI stays unchanged. */
async function submitJoinRequest(data: JoinSubmission): Promise<void> {
  console.info("MLSC join request", data);
}

export function JoinSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const toggleInterest = (value: string) =>
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!branch.trim()) next.branch = "Please enter your branch.";
    if (!year) next.year = "Please select your year.";
    if (interests.length === 0) next.interests = "Select at least one area of interest.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);
    await submitJoinRequest({ name, email, branch, year, interests });
    setPending(false);
    setSubmitted(true);
  }

  return (
    <section className="section-y" id="join">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-navy text-navy-foreground shadow-lift">
            <div className="relative px-6 py-12 text-center sm:px-12">
              <div className="grid-backdrop absolute inset-0 opacity-30" aria-hidden="true" />
              <h2 className="relative text-3xl font-bold sm:text-4xl">
                Be Part of the Community
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl leading-relaxed text-navy-foreground/75">
                Learn new technologies, build projects, collaborate with peers, participate in
                technical activities, and grow as a technology leader with MLSC.
              </p>
            </div>

            <div className="bg-card p-6 text-card-foreground sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-auto max-w-md rounded-2xl border border-primary/25 bg-accent/60 p-8 text-center"
                  role="status"
                >
                  <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-xl font-semibold">Thanks, {name.split(" ")[0]}!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your interest in MLSC @ VIEW has been recorded. Our core team will reach out
                    with the next steps.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setBranch("");
                      setYear("");
                      setInterests([]);
                    }}
                  >
                    Submit another response
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" error={errors.name}>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                    />
                  </Field>

                  <Field id="email" label="Email" error={errors.email}>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                    />
                  </Field>

                  <Field id="branch" label="Branch" error={errors.branch}>
                    <Input
                      id="branch"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      placeholder="CSE, IT, ECE…"
                      aria-invalid={!!errors.branch}
                    />
                  </Field>

                  <Field id="year" label="Year" error={errors.year}>
                    <select
                      id="year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      aria-invalid={!!errors.year}
                      className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <option value="">Select year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <fieldset className="sm:col-span-2">
                    <legend className="text-sm font-medium">Areas of Interest</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {interestOptions.map((option) => {
                        const active = interests.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggleInterest(option)}
                            className={cn(
                              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                              active
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-background hover:bg-secondary",
                            )}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {errors.interests && (
                      <p className="mt-2 text-sm text-destructive">{errors.interests}</p>
                    )}
                  </fieldset>

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={pending}
                      className="w-full rounded-full sm:w-auto sm:px-10"
                    >
                      {pending ? "Submitting…" : "Join MLSC"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
