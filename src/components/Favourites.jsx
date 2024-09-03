import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { Container, Row, Col, Button, ListGroupItem,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ADD_TO_FAVOURITE } from "../redux/actions";
const Favourites = () => {

    const favourites = useSelector((state) => state.favourites.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(favourites)

    return (
      <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
                <StarFill
                  className="mr-2"
                  onClick={() =>
                    dispatch(ADD_TO_FAVOURITE(fav))
                  }
                />
                <Link to={'/' + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites