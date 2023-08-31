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
  Alert,
  message,
  Timeline,
  Steps,
  Tooltip,
  Popover,
  Select,
} from "antd";

function App() {
  message.useMessage();
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
      <Alert></Alert>
      <Timeline></Timeline>
      <Steps></Steps>
      <Popover></Popover>
      <Tooltip></Tooltip>
      <Select></Select>
    </div>
  );
}

export default App;
