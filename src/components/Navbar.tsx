import { cn } from '@/lib/utils';

type NavbarType = {
  className: string;
};

const Navbar = ({ className, ...props }: NavbarType) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <nav
          className={cn('flex items-center space-x-4 lg:space-x-6', className)}
          {...props}>
          <h2 className="text-3xl font-bold tracking-tight">Next-Chess</h2>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
