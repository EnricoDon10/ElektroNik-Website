"use client";

import { useId, useState } from "react";
import { faqs } from "../data/site-content";

export default function FaqList() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const instanceId = useId().replaceAll(":", "");

  return (
    <div className="faq-list" role="list">
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;
        const questionId = `faq-question-${instanceId}-${index}`;
        const answerId = `faq-answer-${instanceId}-${index}`;

        return (
          <article
            aria-labelledby={questionId}
            className={isOpen ? "faq-item faq-open" : "faq-item"}
            key={faq.question}
            role="listitem"
          >
            <h3 style={{ margin: 0 }}>
              <button
                aria-controls={answerId}
                aria-expanded={isOpen}
                id={questionId}
                onClick={() => setOpenFaq((current) => current === index ? null : index)}
                type="button"
              >
                <span>{faq.question}</span>
                <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
              </button>
            </h3>
            <div
              aria-hidden={!isOpen}
              aria-labelledby={questionId}
              className="faq-answer"
              id={answerId}
              inert={!isOpen}
              role="region"
            >
              <p>{faq.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
