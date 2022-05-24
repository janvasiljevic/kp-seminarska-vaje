import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstace from '../api/axiosInterface';
import { setUser } from '../slices/user.slice';
import { useAppDispatch } from '../store';

export function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstace
      .get('/auth/me')
      .then(({ data }) => {
        if (data) {
          dispatch(setUser(data));
        }
      })
      .catch(() => {
        navigate('/login');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { isLoading: loading };
}
