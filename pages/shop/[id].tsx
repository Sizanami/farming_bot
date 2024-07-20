'use client';

import { GetServerSideProps } from 'next';
import React from "react";
import Others from '@/components/shop/Others';

type Props = {
  id: string;
};

const Other: React.FC<Props> = ({id}) => {
  return (
    <Others id = {id} />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  return {
    props: {
      id,
    },
  };
};

export default Other;