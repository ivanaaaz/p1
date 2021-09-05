import Head from 'next/head';
import React, { useState } from 'react';
import { members } from '../mocks';
import MemberList from '../components/MemberList';

const Home = () => {
  return (
    <main>
      <Head>
        <title>Members</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        <h1 className="mb-4 text-2xl">Members</h1>
        <MemberList members={members} />
      </main>
      <footer></footer>
    </main>
  );
};

export default Home;
