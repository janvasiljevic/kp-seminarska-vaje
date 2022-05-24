import { Anchor, Box, Card, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Link, Mail, Square0 } from 'tabler-icons-react';
import { useAllStores } from '../api';

function Stores() {
  const stores = useAllStores();

  const navigate = useNavigate();

  return (
    <Container size="xl">
      <Title order={1} pt="lg" pb="md" sx={(theme) => ({ fontFamily: theme.fontFamilyMonospace })}>
        stores
      </Title>

      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        {stores.data?.map((store) => {
          return (
            <Card key={store.id} shadow="xs" p="lg">
              <Stack>
                <Text
                  weight={500}
                  onClick={() => navigate(`/stores/${store.id}`)}
                  sx={(theme) => ({ cursor: 'pointer', color: theme.colors.green[8] })}
                >
                  {store.name}
                </Text>

                <Box sx={(theme) => ({ display: 'flex', flexDirection: 'row' })}>
                  <Box pr="md">
                    <Square0> </Square0>
                  </Box>

                  <Text sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {' '}
                    {store.email}
                  </Text>
                </Box>

                <Box sx={(theme) => ({ display: 'flex', flexDirection: 'row' })}>
                  <Box pr="md">
                    <Mail></Mail>
                  </Box>

                  <Text sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {' '}
                    {store.phoneNumber}
                  </Text>
                </Box>

                <Box sx={(theme) => ({ display: 'flex', flexDirection: 'row' })}>
                  <Box pr="md">
                    <Link></Link>
                  </Box>

                  <Anchor
                    href={store.url}
                    target="_blank"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                  >
                    {store.url}
                  </Anchor>
                </Box>
              </Stack>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

export default Stores;
