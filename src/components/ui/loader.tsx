import { cn } from '@/lib/utils/cn';
import { LuLoader as LoaderIcon } from 'react-icons/lu';

export function Loader(props?: React.SVGProps<SVGSVGElement>) {
  return (
    <LoaderIcon
      {...props}
      className={cn('text-muted-foreground size-5 animate-spin', props?.className)}
    />
  );
}

export function LoaderComponent(props?: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        'flex size-full flex-1 items-center justify-center self-stretch justify-self-stretch',
        props?.className
      )}
    >
      <Loader />
    </div>
  );
}
