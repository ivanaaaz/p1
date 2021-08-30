import { useRouter } from 'next/router';
import { members } from '../../mocks';

export default function MemberDetails() {
  const router = useRouter();
  const memberId = router.query.id;
  const member = members.find(({ id }) => id === memberId);
  if (!member) return null;
  return (
    <div>
      <h1 className="text-secondary-300 text-6xl text-center px-16 py-16">
        Details of members
      </h1>
      <ul className="mt-2 mx-80 my-80 mb-10 text-lg">
        <li className="px-16 py-16 text-center border-b border-gray-300 text-3xl text-bold text-gray-600 pb-10">
          <p>{member.name}</p>
        </li>
        <li className="px-16 py-16 text-center text-base pt-8">
          <p>{member.email}</p>
        </li>
      </ul>
    </div>
  );
}

/* <p className="flex justify-center h-80 width-full object-cover mb-40 mt-10">
   //     {/*eslint-disable-next-line*/ //}
//     <img src={member.image} alt="profile" />
//   </p> */

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const mem = await res.json();

  const paths = mem.map((member) => ({
    params: { id: member.id },
  }));

  return { paths, fallback: false };
}

/*
export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/${params.id}',
  );
  const data = await res.json();

  return { props: { members: data } };
}
*/
