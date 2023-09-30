import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex flex-wrap items-center justify-center mx-auto pt-4">
        <Link
          className="self-center text-2xl font-semibold text-white"
          href={'/'}>
          Next-Chess
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center mx-auto pt-2 pb-4">
        <Link
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href={'/random'}>
          Random
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* 
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}>
      <Link href="/" className="font-bold hover:text-primary">
        
      </Link>
      <Link
        href="/random"
        className="text-sm font-medium  hover:text-primary">
        Random
      </Link>
    </nav>
*/
}
