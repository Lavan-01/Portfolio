import React from 'react';
import { Mail, MapPin, Phone, Copy, Check } from 'lucide-react';

export function Contact() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const contactInfo = [
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'lavanandhavarapu0607@gmail.com',
      href: 'mailto:lavanandhavarapu0607@gmail.com'
    },
    {
      id: 'phone',
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 6303513162',
      href: 'tel:+916303513162'
    },
    {
      id: 'location',
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Bangalore, India'
    }
  ];

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="grid gap-8 max-w-lg mx-auto">
          {contactInfo.map((info) => (
            <div 
              key={info.id}
              className="flex items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                {info.icon}
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold text-gray-900 dark:text-white">{info.label}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-gray-600 dark:text-gray-300">{info.value}</span>
                )}
              </div>
              {info.href && (
                <button
                  onClick={() => copyToClipboard(info.value, info.id)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label={`Copy ${info.label}`}
                >
                  {copiedField === info.id ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}