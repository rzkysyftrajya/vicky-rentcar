

declare module 'lucide-react' {
    import { type FC, type SVGProps } from 'react';

    export const ArrowLeft: FC<SVGProps<SVGSVGElement>>;
    export const ArrowRight: FC<SVGProps<SVGSVGElement>>;
    export const Briefcase: FC<SVGProps<SVGSVGElement>>;
    export const Car: FC<SVGProps<SVGSVGElement>>;
    export const CheckCircle: FC<SVGProps<SVGSVGElement>>;
    export const Clock: FC<SVGProps<SVGSVGElement>>;
    export const Droplets: FC<SVGProps<SVGSVGElement>>;
    export const Facebook: FC<SVGProps<SVGSVGElement>>;
    export const Film: FC<SVGProps<SVGSVGElement>>;
    export const Fuel: FC<SVGProps<SVGSVGElement>>;
    export const GalleryHorizontal: FC<SVGProps<SVGSVGElement>>;
    export const Globe: FC<SVGProps<SVGSVGElement>>;
    export const Heart: FC<SVGProps<SVGSVGElement>>;
    export const HelpCircle: FC<SVGProps<SVGSVGElement>>;
    export const Home: FC<SVGProps<SVGSVGElement>>;
    export const Info: FC<SVGProps<SVGSVGElement>>;
    export const Instagram: FC<SVGProps<SVGSVGElement>>;
    export const KeyRound: FC<SVGProps<SVGSVGElement>>;
    export const Leaf: FC<SVGProps<SVGSVGElement>>;
    export const Mail: FC<SVGProps<SVGSVGElement>>;
    export const MapPin: FC<SVGProps<SVGSVGElement>>;
    export const Menu: FC<SVGProps<SVGSVGElement>>;
    export const MessageCircle: FC<SVGProps<SVGSVGElement>>;
    export const Moon: FC<SVGProps<SVGSVGElement>>;
    export const Newspaper: FC<SVGProps<SVGSVGElement>>;
    export const Phone: FC<SVGProps<SVGSVGElement>>;
    export const Plane: FC<SVGProps<SVGSVGElement>>;
    export const Search: FC<SVGProps<SVGSVGElement>>;
    export const ShieldCheck: FC<SVGProps<SVGSVGElement>>;
    export const Star: FC<SVGProps<SVGSVGElement>>;
    export const Sun: FC<SVGProps<SVGSVGElement>>;
    export const Tag: FC<SVGProps<SVGSVGElement>>;
    export const Twitter: FC<SVGProps<SVGSVGElement>>;
    export const User: FC<SVGProps<SVGSVGElement>>;
    export const Users: FC<SVGProps<SVGSVGElement>>;
    
    // A more generic approach if specific icons cause issues
    const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> };
    export default icons;
}
