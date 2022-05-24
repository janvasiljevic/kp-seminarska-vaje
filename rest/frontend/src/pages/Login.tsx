import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group, Center, Blockquote, Title, Container, Stack } from '@mantine/core';
import axiosInstace from '../api/axiosInterface';
import { ISessionUser } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { setUser } from '../slices/user.slice';
import { useSWRConfig } from 'swr';

interface ILoginForm {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(2, { message: 'Name should have at least 2 letters' }),
});

const Login = () => {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: 'admin01@kpbookstore.kp',
      password: '12345678',
    },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submit = (values: ILoginForm) => {
    axiosInstace
      .post<ISessionUser>('/auth/login', values)
      .then(({ data }) => {
        dispatch(setUser(data));
      })
      .finally(() => {
        navigate('/books');
      });
  };

  return (
    <Box
      sx={(theme) => ({
        background: theme.fn.linearGradient(45, theme.colors.orange[0], theme.colors.lime[0]),
      })}
    >
      <Container
        size="xs"
        style={{ height: '100vh', backgroundColor: 'white' }}
        sx={(theme) => ({
          boxShadow: theme.shadows.xl,
        })}
      >
        <Center style={{ height: '100vh', width: '100%' }}>
          <Stack
            spacing="xl"
            style={{ width: '100%' }}
            sx={(theme) => ({
              padding: theme.spacing.xl,
            })}
          >
            <Center>
              <Stack>
                <Title
                  sx={(theme) => ({
                    fontFamily: theme.fontFamilyMonospace,
                    fontWeight: 'lighter',
                    color: theme.colors.green[9],
                  })}
                  order={1}
                >
                  kpookstore
                </Title>
                <Blockquote cite="– Jan, ko dela frontend">Ker bi rad bral knjigo</Blockquote>
              </Stack>
            </Center>

            <form onSubmit={form.onSubmit((values: ILoginForm) => submit(values))}>
              <TextInput required label="Email" placeholder="example@mail.com" {...form.getInputProps('email')} />
              <TextInput
                required
                type="password"
                label="Password"
                placeholder="Your Password"
                mt="sm"
                {...form.getInputProps('password')}
              />

              <Group position="right" mt="xl">
                <Button sx={(theme) => ({ background: theme.colors.green })} type="submit">
                  Login
                </Button>
              </Group>
            </form>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Login;
