import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is the best time to visit Kailash Mansarovar?",
    answer: "The best time for Kailash Mansarovar Yatra is from May to September when the weather is relatively mild and the passes are accessible. June to August offers the warmest temperatures.",
  },
  {
    question: "Do I need any special permits for these yatras?",
    answer: "Yes, most Himalayan yatras require special permits. For Kailash Mansarovar, you need permits from both Indian and Chinese authorities. We handle all permit arrangements as part of our package.",
  },
  {
    question: "What is included in the tour packages?",
    answer: "Our packages typically include accommodation, meals (breakfast, lunch, dinner), transportation, guide services, permits, and travel insurance. Specific inclusions vary by package - please check individual package details.",
  },
  {
    question: "Is medical support available during the yatra?",
    answer: "Yes, we provide medical support on all our yatras. Our team includes trained medical personnel, and we carry emergency medical equipment and oxygen cylinders for high-altitude journeys.",
  },
  {
    question: "What is the fitness level required for these pilgrimages?",
    answer: "Fitness requirements vary by yatra. Treks like Adi Kailash require good physical fitness, while helicopter yatras are suitable for most pilgrims. We recommend a medical check-up before booking and can advise on preparation.",
  },
  {
    question: "Can senior citizens undertake these yatras?",
    answer: "Yes, senior citizens can undertake many of our yatras. We offer special packages with comfortable accommodations and slower-paced itineraries. Helicopter options are available for those who prefer to avoid long treks.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellation charges vary based on the timing of cancellation. Generally, cancellations made 60+ days before departure incur minimal charges. Please refer to our detailed terms and conditions or contact us for specific information.",
  },
  {
    question: "Are vegetarian food options available?",
    answer: "Absolutely! All our packages include pure vegetarian meals. We understand the spiritual nature of these pilgrimages and ensure that food aligns with your dietary preferences and religious practices.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
          <p 
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Find answers to common questions about our Himalayan pilgrimage tours
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-gray-200 rounded-lg px-6 hover:border-[var(--sky-blue)] transition-colors"
            >
              <AccordionTrigger 
                className="text-left hover:text-[var(--sky-blue)] transition-colors py-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="text-[var(--navy)]">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent 
                className="text-[var(--charcoal)] leading-relaxed pb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
