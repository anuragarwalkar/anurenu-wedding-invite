import { MessageCircle, ArrowRight } from 'lucide-react'

function WhatsAppButtons() {
  const contact = {
    name: 'AnuRenu',
    phone: '+91-8390211808',
    link: 'https://wa.me/918390211808',
  }

  return (
    <section className="relative py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-500 font-medium mb-3">
            Questions?
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal-700 mb-3">
            Get in Touch
          </h2>
          <div className="ornament-divider text-gold-400 mb-4">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
            </svg>
          </div>
          <p className="font-serif text-base sm:text-lg text-charcoal-400 italic">
            We'd love to hear from you
          </p>
        </div>

        <div className="max-w-xs mx-auto">
          <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-charcoal-700 hover:bg-charcoal-800 text-white rounded-sm p-6 sm:p-8 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gold-400/40 flex items-center justify-center group-hover:border-gold-400 transition-colors duration-300">
                <MessageCircle className="w-5 h-5 text-gold-400" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-200 mb-1">
                  Chat with
                </p>
                <p className="font-heading text-2xl text-white mb-1">
                  {contact.name}
                </p>
                <p className="text-sm text-charcoal-200">
                  {contact.phone}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-gold-400 font-medium mt-1 group-hover:gap-3 transition-all duration-300">
                <span>Open WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppButtons
