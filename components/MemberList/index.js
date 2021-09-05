import Link from 'next/link';
import Card from '../Card';
const Member = ({ member }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap">
      <Link href={'/members/' + member.id}>
        <a>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              {/*eslint-disable-next-line*/}
              <img
                className="h-10 w-10 rounded-full"
                src={member.image}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {member.name}
              </div>
              <div className="text-sm text-gray-500">{member.email}</div>
            </div>
          </div>
        </a>
      </Link>
    </td>
  );
};

const MemberList = ({ members }) => {
  return (
    <Card>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {members.map((member) => (
            <tr key={member.id}>
              <Member member={member} />
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </Card>
  );
};

export default MemberList;
