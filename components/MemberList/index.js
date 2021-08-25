import Link from 'next/link';

const Member = ({ member }) => {
  return (
    <li className="px-16 py-16 text-center">
      <Link href={'/members/' + member.id}>
        <a>
          <p>{member.name}</p>
        </a>
      </Link>
    </li>
  );
};

const MemberList = ({ members }) => {
  return (
    <ul className="text-xl m-10 md:m-20 lg:m-40 bg-secondary-50 bg-opacity-50 lg:text-3xl md:text-2xl p-8 rounded-3xl divide-y divide-gray-300 shadow-xl">
      {members.map((member) => (
        <Member key={member.id} member={member} />
      ))}
    </ul>
  );
};

export default MemberList;
