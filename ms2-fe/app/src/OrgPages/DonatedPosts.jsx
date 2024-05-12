import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Checkroom } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import Tshirt from "./OrgImages/tshirts.jpg";
import Food from "./OrgImages/Food.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import DrawIcon from "@mui/icons-material/Draw";
import Stationary from "./OrgImages/Stationary.jpg";
import Root from './Root';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import Button from "@mui/material/Button"; // Import Button

const DonatedPosts = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  
    const [editDialogOpen, setEditDialogOpen] = useState(false);
  
    const [editClothes, setEditClothes] = useState(false);
  
    const [clothes, setClothes] = useState([
      // [type of clothes, age, gender, season, material, quantity]
      ["T-shirt", "8-10", "Male", "Summer", "Cotton", 4],
    ]);
  
    const [food, setFood] = useState([
      // [name, quantity(kg if fruit or vegetables and amount the rest)]
      ["Rice", "20 kg"],
    ]);
  
    const [stationarySupplies, setStationarySupplies] = useState([
      // [type, quantity]
      ["Pens", 500],
    ]);
  
    const OpenhandleClothes = (category, index) => {
      setSelectedCategory(category);
      setSelectedItemIndex(index);
      setEditClothes(true);
    };
    const ClosehandleClothes = () => {
      setEditDialogOpen(false);
      setSelectedCategory("");
      setEditClothes(false);
    };
  
    const [open1, setOpen1] = useState(false); //ba3d ma ados 3ala view clothes
    const [open2, setOpen2] = useState(false); //ba3d ma ados 3ala View Details
    const [open3, setOpen3] = useState(false); //ba3d ma yedos 3ala contact
    const [open4, setOpen4] = useState(false); //Details food
  
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClickOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
  
    const handleClose2 = () => {
      //close le view details
      setOpen2(false);
    };
  
    const handleClickOpen3 = () => {
      setOpen3(true);
    };
  
    const handleClose3 = () => {
      //close le view details
      setOpen3(false);
    };
  
    const handleClickOpen4 = () => {
      setOpen4(true);
    };
  
    const handleClose4 = () => {
      //close le view details
      setOpen4(false);
    };
  
    const handleDeleteCard = (index, category) => {
      let updatedCategory;
      switch (category) {
        case "food":
          updatedCategory = [...food];
          setFood(updatedCategory.filter((_, i) => i !== index));
          break;
        case "clothes":
          updatedCategory = [...clothes];
          setClothes(updatedCategory.filter((_, i) => i !== index));
          break;
        case "stationarySupplies":
          updatedCategory = [...stationarySupplies];
          setStationarySupplies(updatedCategory.filter((_, i) => i !== index));
          break;
        default:
          break;
      }
    };
  
    return (
      <div>
        <div>
        <Root />
        </div>
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          marginTop={3}
          marginLeft={3}
        >
          Donated Posts
        </Typography>
  
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "16px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "8px",
          }}
        >
          <div>
            {clothes.map((item, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
              >
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <Checkroom />
                    </IconButton>
                  }
                  title={"Clothes Post"}
                />
                <Divider sx={{ mb: 2 }} />
                <img
                  src={Tshirt}
                  alt="logo"
                  style={{
                    width: "250px",
                    height: "250px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <CardContent>
                  <Typography variant="body2" color="black">
                    Saif Ahmed donated 2 T-shirts
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Tooltip title="View Details">
                    <IconButton
                      aria-label="view"
                      onClick={() => handleClickOpen1()}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
  
                  <Tooltip title="Delete Post">
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteCard(index, "clothes")}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
  
                  <Tooltip title="Donor's Contact">
                    <IconButton
                      aria-label="contact"
                      onClick={() => handleClickOpen3(index, "food")}
                    >
                      <ContactEmergencyIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            ))}
  
            <Dialog open={open1} onClose={handleClose1}>
              <DialogTitle> Clothes Details </DialogTitle>
              <DialogContent>
                <div>
                  Type: T-shirt <br />
                  Age: 8-10 <br />
                  Gender: Male <br />
                  Season: Summer <br />
                  Material: Cotton <br />
                  Quantity: 4 <br />
                </div>
              </DialogContent>
            </Dialog>
          </div>
  
          <div>
            {food.map((item, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
              >
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <LunchDiningIcon />
                    </IconButton>
                  }
                  title={"Food Post"}
                />
                <Divider sx={{ mb: 2 }} />
                <img
                  src={Food}
                  alt="logo"
                  style={{
                    width: "250px",
                    height: "250px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <CardContent>
                  <Typography variant="body2" color="black">
                    Saif Ahmed donated 10kg of Rice
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Tooltip title="View Details">
                    <IconButton
                      aria-label="view"
                      onClick={() => handleClickOpen2()}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Post">
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteCard(index, "food")}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Donor's Contact">
                    <IconButton
                      aria-label="contact"
                      onClick={() => handleClickOpen3(index, "food")}
                    >
                      <ContactEmergencyIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            ))}
  
            <Dialog open={open3} onClose={handleClose3}>
              <DialogTitle> Donor's Contact Details </DialogTitle>
              <DialogContent>
                <div>
                  Name: Saif Ahmed <br />
                  Email: saifahmedsalah11@gmail.com <br />
                  Mobile Number: 01023255440 <br />
                </div>
              </DialogContent>
            </Dialog>
  
            <Dialog open={open2} onClose={handleClose2}>
              <DialogTitle> Food Details </DialogTitle>
              <DialogContent>
                <div>
                  Type: Rice <br />
                  Quantity: 20kg <br />
                </div>
              </DialogContent>
            </Dialog>
          </div>
  
          <div>
            {stationarySupplies.map((item, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
              >
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <DrawIcon />
                    </IconButton>
                  }
                  title={"Stationary Post"}
                />
                <Divider sx={{ mb: 2 }} />
                <img
                  src={Stationary}
                  alt="logo"
                  style={{
                    width: "250px",
                    height: "250px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <CardContent>
                  <Typography variant="body2" color="black">
                    Saif Ahmed donated 200 Pens
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Tooltip title="View Details">
                    <IconButton
                      aria-label="view"
                      onClick={() => handleClickOpen4()}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Post">
                    <IconButton
                      aria-label="delete"
                      onClick={() =>
                        handleDeleteCard(index, "stationarySupplies")
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Donor's Contact">
                    <IconButton
                      aria-label="contact"
                      onClick={() => handleClickOpen3(index, "food")}
                    >
                      <ContactEmergencyIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            ))}
  
            <Dialog open={open3} onClose={handleClose3}>
              <DialogTitle> Donor's Contact Details </DialogTitle>
              <DialogContent>
                <div>
                  Name: Saif Ahmed <br />
                  Email: saifahmedsalah11@gmail.com <br />
                  Mobile Number: 01023255440 <br />
                </div>
              </DialogContent>
            </Dialog>
  
            <Dialog open={open4} onClose={handleClose4}>
              <DialogTitle> Stationary Supplies Details </DialogTitle>
              <DialogContent>
                <div>
                  Type: Pens <br />
                  Quantity: 500 <br />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    );
  };
  
  export default DonatedPosts;