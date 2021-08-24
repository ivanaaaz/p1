import Link from 'next/link';
import '../../tailwind.config';
//import styles from './index.module.css';

const Member = ({ member }) => {
  return (
    <li className="px-16 py-16 text-center text-xl">
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
      <ul className="grid grid-rows-4 gap-10 bg-secondary-50 bg-opacity-50 mt-20 mx-80 my-80 mb-40 text-lg p-8 rounded-3xl divide-y divide-gray-300 shadow-xl">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </ul>
   
  );
};

export default MemberList;
