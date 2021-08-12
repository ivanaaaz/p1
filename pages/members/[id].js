import { useRouter } from 'next/router';
import { members } from '../../mocks';

export default function Home2() {
  const router = useRouter();
  const memberId = router.query.id;
  const member = members.find(({ id }) => id === memberId);
  if (!member) return null;
  return (
    <div>
      <h1>Details of members</h1>
      <ul>
        <li>
          <p>{member.name}</p>
        </li>
        <li>
          <p>{member.email}</p>
        </li>
      </ul>
      <p>
        {/*eslint-disable-next-line*/}
        <img src={member.image} alt="profile" />
      </p>
    </div>
  );
}
