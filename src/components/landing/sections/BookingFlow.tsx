
import { Car, MessageCircle, Send } from 'lucide-react';

interface BookingFlowProps {
  steps: { title: string; description: string }[];
}

const icons = [
  <Car key="1" className="w-12 h-12 text-blue-600" />,
  <MessageCircle key="2" className="w-12 h-12 text-blue-600" />,
  <Send key="3" className="w-12 h-12 text-blue-600" />,
];

export default function BookingFlow({ steps }: BookingFlowProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Pesan Mobil Hanya 3 Langkah Mudah</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Dashed line connector for larger screens */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-300 transform -translate-y-1/2">
             <div className="absolute top-1/2 left-1/4 w-1/2 border-t-2 border-dashed border-gray-400"></div>
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10 bg-white px-4">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
