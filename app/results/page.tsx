"use client";

import { useEffect, useState } from "react";

type Lead = {
  name: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  createdAt: string;
};

export default function Results() {
  const [lead, setLead] = useState<Lead | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("leadQualification");

    if (saved) {
      setLead(JSON.parse(saved));
    }
  }, []);

  if (!lead) {
    return (
      <main style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
        <h1>Qualification Results</h1>
        <p>No completed qualification interview found.</p>
        <a href="/chat">Start a qualification chat ?</a>
      </main>
    );
  }

  const budgetNumber = Number(
    lead.budget.replace(/[^0-9.]/g, "")
  );

  const strongBudget = budgetNumber >= 1000;

  const urgentTimeline =
    /today|this week|next week|this month|next month|soon/i.test(
      lead.timeline
    );

  const qualified = strongBudget && urgentTimeline;

  return (
    <main style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>Qualification Results</h1>

      <section
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "20px",
        }}
      >
        <h2>{qualified ? "Qualified Lead" : "Needs Review"}</h2>

        <p>
          <strong>Name:</strong> {lead.name}
        </p>

        <p>
          <strong>Company:</strong> {lead.company}
        </p>

        <p>
          <strong>Service:</strong> {lead.service}
        </p>

        <p>
          <strong>Budget:</strong> {lead.budget}
        </p>

        <p>
          <strong>Timeline:</strong> {lead.timeline}
        </p>

        <hr />

        <p>
          <strong>Qualification:</strong>{" "}
          {qualified ? "High potential" : "Requires follow-up"}
        </p>

        <p>
          <strong>Reason:</strong>{" "}
          {qualified
            ? "The lead has a suitable budget and an active timeline."
            : "The lead may need additional review based on budget or timeline."}
        </p>
      </section>

      <p style={{ marginTop: "20px" }}>
        <a href="/chat">Start another qualification ?</a>
      </p>
    </main>
  );
}
