
import { CheckCircle } from 'lucide-react';

interface ValueProps {
  items: { title: string; description: string }[];
}

export default function ValueProposition({ items }: ValueProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
