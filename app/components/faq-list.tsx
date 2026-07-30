"use client";

import { useState } from "react";
import { faqs } from "../data/site-content";

export default function FaqList() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <article
          className={openFaq === index ? "faq-item faq-open" : "faq-item"}
          key={faq.question}
        >
          <button
            aria-controls={`faq-answer-${index}`}
            aria-expanded={openFaq === index}
            id={`faq-question-${index}`}
            onClick={() => setOpenFaq((current) => current === index ? null : index)}
            type="button"
          >
            <span>{faq.question}</span>
            <i aria-hidden="true">{openFaq === index ? "−" : "+"}</i>
          </button>
          <div
            aria-hidden={openFaq !== index}
            aria-labelledby={`faq-question-${index}`}
            className="faq-answer"
            id={`faq-answer-${index}`}
            role="region"
          >
            <p>{faq.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
