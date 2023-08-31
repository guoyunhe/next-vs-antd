import "@alifd/next/dist/next.var.css";
import {
  Input,
  Button,
  Card,
  Grid,
  DatePicker2,
  Pagination,
  Tab,
  Table,
  Dialog,
  Message,
  Timeline,
  Step,
  Balloon,
  Select,
} from "@alifd/next";

function App() {
  return (
    <div className="App">
      <Input placeholder="Input" />
      <Button>Submit</Button>
      <Card>Card</Card>
      <Grid.Row>
        <Grid.Col>Grid (Row/Col)</Grid.Col>
      </Grid.Row>
      <DatePicker2 />
      <Pagination />
      <Tab>
        <Tab.Item />
      </Tab>
      <Table>
        <Table.Column />
      </Table>
      <Dialog />
      <Message></Message>
      <Timeline></Timeline>
      <Step></Step>
      <Balloon></Balloon>
      <Balloon.Tooltip></Balloon.Tooltip>
      <Select></Select>
    </div>
  );
}

export default App;
