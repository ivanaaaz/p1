import { useState } from 'react';
import Link from 'next/link';
import Card from '../Card';
import Input from '../Input';

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

const Table = ({ members }) => {
  return (
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
  );
};

const MemberList = ({ members }) => {
  const [searchText, setSearchText] = useState('');
  const searchMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  return (
    <div>
      <div className="pb-2 mb-8 border-b-2">
        <Input
          type="search"
          name="searchInput"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>
      <Card>
        <Table members={searchMembers} />
      </Card>
    </div>
  );
};

export default MemberList;
