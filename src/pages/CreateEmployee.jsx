import styled from 'styled-components';
import { EmployeeForm } from '../components/EmployeeForm';
import { Layout } from '../components/Layout';
import { useState } from 'react';
//import { Modal } from '../components/Modal';
import { Modal } from 'p14-plugin-miro/dist';
import done from '../assets/hrnet-logo.jpeg';

const Title = styled.h1`
  margin-bottom: 26px;
`;

export const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout title="HRnet | Create Employee">
      <Title>Create Employee</Title>
      <Modal
        show={modalIsOpen}
        setShow={setModalIsOpen}
        title="Success !"
        text="The new employee has been created"
        image={done}
      />
      <EmployeeForm setModalIsOpen={setModalIsOpen} />
    </Layout>
  );
};