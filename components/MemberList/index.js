import { useState } from 'react';
import Link from 'next/link';
import Card from '../Card';
import Input from '../Input';
import TH from '../TH';
import TD from '../TD';
import { GENDER } from '../../src/constants';
import Select from '../Select/select';
const ALL_OPTION = 'All';

const Member = ({ member }) => {
  return (
    <>
      <TD>
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
      </TD>
      <TD>
        <div className="text-sm text-gray-900">{member.gender}</div>
      </TD>
    </>
  );
};

const Table = ({ members }) => {
  return (
    <table className=" min-w-full divide-y divide-gray-200 table-auto">
      <thead className="bg-gray-50">
        <tr>
          <TH>Name</TH>
          <TH>Gender</TH>
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
  const [selectedGender, setSelectedGender] = useState(ALL_OPTION);
  const membersToDisplay = members.filter((member) => {
    return (
      member.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedGender === ALL_OPTION ? true : member.gender === selectedGender)
    );
  });

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

        <Select
          style={{ marginLeft: 8, marginRight: 2 + 'em' }}
          type="select"
          name="selectOption"
          value={selectedGender}
          onChange={(event) => {
            setSelectedGender(event.target.value);
          }}
        >
          <option value={ALL_OPTION}>All</option>
          {Object.values(GENDER).map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </Select>
      </div>

      <Card>
        <Table members={membersToDisplay} />
      </Card>
    </div>
  );
};

export default MemberList;
