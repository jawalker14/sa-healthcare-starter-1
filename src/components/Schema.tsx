import React from 'react';

interface SchemaProps {
  schema: object;
}

const Schema: React.FC<SchemaProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default Schema;