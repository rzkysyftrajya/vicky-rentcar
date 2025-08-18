declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';

    export const Car: FC<SVGProps<SVGSVGElement>>;
    export const Calendar: FC<SVGProps<SVGSVGElement>>;
    export const Heart: FC<SVGProps<SVGSVGElement>>;
    export const Plane: FC<SVGProps<SVGSVGElement>>;
    export const Phone: FC<SVGProps<SVGSVGElement>>;
    export const Mail: FC<SVGProps<SVGSVGElement>>;
    export const MapPin: FC<SVGProps<SVGSVGElement>>;
    export const Menu: FC<SVGProps<SVGSVGElement>>;
    export const Facebook: FC<SVGProps<SVGSVGElement>>;
    export const Twitter: FC<SVGProps<SVGSVGElement>>;
    export const Instagram: FC<SVGProps<SVGSVGElement>>;
    export const CheckCircle: FC<SVGProps<SVGSVGElement>>;
    export const Briefcase: FC<SVGProps<SVGSVGElement>>;
    export const Film: FC<SVGProps<SVGSVGElement>>;
    export const ShieldCheck: FC<SVGProps<SVGSVGElement>>;
    export const Leaf: FC<SVGProps<SVGSVGElement>>;
    export const Zap: FC<SVGProps<SVGSVGElement>>;
    export const Droplets: FC<SVGProps<SVGSVGElement>>;
    
    // A more generic approach if specific icons cause issues
    const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> };
    export default icons;
}
