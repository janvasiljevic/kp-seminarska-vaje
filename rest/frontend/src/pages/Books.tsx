import { Center, Container, Modal, Table, Title } from '@mantine/core';
import { useState } from 'react';
import { useAllBooks } from '../api';

import { Pagination } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const pageSize = 20;

function Books() {
  const [activePage, setPage] = useState(1);

  const books = useAllBooks({ skip: activePage, take: pageSize });

  const [opened, setOpened] = useState(false);

  const navigate = useNavigate();

  const [bookId, setBookId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setBookId(id);
    setOpened(true);
  };

  const rows = (books.data?.items || []).map((b) => (
    <tr
      key={b.id}
      style={{ whiteSpace: 'nowrap', height: '3px', cursor: 'pointer' }}
      onClick={() => {
        navigate(`/books/${b.id}`);
      }}
    >
      <td style={{ textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '300px' }}>{b.title}</td>
      <td style={{ textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '200px' }}>{b.authors}</td>
      <td>{b.averageRating}</td>
    </tr>
  ));

  return (
    <Container size="xl">
      <Title order={1} pt="lg" pb="md" sx={(theme) => ({ fontFamily: theme.fontFamilyMonospace })}>
        books
      </Title>

      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!">
        {/* Modal content */}
      </Modal>
      <Table
        striped
        highlightOnHover
        pt="lg"
        sx={{ overflowX: 'auto', display: 'block', whiteSpace: 'nowrap', width: '100%' }}
      >
        <thead style={{ display: 'table', width: '100%' }}>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Average rating</th>
          </tr>
        </thead>
        <tbody style={{ display: 'table', width: '100%' }}>{rows}</tbody>
      </Table>
      <Center pt="lg">
        <Pagination
          page={activePage}
          onChange={setPage}
          total={Math.floor((books.data?.count || 0) / pageSize)}
          color="pink"
          withEdges
          siblings={3}
        />
      </Center>
    </Container>
  );
}

export default Books;
