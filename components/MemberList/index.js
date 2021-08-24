import Link from 'next/link';
import '../../tailwind.config';
//import styles from './index.module.css';

const Member = ({ member }) => {
  return (
    <li className="px-16 py-16 text-center border-gray-500 border-t-2">
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
    <ul className="text-gray-600">
      {members.map((member) => (
        <Member key={member.id} member={member} />
      ))}
    </ul>
  );
};

export default MemberList;
