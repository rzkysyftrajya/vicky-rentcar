
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FleetProps {
  city: string;
  items: {
    name: string;
    category: string;
    features: string[];
    image: string;
  }[];
}

export default function Fleet({ city, items }: FleetProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pilihan Armada Terbaik di {city}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="relative h-40 w-full mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <CardTitle>{item.name}</CardTitle>
                <Badge variant="secondary">{item.category}</Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href="https://wa.me/6281378641157" target="_blank" rel="noopener noreferrer">
                    Pesan Sekarang
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
