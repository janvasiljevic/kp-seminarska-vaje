import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Burger,
  Group,
  Header,
  MediaQuery,
  Menu,
  Navbar,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Book, Book2, BuildingStore, Logout, Mail, MoonStars, Sun, User, Api } from 'tabler-icons-react';
import axiosInstace from '../api/axiosInterface';
import FullSizeLoader from '../components/FullSizeLoader';
import { useAuth } from '../hooks/auth';
import { useSelector } from '../store';

function Home() {
  const [opened, setOpened] = useState(false);

  const { isLoading } = useAuth();

  const theme = useMantineTheme();

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const [menuOpened, handlers] = useDisclosure(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  if (isLoading) {
    return (
      <Box sx={{ width: '100vw', height: '100vh' }}>
        <FullSizeLoader />;
      </Box>
    );
  }

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 400 }}>
          <Navbar.Section grow mt="md">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Group position="apart" sx={{ width: '100%' }}>
              <Group>
                <Group>
                  <Book />
                  <Title order={4}>KPStore</Title>
                </Group>
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                  {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
                </ActionIcon>
              </Group>

              <Group spacing="sm">
                <Text> {user.firstname} </Text>
                <Menu
                  opened={menuOpened}
                  onOpen={handlers.open}
                  onClose={handlers.close}
                  control={
                    <Avatar color="cyan" radius="xl" sx={{ cursor: 'pointer' }}>
                      {user.firstname[0]}
                      {user.lastname[0]}
                    </Avatar>
                  }
                >
                  <Menu.Label>
                    kpoobstore | <Text color="blue">{user.role} </Text>{' '}
                  </Menu.Label>
                  <Menu.Item icon={<User size={14} />}>
                    {user.firstname} {user.lastname}
                  </Menu.Item>

                  <Menu.Item icon={<Mail size={14} />}>{user.mail.split('@')[0]}</Menu.Item>

                  {user.dn.split(',').map((n, i) => {
                    return <Menu.Label key={i}>{n}</Menu.Label>;
                  })}

                  <Menu.Item
                    color="red"
                    icon={<Logout size={14} />}
                    onClick={() => {
                      axiosInstace.delete('/auth/logout').finally(() => navigate('/login'));
                    }}
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              </Group>
            </Group>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  click: Function;
}

export function Brand() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      })}
    ></Box>
  );
}

function MainLink({ icon, color, label, click }: MainLinkProps) {
  const navigate = useNavigate();

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
      onClick={() => click()}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

function MainLinks() {
  const navigate = useNavigate();

  const data: MainLinkProps[] = [
    { icon: <Book2 size={16} />, color: 'cyan', label: 'Books', click: () => navigate('/books') },
    { icon: <BuildingStore size={16} />, color: 'orange', label: 'Stores', click: () => navigate('/stores') },
    {
      icon: <Api size={16} />,
      color: 'grape',
      label: 'graphql',
      click: () => window.location.replace(import.meta.env.VITE_GQL),
    },
  ];

  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

export default Home;
