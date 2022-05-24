import { Anchor, Box, Button, Card, Container, Group, SimpleGrid, Stack, Text, Timeline, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useNavigate, useParams } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import { Book as BookIcon, ChevronLeft, Coin, Trophy } from 'tabler-icons-react';
import { useAllStores, useOneStore } from '../api';
import axiosInstace from '../api/axiosInterface';
import FullSizeLoader from '../components/FullSizeLoader';

function StoresSolo() {
  const { mutate } = useSWRConfig();

  const navigate = useNavigate();

  const { id } = useParams();

  const bookStore = useOneStore(id || '');

  console.log(bookStore);

  const sellABook = (bookInventoryId: string) => {
    axiosInstace
      .patch(`/book-store/${id}/sell/${bookInventoryId}`)
      .then(({ data }) => {
        showNotification({
          color: 'green',
          icon: <Trophy></Trophy>,
          title: 'Book sold',
          message: 'CHA-CHING!',
        });

        mutate([`/book-store/${id}`]);
      })
      .catch((e) => {
        showNotification({
          color: 'red',

          title: 'Error',
          message: e?.response?.data?.message || 'Something went wrong',
        });
      });
  };

  if (bookStore.isError) {
    return (
      <Container size="xl">
        <Title
          order={1}
          pt="lg"
          pb="md"
          sx={(theme) => ({ fontFamily: theme.fontFamilyMonospace, color: theme.colors.red })}
        >
          Napaka
        </Title>
      </Container>
    );
  }

  if (bookStore.isLoading || !bookStore.data) {
    return <FullSizeLoader />;
  }

  return (
    <Container size="xl">
      <Title order={1} pt="lg" pb="md" sx={(theme) => ({ fontFamily: theme.fontFamilyMonospace })}>
        {bookStore.data.name}
      </Title>

      <Box sx={(theme) => ({ display: 'flex', flexDirection: 'row' })}>
        <Box pr="md">
          <ChevronLeft></ChevronLeft>
        </Box>

        <Anchor onClick={() => navigate(`/stores`)}>Back</Anchor>
      </Box>

      <Text> In total this store has earned {bookStore.data.totalProfit.toFixed(2)}$</Text>

      <Title
        order={4}
        pt="lg"
        pb="md"
        sx={(theme) => ({ fontFamily: theme.fontFamilyMonospace, color: theme.colors.orange[7] })}
      >
        Inventory
      </Title>

      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        {bookStore.data.bookInventory.map((bookInv) => {
          return (
            <Card key={bookInv.id}>
              <Text
                weight={500}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  navigate(`/books/${bookInv.bookId}`);
                }}
              >
                {' '}
                {bookInv.book.title}{' '}
              </Text>
              <Text sx={(t) => ({ color: t.colors.green[8] })}> {bookInv.book.authors} </Text>

              <Stack p="sm">
                <Group spacing="md">
                  <Coin /> <Text> Price: {bookInv.price.toFixed(2)} $ </Text>{' '}
                </Group>

                <Group spacing="md">
                  <BookIcon /> <Text>Count: {bookInv.count} </Text>{' '}
                </Group>
              </Stack>

              <Group position="right">
                <Button color="teal" radius="md" uppercase onClick={() => sellABook(bookInv.id)}>
                  Sell
                </Button>
              </Group>
            </Card>
          );
        })}
      </SimpleGrid>

      <Title
        order={4}
        pt="lg"
        pb="md"
        sx={(theme) => ({ fontFamily: theme.fontFamilyMonospace, color: theme.colors.orange[7] })}
      >
        Books sold
      </Title>

      <Timeline bulletSize={24} lineWidth={2}>
        {bookStore.data.booksSold.map((sold) => {
          return (
            <Timeline.Item title={sold.book.title}>
              <Text color="dimmed" size="sm">
                A book by auhtor {sold.book.authors}
              </Text>
              <Text size="sm">
                {' '}
                Sold by {sold.soldBy} for {sold.profit.toFixed()}$
              </Text>
              <Text size="xs" mt={4}>
                {sold.createdAt}
              </Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Container>
  );
}

export default StoresSolo;
