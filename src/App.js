import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

function App() {
  const [company, setCompany] = useState();

  const query = gql`
    query {
      Company {
        name
      }
    }
  `;

  const { data, loading } = useQuery(query);

  useEffect(() => {
    if (!data || !data.Company || !data.Company.length) {
      return;
    }

    setCompany(data.Company[0].name);
  }, [data]);

  return loading ? <div>Loading...</div> : <div>{company}</div>;
}

export default App;
