import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card className="text-center" >
      <Card.Body style={{background:'#F7F5EB', borderRadius: "2px"}}>
        <Card.Title>Support service</Card.Title>
        <Card.Text>
          We offer support in the event of any problems or issues.
        </Card.Text>
        <Button variant="primary" href="mailto:mdsmilaadi@gmail.com">
          Contact us{" "}
        </Button>
      </Card.Body>

      <Card.Footer>
        <p>Developed By: Adem Miladi</p>
        <p>Copyright © 2023. All rights reserved.</p>
      </Card.Footer>
    </Card>

  );
}

export default Footer;
