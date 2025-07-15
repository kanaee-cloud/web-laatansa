import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Globe
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      value: '+62 812-3456-7890',
      description: 'Hubungi kami kapan saja',
      action: 'tel:+6281234567890'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+62 812-3456-7890',
      description: 'Chat langsung dengan kami',
      action: 'https://wa.me/6281234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@company.com',
      description: 'Kirim pesan via email',
      action: 'mailto:info@company.com'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jl. Ciganitri Utara, Sunny Town Regency, Kab. Bandung',
      description: 'Kunjungi kantor kami',
      action: 'https://maps.google.com'
    }
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/company',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-200',
      
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/laatansapesta',
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-200',
    
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/company',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-200',
      
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/company',
      color: 'hover:text-red-600',
      bgColor: 'hover:bg-red-200',
     
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        

        {/* Contact Information */}
        <div className="mb-16">
          <div className="bg-primary rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Informasi Kontak
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <a 
                          href={item.action}
                          className="text-accent opacity-70 font-medium transition-colors block mb-2"
                        >
                          {item.value}
                        </a>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <div className="bg-primary rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ikuti Kami di Media Sosial
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-6 rounded-xl border-2 border-accent hover:border-gray-300 transition-all duration-300 ${social.bgColor} ${social.color} hover:shadow-md`}
                  >
                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-7 h-7  ${social.color} transition-colors`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors mb-1">
                      {social.name}
                    </span>
                    
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;