import "@alifd/next/dist/next.css";
import {
  Input,
  Button,
  Card,
  Grid,
  DatePicker2,
  Pagination,
  Tab,
  Table,
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
    </div>
  );
}

export default App;
