import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

interface Props {
  faqs: Faq[];
}

export default function Accordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 focus:outline-none rounded-lg">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden focus:outline-none"
          >
            {/* Trigger */}
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-lg font-semibold py-5 px-6 focus:outline-none hover:text-red-500 transition-colors"
            >
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-red-500" : ""
                }`}
              />
            </button>

            {/* Content */}
            <div
              className={`text-gray-600 text-base px-6 overflow-hidden transition-[max-height] duration-300 ${
                isOpen ? "max-h-96 py-5" : "max-h-0"
              }`}
            >
              {isOpen && <p className="leading-relaxed">{faq.answer}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
