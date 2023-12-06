import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle , FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import QZoon from "../QZoon/QZoon";
import bg from '../../../assets/bg.png';

const RegitNav = () => {
  return (
    <div>
      <h4 className="mb-4">Login with</h4>
      <div className="">
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle />
          login with facebook
        </Button>
        <Button className="w-4" variant="outline-secondary">
          <FaGithub></FaGithub>login with Github
        </Button>
      </div>
      <div className="mt-4">
        <h4>Find us on</h4>
    <ListGroup>
      <ListGroup.Item className="p-3 mt-6"><FaFacebook className="bg-"></FaFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item className="p-3"><FaTwitter></FaTwitter>twitter</ListGroup.Item>
      <ListGroup.Item className="p-3"><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <QZoon></QZoon>
    <div>
      <img src={bg} alt="" />
    </div>
    </div>
  );
};

export default RegitNav;
