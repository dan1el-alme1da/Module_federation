import React from 'react';
import { Container, Card, CardBody, Button } from 'reactstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <Card>
        <CardBody>
          <h1 className="display-3">Olá Module Federation!</h1>
          <hr className="my-2" />
          <p>Este componente é de outro app!</p>
          <p className="lead">
            <Button color="primary">Botão</Button>
          </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;