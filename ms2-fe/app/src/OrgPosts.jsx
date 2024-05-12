import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Checkroom } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ToysIcon from "@mui/icons-material/Toys";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import SchoolIcon from "@mui/icons-material/School";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DrawIcon from "@mui/icons-material/Draw";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tshirt from "./OrgImages/tshirt.jpg";
import Food from "./OrgImages/Food.jpg";
import BloodDonation from "./OrgImages/Blood donation.jpg";
import Book from "./OrgImages/Book.jpg";
import Lego from "./OrgImages/Lego.jpg";
import MedicalCases from "./OrgImages/Medical Cases.jpg";
import MedicalSupplies from "./OrgImages/Medical Supplies.jpg";
import Stationary from "./OrgImages/Stationary.jpg";
import Teaching from "./OrgImages/Teaching.jpg";
import GoogleMapMarkerDialog from "./Location";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button"; // Import Button

const OrgPosts = ({ posts }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [mapDialogOpen, setMapDialogOpen] = useState(false);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(null);
  const [editedPost, setEditedPost] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const [clothes, setClothes] = useState([
    // [type of clothes, age, gender, season, material, quantity]
    ["T-shirt", "8-10", "Male", "Summer", "Cotton", 4],
  ]);

  const [food, setFood] = useState([
    // [name, quantity(kg if fruit or vegetables and amount the rest)]
    ["Rice", "50 kg"],
  ]);

  const [toys, setToys] = useState([
    // [type of toy, age, gender, category, link of an image, quantity]
    [
      "LEGO Set",
      "5-12",
      "Male",
      "Building",
      "https://example.com/toy1.jpg",
      80,
    ],
  ]);

  const [stationarySupplies, setStationarySupplies] = useState([
    // [type, quantity]
    ["Pens", 500],
  ]);

  const [bookSupplies, setBookSupplies] = useState([
    // [book name, author, language, edition, short summary, link of an image]
    [
      "Pride and Prejudice",
      "Jane Austen",
      "English",
      "Revised",
      "A romantic novel of manners set in early 19th-century England.",
      Book,
    ],
  ]);

  const [medicalSupplies, setMedicalSupplies] = useState([
    // [device type, use, image, quantity]
    ["Thermometer", "Measure body temperature", MedicalSupplies, 50],
  ]);

  const [bloodDonation, setBloodDonation] = useState([
    // [name of patient, blood type, hospital name, hospital area, governorate, address]
    [
      "John Doe",
      "O+",
      "City Hospital",
      "Downtown",
      "Example Governorate",
      "123 Main Street",
    ],
  ]);

  const [teaching, setTeaching] = useState([
    // [number of students, address, google marker, subject]
    [
      30,
      "123 Main St",
      "https://www.google.com/maps/place/Abdelrassoul,+El-Basatin+Sharkeya,+El+Basatin,+Cairo+Governorate/@29.9718695,31.3032443,17z/data=!3m1!4b1!4m6!3m5!1s0x1458385447cc5eb3:0x67236c3103be023e!8m2!3d29.9718695!4d31.3058192!16s%2Fg%2F11bw84wsty!12b1?rapsrc=apiv3&entry=ttu",
      "Mathematics",
    ],
  ]);

  const [medicalCases, setMedicalCases] = React.useState([
    [
      "Jane Smith",
      30,
      "Female",
      60,
      "https://www.google.com/maps/place/Street+40,+Al+Abageyah,+El+Mokattam,+Cairo+Governorate/@30.0158332,31.2850075,17z/data=!3m1!4b1!4m6!3m5!1s0x145838ca47f80f8b:0xd4b3c8c4bc750c30!8m2!3d30.0158332!4d31.2875824!16s%2Fg%2F1thbn1t9?entry=ttu",
      "456 Elm St",
      "Community Hospital",
      "Orthopedics",
      "Patient sustained a fracture in the left arm after a fall.",
    ],
  ]);

  // Function to handle form submission for updating post
  const handleUpdatePost = () => {
    // Logic to update the post with editedPost details
    // This is where you should update your state or make an API call
    // After updating, close the dialog and reset editedPost state
    setEditDialogOpen(false);
    setEditedPost(null);
  };

  const [editMode, setEditMode] = useState(false); // State to control edit mode
  const [editModeAll, setEditModeAll] = useState(false);

  const handleEditClick = (category, index) => {
    if (category === "clothes") {
      setEditModeAll((prevMode) => !prevMode);
    }
    if (category === "food") {
      setEditModeAllFoods((prevMode) => !prevMode);
    }
    if (category === "toys") {
      setEditModeAllToys((prevMode) => !prevMode);
    }
    if (category === "stationary") {
      setEditModeAllStationary((prevMode) => !prevMode);
    }
    if (category === "teaching") {
      setEditModeAllTeaching((prevMode) => !prevMode);
    }
    if (category === "blooddonation") {
      setEditModeAllBloodDonation((prevMode) => !prevMode);
    }
    if (category === "medicalcases") {
      setEditModeAllMedicalCases((prevMode) => !prevMode);
    }
  };

  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const [editClothes, setEditClothes] = useState(false);

  const OpenhandleClothes = (category, index) => {
    setSelectedCategory(category);
    setSelectedItemIndex(index);
    setEditClothes(true);
  };

  const ClosehandleClothes = () => {
    setEditDialogOpen(false);
    setSelectedCategory("");
    setEditClothes(false);
    setEditModeAll(false);
  };

  const handleDeleteCard = (index, category) => {
    let updatedCategory;
    switch (category) {
      case "food":
        updatedCategory = [...food];
        setFood(updatedCategory.filter((_, i) => i !== index));
        break;
      case "toys":
        updatedCategory = [...toys];
        setToys(updatedCategory.filter((_, i) => i !== index));
        break;
      case "stationarySupplies":
        updatedCategory = [...stationarySupplies];
        setStationarySupplies(updatedCategory.filter((_, i) => i !== index));
        break;
      case "bookSupplies":
        updatedCategory = [...bookSupplies];
        setBookSupplies(updatedCategory.filter((_, i) => i !== index));
        break;
      case "clothes":
        updatedCategory = [...clothes];
        setClothes(updatedCategory.filter((_, i) => i !== index));
        break;
      case "medicalSupplies":
        updatedCategory = [...medicalSupplies];
        setMedicalSupplies(updatedCategory.filter((_, i) => i !== index));
        break;
      case "bloodDonation":
        updatedCategory = [...bloodDonation];
        setBloodDonation(updatedCategory.filter((_, i) => i !== index));
        break;
      case "teaching":
        updatedCategory = [...teaching];
        setTeaching(updatedCategory.filter((_, i) => i !== index));
        break;
      case "medicalcases":
        updatedCategory = [...medicalCases];
        setMedicalCases(updatedCategory.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };
  const [editModeAllFoods, setEditModeAllFoods] = useState(false);

  const [foodDialogOpen, setFoodDialogOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleViewDetails = (food) => {
    setSelectedFood(food);
    setFoodDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setFoodDialogOpen(false); // Close the food edit dialog
  };

  // Function to handle changes in the dialog
  const handleEditChange = (index, value) => {
    // Create a copy of the clothes array
    const updatedClothes = [...clothes];
    // Update only the specific field that has been changed
    updatedClothes[selectedItemIndex] = updatedClothes[selectedItemIndex].map(
      (item, idx) => (idx === index ? value : item)
    );
    // Update the state with the new clothes array
    setClothes(updatedClothes);
  };

  // Function to submit edits
  const handleEditSubmit = () => {
    setEditModeAll(false);
    ClosehandleClothes();
    alert("Done");
  };

  // Function to handle changes in the edit dialog for food items
  const handleEditChangeFoods = (index, newValue) => {
    // Create a copy of the food array
    const updatedFood = [...food];
    // Update only the specific field that has been changed
    updatedFood[index] = newValue;
    // Update the state with the new food array
    setFood(updatedFood);
  };

  // Function to handle submitting changes for food items
  const handleEditSubmitFoods = () => {
    setEditModeAllFoods(false);
    setFoodDialogOpen(false); // Close the food edit dialog
    alert("Done");
  };

  const handleCancelEditFoods = () => {
    setFoodDialogOpen(false); // Close the food edit dialog
    setEditModeAllFoods(false); // Disable edit mode for food
  };

  const [editModeAllToys, setEditModeAllToys] = useState(false);
  const [toyDialogOpen, setToyDialogOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  const handleViewToyDetails = (toy) => {
    setSelectedToy(toy);
    setToyDialogOpen(true);
  };

  const handleCloseToyDialog = () => {
    setToyDialogOpen(false); // Close the toy edit dialog
  };

  // Function to handle changes in the edit dialog for toy items
  const handleEditChangeToys = (index, newValue) => {
    // Create a copy of the toys array
    const updatedToys = [...toys];
    // Update only the specific field that has been changed
    updatedToys[index] = newValue;
    // Update the state with the new toys array
    setToys(updatedToys);
  };

  // Function to handle submitting changes for toy items
  const handleEditSubmitToys = () => {
    setEditModeAllToys(false);
    setToyDialogOpen(false); // Close the toy edit dialog
    alert("Done");
  };

  const handleCancelEditToys = () => {
    setToyDialogOpen(false); // Close the toy edit dialog
    setEditModeAllToys(false); // Disable edit mode for toys
  };

  const [editModeAllStationary, setEditModeAllStationary] = useState(false);
  const [stationaryDialogOpen, setStationaryDialogOpen] = useState(false);
  const [selectedStationaryIndex, setSelectedStationaryIndex] = useState(null);
  const [editedStationary, setEditedStationary] = useState(null);

  const handleEditClickStationary = (index) => {
    setEditModeAllStationary((prevMode) => !prevMode);
    setSelectedStationaryIndex(index);
    setStationaryDialogOpen(true);
  };

  const handleCloseStationaryDialog = () => {
    setStationaryDialogOpen(false);
    setEditModeAllStationary(false);
    setSelectedStationaryIndex(null);
    setEditedStationary(null);
  };

  const handleEditChangeStationary = (index, fieldIndex, newValue) => {
    const updatedStationary = [...stationarySupplies];
    updatedStationary[index][fieldIndex] = newValue;
    setStationarySupplies(updatedStationary);
  };

  const handleEditSubmitStationary = () => {
    handleCloseStationaryDialog();
    alert("Done");
  };

  const handleCancelEditStationary = () => {
    handleCloseStationaryDialog();
  };

  const [editModeAllBooks, setEditModeAllBooks] = useState(false);
  const [bookDialogOpen, setBookDialogOpen] = useState(false);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const [editedBook, setEditedBook] = useState(null);

  const handleEditClickBook = (index) => {
    setEditModeAllBooks((prevMode) => !prevMode);
    setSelectedBookIndex(index);
    setBookDialogOpen(true);
  };

  const handleCloseBookDialog = () => {
    setBookDialogOpen(false);
    setEditModeAllBooks(false);
    setSelectedBookIndex(null);
    setEditedBook(null);
  };

  const handleEditChangeBook = (index, newValue) => {
    const updatedBooks = [...bookSupplies];
    updatedBooks[index] = newValue;
    setBookSupplies(updatedBooks);
  };

  const handleEditSubmitBook = () => {
    handleCloseBookDialog();
    alert("Done");
  };

  const handleCancelEditBook = () => {
    handleCloseBookDialog();
  };

  const [editModeAllMedical, setEditModeAllMedical] = useState(false);
  const [medicalDialogOpen, setMedicalDialogOpen] = useState(false);
  const [selectedMedicalIndex, setSelectedMedicalIndex] = useState(null);
  const [editedMedical, setEditedMedical] = useState(null);

  const handleViewMedicalDetails = (medicalItem) => {
    setSelectedMedicalIndex(medicalItem);
    setMedicalDialogOpen(true);
  };

  const handleCloseMedicalDialog = () => {
    setMedicalDialogOpen(false);
  };

  // Function to handle changes in the edit dialog for medical supplies
  const handleEditChangeMedical = (index, newValue) => {
    // Create a copy of the medical supplies array
    const updatedMedicalSupplies = [...medicalSupplies];
    // Update only the specific field that has been changed
    updatedMedicalSupplies[index] = newValue;
    // Update the state with the new medical supplies array
    setMedicalSupplies(updatedMedicalSupplies);
  };

  // Function to handle submitting changes for medical supplies
  const handleEditSubmitMedical = () => {
    setMedicalSupplies(editedMedical);
    setEditModeAllMedical(false);
    setMedicalDialogOpen(false); // Close the medical supply edit dialog
    alert("Done");
  };

  const handleCancelEditMedical = () => {
    setMedicalDialogOpen(false); // Close the medical supply edit dialog
    setEditModeAllMedical(false); // Disable edit mode for medical supplies
  };

  const handleEditClickMedical = (index) => {
    setEditModeAllMedical((prevMode) => !prevMode);
    setSelectedMedicalIndex(index);
    setMedicalDialogOpen(true);
  };

  const [editModeAllTeaching, setEditModeAllTeaching] = useState(false);
  const [teachingDialogOpen, setTeachingDialogOpen] = useState(false);
  const [selectedTeachingIndex, setSelectedTeachingIndex] = useState(null);
  const [editedTeaching, setEditedTeaching] = useState(null);
  const [selectedTeaching, setSelectedTeaching] = useState(null);

  const handleViewTeachingDetails = (teachingItem) => {
    setSelectedTeaching(teachingItem);
    setTeachingDialogOpen(true);
  };

  const handleCloseTeachingDialog = () => {
    setTeachingDialogOpen(false);
  };

  const handleEditClickTeaching = (index) => {
    setEditModeAllTeaching((prevMode) => !prevMode);
    setSelectedTeachingIndex(index);
    setEditModeAllTeaching(true);
  };

  const handleEditChangeTeaching = (index, newValue) => {
    // Create a copy of the teaching supplies array
    const updatedTeachingSupplies = [...teaching];
    // Update only the specific field that has been changed
    updatedTeachingSupplies[index] = newValue;
    // Update the state with the new teaching supplies array
    setTeaching(updatedTeachingSupplies);
  };

  const handleEditSubmitTeaching = () => {
    handleCloseTeachingDialog();
  };

  const handleCancelEditTeaching = () => {
    handleCloseTeachingDialog();
  };

  const [editModeAllBloodDonation, setEditModeAllBloodDonation] =
    useState(false);
  const [bloodDonationDialogOpen, setBloodDonationDialogOpen] = useState(false);
  const [selectedBloodDonationIndex, setSelectedBloodDonationIndex] =
    useState(null);
  const [editedBloodDonation, setEditedBloodDonation] = useState(null);
  const [selectedBloodDonation, setSelectedBloodDonation] = useState(null);

  const handleViewBloodDonationDetails = (bloodDonationItem) => {
    setSelectedBloodDonation(bloodDonationItem);
    setBloodDonationDialogOpen(true);
  };

  const handleCloseBloodDonationDialog = () => {
    setBloodDonationDialogOpen(false);
  };

  const handleEditClickBloodDonation = (index) => {
    setEditModeAllBloodDonation((prevMode) => !prevMode);
    setSelectedBloodDonationIndex(index);
    setEditModeAllBloodDonation(true);
  };

  const handleEditChangeBloodDonation = (index, newValue) => {
    const updatedBloodDonation = [...bloodDonation];
    updatedBloodDonation[index] = newValue;
    setBloodDonation(updatedBloodDonation);
  };

  const handleEditSubmitBloodDonation = () => {
    handleCloseBloodDonationDialog();
  };

  const handleCancelEditBloodDonation = () => {
    handleCloseBloodDonationDialog();
  };

  const [editModeAllMedicalCases, setEditModeAllMedicalCases] = useState(false);
  const [medicalCasesDialogOpen, setMedicalCasesDialogOpen] = useState(false);
  const [selectedMedicalCaseIndex, setSelectedMedicalCaseIndex] =
    useState(null);
  const [editedMedicalCase, setEditedMedicalCase] = useState(null);
  const [selectedMedicalCase, setSelectedMedicalCase] = useState(null);

  const handleViewMedicalCaseDetails = (medicalCaseItem) => {
    setSelectedMedicalCase(medicalCaseItem);
    setMedicalCasesDialogOpen(true);
  };

  const handleCloseMedicalCasesDialog = () => {
    setMedicalCasesDialogOpen(false);
  };

  const handleEditClickMedicalCase = (index) => {
    setEditModeAllMedicalCases((prevMode) => !prevMode);
    setSelectedMedicalCaseIndex(index);
    setEditModeAllMedicalCases(true);
  };

  const handleEditChangeMedicalCase = (index, newValue) => {
    const updatedMedicalCases = [...medicalCases];
    updatedMedicalCases[index] = newValue;
    setMedicalCases(updatedMedicalCases);
  };

  const handleEditSubmitMedicalCase = () => {
    handleCloseMedicalCasesDialog();
  };

  const handleCancelEditMedicalCase = () => {
    handleCloseMedicalCasesDialog();
  };

  return (
    <div>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        marginTop={3}
        marginLeft={3}
      >
        My Posts
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
              <CardHeader title={"Clothes Post"} />
              <Divider sx={{ mb: 2 }} />
              <img
                src={Tshirt}
                alt="logo"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "20px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Post Details: <br />
                  Type: {item[0]} <br />
                  Quantity: {item[5]}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() => OpenhandleClothes("clothes", index)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "clothes")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}

          <Dialog
            open={editClothes}
            onClose={ClosehandleClothes}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>Clothes Details</DialogTitle>
            <br />
            <DialogContent>
              {selectedCategory === "clothes" && (
                <div>
                  <br />
                  <TextField
                    label="Type of Clothes"
                    value={clothes[selectedItemIndex][0]}
                    fullWidth
                    disabled={!editModeAll} // Set disabled based on editMode state
                    onChange={(event) =>
                      handleEditChange(0, event.target.value)
                    }
                  />
                  <br />
                  <br />
                  <TextField
                    label="Age"
                    value={clothes[selectedItemIndex][1]}
                    fullWidth
                    disabled={!editModeAll} // Set disabled based on editMode state
                    onChange={(event) =>
                      handleEditChange(1, event.target.value)
                    }
                  />
                  <br />
                  <br />
                  <TextField
                    label="Gender"
                    value={clothes[selectedItemIndex][2]}
                    fullWidth
                    disabled={!editModeAll} // Set disabled based on editMode state
                    onChange={(event) =>
                      handleEditChange(2, event.target.value)
                    }
                  />
                  <br />
                  <br />
                  <TextField
                    label="Season"
                    value={clothes[selectedItemIndex][3]}
                    fullWidth
                    disabled={!editModeAll} // Set disabled based on editMode state
                    onChange={(event) =>
                      handleEditChange(3, event.target.value)
                    }
                  />
                  <br />
                  <br />
                  <TextField
                    label="Material"
                    value={clothes[selectedItemIndex][4]}
                    fullWidth
                    disabled={!editModeAll} // Set disabled based on editMode state
                    onChange={(event) =>
                      handleEditChange(4, event.target.value)
                    }
                  />
                  <br />
                  <br />
                  <TextField
                    label="Quantity"
                    value={clothes[selectedItemIndex][5]}
                    fullWidth
                    disabled={!editModeAll}
                    onChange={(event) =>
                      handleEditChange(5, event.target.value)
                    } // Ensure this line is correctly updating the state
                  />
                </div>
              )}
            </DialogContent>
            <DialogActions>
              <IconButton
                aria-label="settings"
                onClick={() => handleEditClick("clothes", selectedItemIndex)}
              >
                <EditIcon />
              </IconButton>
              <Button onClick={handleEditSubmit}>Submit</Button>{" "}
              {/* Call handleEditSubmit on button click */}
              <Button onClick={ClosehandleClothes}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {food.map((item, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
              >
                <CardHeader title={"Food Post"} />
                <Divider sx={{ mb: 2 }} />
                <img
                  src={Food}
                  alt="Food"
                  style={{
                    width: "250px",
                    height: "250px",
                    marginRight: "10px",
                    marginLeft: "40px",
                  }}
                />
                <CardContent>
                  <Typography variant="body2" color="black">
                    Post Details: <br />
                    Name: {item[0]} <br />
                    Quantity: {item[1]}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Tooltip title="View Details">
                    <IconButton
                      aria-label="view"
                      onClick={() => handleViewDetails(item)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteCard(index, "food")}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </div>

          {/* Dialog for editing food details */}
          <Dialog
            open={foodDialogOpen}
            onClose={handleCloseDialog}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>Edit Food Details</DialogTitle>
            <DialogContent>
              <br />

              <TextField
                label="Name"
                value={food[0][0]}
                fullWidth
                disabled={!editModeAllFoods} // Disable the field if editModeAllFoods is false
                onChange={(e) =>
                  handleEditChangeFoods(0, [e.target.value, food[0][1]])
                }
              />
              <br />
              <br />
              <TextField
                label="Quantity"
                value={food[0][1]}
                fullWidth
                disabled={!editModeAllFoods} // Disable the field if editModeAllFoods is false
                onChange={(e) =>
                  handleEditChangeFoods(0, [food[0][0], e.target.value])
                }
              />
            </DialogContent>
            <DialogActions>
              <IconButton
                aria-label="settings"
                onClick={() => handleEditClick("food", selectedItemIndex)}
              >
                <EditIcon />
              </IconButton>
              <Button onClick={handleEditSubmitFoods}>Submit</Button>
              <Button onClick={handleCancelEditFoods}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {toys.map((item, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
            >
              <CardHeader title={"Toys Post"} />
              <Divider sx={{ mb: 2 }} />
              <img
                src={Lego}
                alt="Toy"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "40px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Post Details: <br />
                  Type: {item[0]} <br />
                  Quantity: {item[5]}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() => handleViewToyDetails(item)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "toys")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>

        <Dialog
          open={toyDialogOpen}
          onClose={handleCloseToyDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit Toys Details</DialogTitle>
          <DialogContent>
            {toys.map((toy, index) => (
              <div key={index}>
                <br />
                <TextField
                  label="Type of Toy"
                  value={toy[0]}
                  fullWidth
                  disabled={!editModeAllToys}
                  onChange={(e) =>
                    handleEditChangeToys(index, [
                      e.target.value,
                      toy[1],
                      toy[2],
                      toy[3],
                      toy[4],
                      toy[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Age Range"
                  value={toy[1]}
                  fullWidth
                  disabled={!editModeAllToys}
                  onChange={(e) =>
                    handleEditChangeToys(index, [
                      toy[0],
                      e.target.value,
                      toy[2],
                      toy[3],
                      toy[4],
                      toy[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Gender"
                  value={toy[2]}
                  fullWidth
                  disabled={!editModeAllToys}
                  onChange={(e) =>
                    handleEditChangeToys(index, [
                      toy[0],
                      toy[1],
                      e.target.value,
                      toy[3],
                      toy[4],
                      toy[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Category"
                  value={toy[3]}
                  fullWidth
                  disabled={!editModeAllToys}
                  onChange={(e) =>
                    handleEditChangeToys(index, [
                      toy[0],
                      toy[1],
                      toy[2],
                      e.target.value,
                      toy[4],
                      toy[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Quantity"
                  value={toy[5]}
                  fullWidth
                  disabled={!editModeAllToys}
                  onChange={(e) =>
                    handleEditChangeToys(index, [
                      toy[0],
                      toy[1],
                      toy[2],
                      toy[3],
                      toy[4],
                      e.target.value,
                    ])
                  }
                />
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <IconButton
              aria-label="settings"
              onClick={() => handleEditClick("toys", selectedItemIndex)}
            >
              <EditIcon />
            </IconButton>
            <Button onClick={handleEditSubmitToys}>Submit</Button>
            <Button onClick={handleCancelEditToys}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <div>
          {stationarySupplies.map((item, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
            >
              <CardHeader title={"Stationary Post"} />
              <Divider sx={{ mb: 2 }} />
              <img
                src={Stationary}
                alt="logo"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "40px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Post Details: <br />
                  Type: {item[0]} <br />
                  Quantity: {item[1]}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() => handleEditClickStationary(index)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "stationary")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>

        <Dialog
          open={stationaryDialogOpen}
          onClose={handleCloseStationaryDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit Stationary Supplies</DialogTitle>
          <DialogContent>
            {stationarySupplies.map((item, index) => (
              <div key={index}>
                <br />
                <TextField
                  label="Type"
                  value={item[0]}
                  fullWidth
                  disabled={editModeAllStationary}
                  onChange={(e) =>
                    handleEditChangeStationary(index, 0, e.target.value)
                  }
                />
                <br />
                <br />
                <TextField
                  label="Quantity"
                  value={item[1]}
                  fullWidth
                  disabled={editModeAllStationary}
                  onChange={(e) =>
                    handleEditChangeStationary(index, 1, e.target.value)
                  }
                />
                <br />
                <br />
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <IconButton
              aria-label="settings"
              onClick={() => handleEditClick("stationary", selectedItemIndex)}
            >
              <EditIcon />
            </IconButton>
            <Button onClick={handleEditSubmitStationary}>Submit</Button>
            <Button onClick={handleCancelEditStationary}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <div>
          {bookSupplies.map((book, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
            >
              <CardHeader title="Book Post" />
              <Divider sx={{ mb: 2 }} />
              <img
                src={book[5]}
                alt="Book"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "40px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Post Details: <br />
                  Name: {book[0]} <br />
                  Author: {book[1]} <br />
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() => handleEditClickBook(index)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "bookSupplies")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>

        <Dialog
          open={bookDialogOpen}
          onClose={handleCloseBookDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit Book Details</DialogTitle>
          <DialogContent>
            {bookSupplies.map((book, index) => (
              <div key={index}>
                <br />
                <TextField
                  label="Name"
                  value={book[0]}
                  fullWidth
                  disabled={editModeAllBooks}
                  onChange={(e) =>
                    handleEditChangeBook(index, [
                      e.target.value,
                      book[1],
                      book[2],
                      book[3],
                      book[4],
                      book[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Author"
                  value={book[1]}
                  fullWidth
                  disabled={editModeAllBooks}
                  onChange={(e) =>
                    handleEditChangeBook(index, [
                      book[0],
                      e.target.value,
                      book[2],
                      book[3],
                      book[4],
                      book[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Language"
                  value={book[2]}
                  fullWidth
                  disabled={editModeAllBooks}
                  onChange={(e) =>
                    handleEditChangeBook(index, [
                      book[0],
                      book[1],
                      e.target.value,
                      book[3],
                      book[4],
                      book[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Edition"
                  value={book[3]}
                  fullWidth
                  disabled={editModeAllBooks}
                  onChange={(e) =>
                    handleEditChangeBook(index, [
                      book[0],
                      book[1],
                      book[2],
                      e.target.value,
                      book[4],
                      book[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Summary"
                  value={book[4]}
                  fullWidth
                  disabled={editModeAllBooks}
                  onChange={(e) =>
                    handleEditChangeBook(index, [
                      book[0],
                      book[1],
                      book[2],
                      book[3],
                      e.target.value,
                      book[5],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Image Link"
                  value={book[5]}
                  fullWidth
                  disabled={editModeAllBooks}
                  onChange={(e) =>
                    handleEditChangeBook(index, [
                      book[0],
                      book[1],
                      book[2],
                      book[3],
                      book[4],
                      e.target.value,
                    ])
                  }
                />
                <br />
                <br />
              </div>
            ))}
          </DialogContent>

          <DialogActions>
            <IconButton
              aria-label="settings"
              onClick={() => handleEditClickBook(selectedBookIndex)}
            >
              <EditIcon />
            </IconButton>
            <Button onClick={handleEditSubmitBook}>Submit</Button>
            <Button onClick={handleCancelEditBook}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <div>
          {medicalSupplies.map((medicalItem, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
            >
              <CardHeader title="Medical Supplies Post" />
              <Divider sx={{ mb: 2 }} />
              <img
                src={medicalItem[2]}
                alt="Medical Supply"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "40px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Post Details: <br />
                  Type: {medicalItem[0]} <br />
                  Quantity: {medicalItem[3]} <br />
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() => handleViewMedicalDetails(index)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "medicalSupplies")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>

        <Dialog
          open={medicalDialogOpen}
          onClose={handleCloseMedicalDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit Medical Supply Details</DialogTitle>
          <DialogContent>
            {medicalSupplies.map((medicalItem, index) => (
              <div key={index}>
                <br />
                <TextField
                  label="Type"
                  value={medicalItem[0]}
                  fullWidth
                  disabled={!editModeAllMedical}
                  onChange={(e) =>
                    handleEditChangeMedical(index, [
                      e.target.value,
                      medicalItem[1],
                      medicalItem[2],
                      medicalItem[3],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Use"
                  value={medicalItem[1]}
                  fullWidth
                  disabled={!editModeAllMedical}
                  onChange={(e) =>
                    handleEditChangeMedical(index, [
                      medicalItem[0],
                      e.target.value,
                      medicalItem[2],
                      medicalItem[3],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Image"
                  value={medicalItem[2]}
                  fullWidth
                  disabled={!editModeAllMedical}
                  onChange={(e) =>
                    handleEditChangeMedical(index, [
                      medicalItem[0],
                      medicalItem[1],
                      e.target.value,
                      medicalItem[3],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Quantity"
                  value={medicalItem[3]}
                  fullWidth
                  disabled={!editModeAllMedical}
                  onChange={(e) =>
                    handleEditChangeMedical(index, [
                      medicalItem[0],
                      medicalItem[1],
                      medicalItem[2],
                      e.target.value,
                    ])
                  }
                />
                <br />
                <br />
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <IconButton
              aria-label="settings"
              onClick={() => handleEditClickMedical(selectedMedicalIndex)}
            >
              <EditIcon />
            </IconButton>
            <Button onClick={handleEditSubmitMedical}>Submit</Button>
            <Button onClick={handleCancelEditMedical}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <div>
          {teaching.map((teachingItem, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
            >
              <CardHeader title="Teaching Post" />
              <Divider sx={{ mb: 2 }} />
              <img
                src={Teaching}
                alt="Medical Supply"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "40px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Number of Students: {teachingItem[0]} <br />
                  Subject: {teachingItem[3]}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() => handleViewTeachingDetails(teachingItem)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>

                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "teaching")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>

        <Dialog
          open={teachingDialogOpen}
          onClose={handleCloseTeachingDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit Teaching Details</DialogTitle>
          <DialogContent>
            {teaching.map((teachingItem, index) => (
              <div>
                <br />
                <TextField
                  label="Number of Students"
                  value={teachingItem[0]}
                  fullWidth
                  disabled={!editModeAllTeaching}
                  onChange={(e) =>
                    handleEditChangeTeaching(index, [
                      e.target.value,
                      teachingItem[1],
                      teachingItem[2],
                      teachingItem[3],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Address"
                  value={teachingItem[1]}
                  fullWidth
                  disabled={!editModeAllTeaching}
                  onChange={(e) =>
                    handleEditChangeTeaching(index, [
                      teachingItem[0],
                      e.target.value,
                      teachingItem[2],
                      teachingItem[3],
                    ])
                  }
                />
                <br />
                <br />
                <TextField
                  label="Subject"
                  value={teachingItem[3]}
                  fullWidth
                  disabled={!editModeAllTeaching}
                  onChange={(e) =>
                    handleEditChangeTeaching(index, [
                      teachingItem[0],
                      teachingItem[1],
                      teachingItem[2],
                      e.target.value,
                    ])
                  }
                />
                <br />
                <br />
                <Typography>
                  Location:{" "}
                  <a
                    href={teachingItem[2]}
                    target="_blank"
                    rel="nooopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                </Typography>
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <IconButton
              aria-label="settings"
              onClick={() => handleEditClick("teaching", selectedTeachingIndex)}
            >
              <EditIcon />
            </IconButton>
            <Button onClick={handleEditSubmitTeaching}>Submit</Button>
            <Button onClick={handleCancelEditTeaching}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <div>
          {bloodDonation.map((bloodDonationItem, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
            >
              <CardHeader title="Blood Donation Post" />
              <Divider sx={{ mb: 2 }} />
              <img
                src={BloodDonation}
                alt="Medical Supply"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "40px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Patient: {bloodDonationItem[0]} <br />
                  Blood Type: {bloodDonationItem[1]} <br />
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() =>
                      handleViewBloodDonationDetails(bloodDonationItem)
                    }
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "bloodDonation")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>

        <Dialog
          open={bloodDonationDialogOpen}
          onClose={handleCloseBloodDonationDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit Blood Donation Details</DialogTitle>
          <DialogContent>
            {bloodDonation.map((bloodDonationItem, index) => (
              <div key={index}>
                <br />
                <TextField
                  label="Patient Name"
                  value={bloodDonationItem[0]}
                  fullWidth
                  disabled={!editModeAllBloodDonation}
                  onChange={(e) =>
                    handleEditChangeBloodDonation(index, [
                      e.target.value,
                      bloodDonationItem[1],
                      bloodDonationItem[2],
                      bloodDonationItem[3],
                      bloodDonationItem[4],
                      bloodDonationItem[5],
                    ])
                  }
                />
                <TextField
                  label="Blood Type"
                  value={bloodDonationItem[1]}
                  fullWidth
                  disabled={!editModeAllBloodDonation}
                  onChange={(e) =>
                    handleEditChangeBloodDonation(index, [
                      bloodDonationItem[0],
                      e.target.value,
                      bloodDonationItem[2],
                      bloodDonationItem[3],
                      bloodDonationItem[4],
                      bloodDonationItem[5],
                    ])
                  }
                />
                <TextField
                  label="Hospital Name"
                  value={bloodDonationItem[2]}
                  fullWidth
                  disabled={!editModeAllBloodDonation}
                  onChange={(e) =>
                    handleEditChangeBloodDonation(index, [
                      bloodDonationItem[0],
                      bloodDonationItem[1],
                      e.target.value,
                      bloodDonationItem[3],
                      bloodDonationItem[4],
                      bloodDonationItem[5],
                    ])
                  }
                />
                <TextField
                  label="Hospital Area"
                  value={bloodDonationItem[3]}
                  fullWidth
                  disabled={!editModeAllBloodDonation}
                  onChange={(e) =>
                    handleEditChangeBloodDonation(index, [
                      bloodDonationItem[0],
                      bloodDonationItem[1],
                      bloodDonationItem[2],
                      e.target.value,
                      bloodDonationItem[4],
                      bloodDonationItem[5],
                    ])
                  }
                />
                <TextField
                  label="Governorate"
                  value={bloodDonationItem[4]}
                  fullWidth
                  disabled={!editModeAllBloodDonation}
                  onChange={(e) =>
                    handleEditChangeBloodDonation(index, [
                      bloodDonationItem[0],
                      bloodDonationItem[1],
                      bloodDonationItem[2],
                      bloodDonationItem[3],
                      e.target.value,
                      bloodDonationItem[5],
                    ])
                  }
                />
                <TextField
                  label="Address"
                  value={bloodDonationItem[5]}
                  fullWidth
                  disabled={!editModeAllBloodDonation}
                  onChange={(e) =>
                    handleEditChangeBloodDonation(index, [
                      bloodDonationItem[0],
                      bloodDonationItem[1],
                      bloodDonationItem[2],
                      bloodDonationItem[3],
                      bloodDonationItem[4],
                      e.target.value,
                    ])
                  }
                />
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <IconButton
              aria-label="settings"
              onClick={() =>
                handleEditClick("blooddonation", selectedBloodDonation)
              }
            >
              <EditIcon />
            </IconButton>
            <Button onClick={handleEditSubmitBloodDonation}>Submit</Button>
            <Button onClick={handleCancelEditBloodDonation}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <div>
          {medicalCases.map((medicalCaseItem, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}
            >
              <CardHeader title="Medical Case" />
              <Divider sx={{ mb: 2 }} />
              <img
                src={MedicalCases}
                alt="Medical Supply"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "10px",
                  marginLeft: "40px",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="black">
                  Patient: {medicalCaseItem[0]} <br />
                  Age: {medicalCaseItem[1]} <br />
                  {/* Add more details if needed */}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="View Details">
                  <IconButton
                    aria-label="view"
                    onClick={() =>
                      handleViewMedicalCaseDetails(medicalCaseItem)
                    }
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteCard(index, "medicalcases")}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
        <Dialog
          open={medicalCasesDialogOpen}
          onClose={handleCloseMedicalCasesDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit Medical Case Details</DialogTitle>
          <DialogContent>
            {medicalCases.map((medicalCaseItem, index) => (
              <div key={index}>
                <br />
                <TextField
                  label="Patient Name"
                  value={medicalCaseItem[0]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      e.target.value,
                      medicalCaseItem[1],
                      medicalCaseItem[2],
                      medicalCaseItem[3],
                      medicalCaseItem[4],
                      medicalCaseItem[5],
                      medicalCaseItem[6],
                      medicalCaseItem[7],
                      medicalCaseItem[8],
                    ])
                  }
                />
                <TextField
                  label="Age"
                  value={medicalCaseItem[1]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      medicalCaseItem[0],
                      e.target.value,
                      medicalCaseItem[2],
                      medicalCaseItem[3],
                      medicalCaseItem[4],
                      medicalCaseItem[5],
                      medicalCaseItem[6],
                      medicalCaseItem[7],
                      medicalCaseItem[8],
                    ])
                  }
                />
                <TextField
                  label="Gender"
                  value={medicalCaseItem[2]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      medicalCaseItem[0],
                      medicalCaseItem[1],
                      e.target.value,
                      medicalCaseItem[3],
                      medicalCaseItem[4],
                      medicalCaseItem[5],
                      medicalCaseItem[6],
                      medicalCaseItem[7],
                      medicalCaseItem[8],
                    ])
                  }
                />
                <TextField
                  label="Weight"
                  value={medicalCaseItem[3]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      medicalCaseItem[0],
                      medicalCaseItem[1],
                      medicalCaseItem[2],
                      e.target.value,
                      medicalCaseItem[4],
                      medicalCaseItem[5],
                      medicalCaseItem[6],
                      medicalCaseItem[7],
                      medicalCaseItem[8],
                    ])
                  }
                />
                <TextField
                  label="Address"
                  value={medicalCaseItem[5]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      medicalCaseItem[0],
                      medicalCaseItem[1],
                      medicalCaseItem[2],
                      medicalCaseItem[3],
                      medicalCaseItem[4],
                      e.target.value,
                      medicalCaseItem[6],
                      medicalCaseItem[7],
                      medicalCaseItem[8],
                    ])
                  }
                />
                <TextField
                  label="Hospital Name"
                  value={medicalCaseItem[6]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      medicalCaseItem[0],
                      medicalCaseItem[1],
                      medicalCaseItem[2],
                      medicalCaseItem[3],
                      medicalCaseItem[4],
                      medicalCaseItem[5],
                      e.target.value,
                      medicalCaseItem[7],
                      medicalCaseItem[8],
                    ])
                  }
                />
                <TextField
                  label="Department"
                  value={medicalCaseItem[7]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      medicalCaseItem[0],
                      medicalCaseItem[1],
                      medicalCaseItem[2],
                      medicalCaseItem[3],
                      medicalCaseItem[4],
                      medicalCaseItem[5],
                      medicalCaseItem[6],
                      e.target.value,
                      medicalCaseItem[8],
                    ])
                  }
                />
                <TextField
                  label="Notes"
                  value={medicalCaseItem[8]}
                  fullWidth
                  disabled={!editModeAllMedicalCases}
                  onChange={(e) =>
                    handleEditChangeMedicalCase(0, [
                      medicalCaseItem[0],
                      medicalCaseItem[1],
                      medicalCaseItem[2],
                      medicalCaseItem[3],
                      medicalCaseItem[4],
                      medicalCaseItem[5],
                      medicalCaseItem[6],
                      medicalCaseItem[7],
                      e.target.value,
                    ])
                  }
                />
                <Typography>
                  Location:{" "}
                  <a
                    href={medicalCaseItem[4]}
                    target="_blank"
                    rel="nooopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                </Typography>
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <IconButton
              aria-label="settings"
              onClick={() =>
                handleEditClick("medicalcases", selectedMedicalCaseIndex)
              }
            >
              <EditIcon />
            </IconButton>
            <Button onClick={handleEditSubmitMedicalCase}>Submit</Button>
            <Button onClick={handleCancelEditMedicalCase}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default OrgPosts;
