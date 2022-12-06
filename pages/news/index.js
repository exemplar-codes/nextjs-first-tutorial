import Link from "next/link";

function AllNewsPage() {
  return (
    <div>
      <h1>News items</h1>
      <Link href="/news/help">Need help?</Link>
    </div>
  );
}

export default AllNewsPage;
