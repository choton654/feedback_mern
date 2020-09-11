import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  const survey = {
    title: 'my title',
    subject: 'my subject',
    recipients: 'subhadeep654@gmail.com',
    body: 'this is body',
  };

  useEffect(() => {
    axios
      .post('/api/surveys', survey)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily!</h1>
      Collect feedback from users
    </div>
  );
}
