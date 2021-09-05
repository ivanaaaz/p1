import { useRouter } from 'next/router';
import { members } from '../../mocks';
import Card from '../../components/Card';
export default function MemberDetails() {
  const router = useRouter();
  const memberId = router.query.id;
  const member = members.find(({ id }) => id === memberId);
  if (!member) return null;
  return (
    <main className="p-10">
      <h1 className="text-gray-600 text-xl">{member.name}</h1>
      <div className="mb-10">{member.email}</div>
      <Card className="inline-block">
        {/*eslint-disable-next-line*/}
        <img className="h-52" src={member.image} alt="profile" />
      </Card>
    </main>
  );
}
