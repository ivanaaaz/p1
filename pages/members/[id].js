import { useRouter } from 'next/router';
import { members } from '../../mocks';

export default function MemberDetails() {
  const router = useRouter();
  const memberId = router.query.id;
  const member = members.find(({ id }) => id === memberId);
  if (!member) return null;
  return (
    <div>
      <h1 className="mt-10 md:mt-16 mb-6 lg:mt-20 text-red-300 lg:text-6xl md:text-5xl text-4xl text-center lg:px-8 lg:py-8">
        {member.name}
      </h1>
      <ul className="m-6 mb-20 md:m-20 md:mb-40 lg:mt-8 lg:ml-60 lg:mr-60 lg:mb-40">
        <li className="px-8 py-8 text-center lg:text-base md:text-sm text-xs pt-2">
          <p>{member.email}</p>
        </li>
      </ul>
      <div className="flex justify-center h-52 md:h-64 lg:h-80 width-full object-cover mb-40 mt-10">
        {/*eslint-disable-next-line*/}
        <img src={member.image} alt="profile" />
      </div>
    </div>
  );
}
