import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex flex-wrap items-center justify-center mx-auto pt-4">
        <Link className="self-center text-2xl font-semibold" href={'/'}>
          Next-Chess
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 text-center mx-auto pt-2 pb-4">
        <Link
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href={'/random'}>
          Random
        </Link>
        <Link
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href={'/computer'}>
          Computer
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
