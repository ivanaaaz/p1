import Link from 'next/link';

const Member = ({ member }) => {
  return (
    <Link href={'/members/' + member.id}>
      <a>
        <td className="px-6 py-4 whitespace-nowrap">
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
        </td>
      </a>
    </Link>
  );
};

const MemberList = ({ members }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                <tr>
                  {members.map((member) => (
                    <Member key={member.id} member={member} />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
