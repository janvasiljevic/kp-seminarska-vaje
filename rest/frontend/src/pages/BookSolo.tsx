import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Timeline,
  Title,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useNavigate, useParams } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import { Book as BookIcon, ChevronLeft, Coin, Trophy } from 'tabler-icons-react';
import { any, string } from 'zod';
import { useAllStores, useOneBook, useOneStore } from '../api';
import axiosInstace from '../api/axiosInterface';
import FullSizeLoader from '../components/FullSizeLoader';

function BookSolo() {
  const { mutate } = useSWRConfig();

  const navigate = useNavigate();

  const { id } = useParams();

  const book = useOneBook(id || '');

  if (book.isError) {
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

  if (book.isLoading || !book.data) {
    return <FullSizeLoader />;
  }

  return (
    <Container size="xl">
      <Title order={1} pt="lg" pb="md" sx={(theme) => ({ fontFamily: theme.fontFamilyMonospace })}>
        {book.data.title}
      </Title>

      <Box sx={(theme) => ({ display: 'flex', flexDirection: 'row' })}>
        <Box pr="md">
          <ChevronLeft></ChevronLeft>
        </Box>

        <Anchor onClick={() => navigate(`/books`)}>Back</Anchor>
      </Box>

      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
        pt="lg"
      >
        <DataCard title="author" body={book.data.authors} icon="" />
        <DataCard title="Average Rating" body={book.data.averageRating} icon="" />
        <DataCard title="isbn" body={book.data.isbn} icon="" />
        <DataCard title="isbn13" body={book.data.isbn13} icon="" />
        <DataCard title="Language code" body={book.data.languageCode} icon="" />
        <DataCard title="Number of pages" body={book.data.numOfPages} icon="" />
        <DataCard title="Ratings count" body={book.data.ratingsCount} icon="" />
      </SimpleGrid>
    </Container>
  );
}

interface IDataCard {
  body: string | number;
  title: string;
  icon: any;
}

const DataCard = ({ title, body, icon }: IDataCard) => {
  return (
    <Paper p="xl" withBorder>
      {icon}
      <Text weight={500} color="grape">
        {title}
      </Text>
      <Text>{body}</Text>
    </Paper>
  );
};

export default BookSolo;
