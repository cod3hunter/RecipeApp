import {useState, useEffect} from 'react';
import {getAllCategories} from '../services/RequestService';

export default () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllCategories();
      setCategories(response);
    })();
  }, []);

  return categories;
};
