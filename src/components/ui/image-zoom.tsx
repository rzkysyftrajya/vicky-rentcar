
"use client";

import Image, { type ImageProps } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageZoomProps extends ImageProps {
  isZoomable?: boolean;
}

export function ImageZoom({ isZoomable = true, alt, className, ...props }: ImageZoomProps) {
  const { width, height, fill, ...rest } = props;

  if (!isZoomable) {
    if (fill) {
        return <Image alt={alt} className={className} {...props} />;
    }
    return <Image alt={alt} className={className} width={width} height={height} {...props} />;
  }

  const triggerImageProps = fill ? { fill: true } : { width, height };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("cursor-zoom-in relative", className, {
            "w-full h-full": fill
        })}>
          <Image alt={alt} {...rest} {...triggerImageProps} />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 border-0 bg-transparent w-auto max-w-[90vw] h-auto max-h-[90vh]">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative w-[80vw] h-[80vh]">
            <Image
                alt={alt}
                {...rest}
                fill
                className="object-contain w-full h-full rounded-lg"
            />
        </div>
      </DialogContent>
    </Dialog>
  );
}
