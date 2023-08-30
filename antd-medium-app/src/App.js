import {
  Input,
  Button,
  Card,
  Row,
  Col,
  DatePicker,
  Pagination,
  Tabs,
  Table,
  Modal,
} from "antd";

function App() {
  return (
    <div className="App">
      <Input placeholder="Input" />
      <Button>Submit</Button>
      <Card>Card</Card>
      <Row>
        <Col>Grid (Row/Col)</Col>
      </Row>
      <DatePicker />
      <Pagination />
      <Tabs></Tabs>
      <Table></Table>
      <Modal></Modal>
    </div>
  );
}

export default App;
