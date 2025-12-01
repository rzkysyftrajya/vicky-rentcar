
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PromoProps {
  title: string;
  features: string[];
}

export default function Promo({ title, features }: PromoProps) {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="flex justify-center items-center gap-6 my-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-lg">
              <Check className="w-6 h-6" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
          <a href="https://wa.me/6281378641157" target="_blank" rel="noopener noreferrer">
            Klaim Promo Sekarang
          </a>
        </Button>
      </div>
    </section>
  );
}
