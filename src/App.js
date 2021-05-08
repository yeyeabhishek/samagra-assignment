import "./styles.css";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function App() {
  const [urls] = useState([
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/photos",
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/posts"
  ]);
  const [start1, setStart1] = useState("");
  const [start2, setStart2] = useState("");
  const [start3, setStart3] = useState("");
  const [start4, setStart4] = useState("");
  const [end1, setEnd1] = useState("");
  const [end2, setEnd2] = useState("");
  const [end3, setEnd3] = useState("");
  const [end4, setEnd4] = useState("");
  const [startSave1, setStartSave1] = useState("");
  const [startSave2, setStartSave2] = useState("");
  const [startSave3, setStartSave3] = useState("");
  const [startSave4, setStartSave4] = useState("");
  const [endSave1, setEndSave1] = useState("");
  const [endSave2, setEndSave2] = useState("");
  const [endSave3, setEndSave3] = useState("");
  const [endSave4, setEndSave4] = useState("");
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});

  function fetchUrl(url, index) {
    const target = index + 1;
    if (target === 1) setStart1(Date.now());
    else if (target === 2) setStart2(Date.now());
    else if (target === 3) setStart3(Date.now());
    else if (target === 4) setStart4(Date.now());
    fetch(url, { method: "get" })
      .then((response) => {
        if (target === 1) setEnd1(Date.now());
        else if (target === 2) setEnd2(Date.now());
        else if (target === 3) setEnd3(Date.now());
        else if (target === 4) setEnd4(Date.now());
        return response.json();
      })
      .then((data) => {
        if (target === 1) {
          setStartSave1(Date.now());
          setData1(data);
          setEndSave1(Date.now());
        } else if (target === 2) {
          setStartSave2(Date.now());
          setData2(data);
          setEndSave2(Date.now());
        } else if (target === 3) {
          setStartSave3(Date.now());
          setData3(data);
          setEndSave3(Date.now());
        } else if (target === 4) {
          setStartSave4(Date.now());
          setData4(data);
          setEndSave4(Date.now());
        }
      });
  }
  return (
    <Container className="justify-content-md-center">
      <Row
        className="justify-content-md-center"
        style={{ border: "1px solid black" }}
      >
        <Col></Col>
        <Col md="auto">Test App</Col>
        <Col></Col>
      </Row>
      <Row className="justify-content-md-center">
        {urls.map((url, index) => {
          const target = index + 1;
          let start;
          let end;
          let startSave;
          let endSave;
          if (target === 1) {
            start = start1;
            end = end1;
            startSave = startSave1;
            endSave = endSave1;
          } else if (target === 2) {
            start = start2;
            end = end2;
            startSave = startSave2;
            endSave = endSave2;
          } else if (target === 3) {
            start = start3;
            end = end3;
            startSave = startSave3;
            endSave = endSave3;
          } else if (target === 4) {
            start = start4;
            end = end4;
            startSave = startSave4;
            endSave = endSave4;
          }
          return (
            <Col
              xs="6"
              sm="6"
              lg="6"
              style={{ marginTop: 3, border: "1px solid black" }}
            >
              Start:{start}
              <br />
              End:{end}
              <br />
              StartSave:{startSave}
              <br />
              EndSave:{endSave}
            </Col>
          );
        })}
      </Row>
      <Row
        className="justify-content-md-center"
        style={{ border: "1px solid black", padding: 10 }}
      >
        {urls.map((url, index) => {
          const target = index + 1;
          return (
            <Col xs="6" sm="6" lg="6" style={{ marginTop: 2, paddingLeft: 2 }}>
              <Button
                variant="outline-secondary"
                onClick={() => fetchUrl(url, index)}
              >
                Button{target}
              </Button>
            </Col>
          );
        })}
        <div
          align="center"
          style={{ marginTop: 5, border: "1px solid black", padding: 10 }}
        >
          Current Unix TimeStamp: {Date.now()}
        </div>
      </Row>
    </Container>
  );
}
export default App;
