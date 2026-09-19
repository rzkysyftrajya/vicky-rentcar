
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface CityHighlightsProps {
  title: string;
  points: {
    title: string;
    description: string;
    image?: string;
  }[];
}

export default function CityHighlights({ title, points }: CityHighlightsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <Card key={index} className="overflow-hidden">
              {point.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={point.image}
                    alt={point.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
