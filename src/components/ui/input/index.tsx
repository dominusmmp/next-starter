import { cn } from '@/lib/utils/cn';

export type InputProps = React.ComponentPropsWithRef<'input'>;

const Input = ({ ref, className, type, ...props }: InputProps) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn('', className)}
      {...props}
    />
  );
};
Input.displayName = 'Input';

export { Input as default };
