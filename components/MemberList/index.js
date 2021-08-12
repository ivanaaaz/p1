import Link from 'next/link';
import styles from './index.module.css';

const Member = ({ member }) => {
  return (
    <li className={styles.card}>
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
    <ul className={styles.grid}>
      {members.map((member) => (
        <Member key={member.id} member={member} />
      ))}
    </ul>
  );
};

export default MemberList;
