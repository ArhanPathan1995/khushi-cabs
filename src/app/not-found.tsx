import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold text-navy">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you requested is not on this website. Use the menu to continue.
      </p>
      <Link href="/" className="mt-6 inline-block font-semibold text-secondary">
        Back to home
      </Link>
    </div>
  );
}
