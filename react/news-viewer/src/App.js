import { useState } from 'react';
import axios from 'axios';
import * as Constants from './constants/api-constants';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
      try {
          const response = await axios.get(Constants.NEWS_URL_TOP);
          setData(response.data);
      } catch (e) {
          console.log(e);
      }
  };

  return (
    <div>
        <div>
            <button onClick={onClick}>read</button>
        </div>
        {data && <textarea cols={100} rows={20} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  )
}

export default App;
