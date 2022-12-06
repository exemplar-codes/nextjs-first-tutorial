import { useRouter } from "next/router";

function UserHomePage() {
  const router = useRouter();

  const userId = router.query.userId;

  return (
    <h1>
      Hello user with id <code>{userId}</code>
    </h1>
  );
}

export default UserHomePage;
