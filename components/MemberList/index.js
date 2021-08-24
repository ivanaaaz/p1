import Link from 'next/link';
import '../../tailwind.config';
//import styles from './index.module.css';

const Member = ({ member }) => {
  return (
    <li className="px-16 py-16 text-center border-b border-gray-300">
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
    <ul className="bg-secondary-50 mt-20 mx-80 my-80 mb-40 text-lg flex justify-center">
      {members.map((member) => (
        <Member
          key={member.id}
          member={member}
          className="text-gray-600"
        />
      ))}
    </ul>
  );
};

export default MemberList;
