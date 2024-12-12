import { cn } from '@/lib/utils/cn';

export type ButtonProps = React.ComponentPropsWithRef<'button'>;

const Button = ({ ref, className, type, ...props }: ButtonProps) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn('', className)}
      {...props}
    />
  );
};
Button.displayName = 'Button';

export { Button as default };
