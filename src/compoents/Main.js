import React, { useState } from "react";
import { Grid, Button, Input } from "@mui/material";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Main = () => {
  const [allDataSaparated, setAllDataSaparated] = useState({
    first: [],
    second: [],
    third: [],
    fourth: [],
  });

  const [formData, setFormData] = useState({});
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [firstSearchName, setFirstSearchName] = useState("");
  const [secondSearchName, setSecondSearchName] = useState("");
  const [thirdSearchName, setThirdSearchName] = useState("");
  const [fourthSearchName, setFourthSearchName] = useState("");

  const cardFunc = (item) => {
    return (
      <Paper
        container
        flexDirection={"column"}
        justifyContent={"start"}
        sx={{
          border: "2px solid green",
          borderRadius: "12px",
          m: 1,
          p: 1,
        }}
        xs={10}
      >
        <Grid item>
          <Button
            onClick={() => {
              setFormData(item);
              setAddFormOpen(true);

              if (item?.age < 19) {
                const a = allDataSaparated.first.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, first: a });
              }
              if (item?.age > 18 && item?.age < 26) {
                const a = allDataSaparated.second.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, second: a });
              }
              if (item?.age > 25 && item?.age < 46) {
                const a = allDataSaparated.third.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, third: a });
              }
              if (item?.age > 45) {
                const a = allDataSaparated.fourth.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, fourth: a });
              }
            }}
          >
            edit
          </Button>
          <Button
            onClick={() => {
              if (item?.age < 19) {
                const a = allDataSaparated.first.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, first: a });
              }
              if (item?.age > 18 && item?.age < 26) {
                const a = allDataSaparated.second.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, second: a });
              }
              if (item?.age > 25 && item?.age < 46) {
                const a = allDataSaparated.third.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, third: a });
              }
              if (item?.age > 45) {
                const a = allDataSaparated.fourth.filter((obj) => {
                  return item !== obj;
                });
                setAllDataSaparated({ ...allDataSaparated, fourth: a });
              }
            }}
          >
            Delete
          </Button>
        </Grid>

        <Grid item>Name : {item?.name}</Grid>
        <Grid item>Email : {item?.email}</Grid>
        <Grid item>Phone : {item?.phone}</Grid>
        <Grid item>Age : {item?.age}</Grid>
      </Paper>
    );
  };

  return (
    <div style={{ margin: "12px" }}>
      <Grid container justifyContent={"right"}>
        <Grid item xs={12} sx={{ m: 5 }}>
          <Button
            variant="outlined"
            onClick={() => {
              setAddFormOpen(true);
            }}
          >
            Add
          </Button>
        </Grid>
        <Grid item></Grid>
      </Grid>
      {addFormOpen && (
        <Grid container spacing={2}>
          <Grid item>
            <Input
              placeholder="Enter Name"
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              value={formData?.name}
            />
          </Grid>
          <Grid item>
            <Input
              placeholder="Enter email"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              value={formData?.email}
            />
          </Grid>
          <Grid item>
            <Input
              placeholder="Enter Phone number"
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              value={formData?.phone}
            />
          </Grid>
          <Grid item>
            <Input
              placeholder="Enter Age"
              onChange={(e) => {
                setFormData({ ...formData, age: e.target.value });
              }}
              value={formData?.age}
            />
          </Grid>

          <Grid item>
            <Button
              onClick={() => {
                setAddFormOpen(false);
              }}
              variant="outlined"
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                if (formData?.age < 19) {
                  allDataSaparated.first.push(formData);
                }
                if (formData?.age > 18 && formData?.age < 26) {
                  allDataSaparated.second.push(formData);
                }
                if (formData?.age > 25 && formData?.age < 46) {
                  allDataSaparated.third.push(formData);
                }
                if (formData?.age > 45) {
                  allDataSaparated.fourth.push(formData);
                }
                setAllDataSaparated({ ...allDataSaparated });

                setFormData({});
                setAddFormOpen(false);
              }}
              variant="contained"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Age from 1 - 18 years</TableCell>
                <TableCell>Age from 19 - 25 years</TableCell>
                <TableCell>Age from 26 - 45 years</TableCell>
                <TableCell>Age from above 45 years</TableCell>
              </TableRow>
            </TableHead>

            <TableCell align="left">
              {allDataSaparated?.first.length > 0 && (
                <Input
                  sx={{ m: 1, p: 1 }}
                  placeholder="search name"
                  value={firstSearchName}
                  onChange={(e) => {
                    setFirstSearchName(e.target.value);
                  }}
                />
              )}
              {allDataSaparated?.first
                .filter((item) => item.name.startsWith(firstSearchName))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => {
                  if (item.age < 19) {
                    return cardFunc(item);
                  } else return null;
                })}
            </TableCell>
            <TableCell align="left">
              {allDataSaparated?.second.length > 0 && (
                <Input
                  sx={{ m: 1, p: 1 }}
                  placeholder="search name"
                  value={secondSearchName}
                  onChange={(e) => {
                    setSecondSearchName(e.target.value);
                  }}
                />
              )}
              {allDataSaparated?.second
                .filter((item) => item.name.startsWith(secondSearchName))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => {
                  if (item.age > 18 && item.age < 26) {
                    return cardFunc(item);
                  } else return null;
                })}
            </TableCell>
            <TableCell align="left">
              {allDataSaparated?.third.length > 0 && (
                <Input
                  sx={{ m: 1, p: 1 }}
                  placeholder="search name"
                  value={thirdSearchName}
                  onChange={(e) => {
                    setThirdSearchName(e.target.value);
                  }}
                />
              )}
              {allDataSaparated?.third
                .filter((item) => item.name.startsWith(thirdSearchName))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => {
                  if (item.age > 25 && item.age < 46) {
                    return cardFunc(item);
                  } else return null;
                })}
            </TableCell>
            <TableCell align="left">
              {" "}
              {allDataSaparated?.fourth.length > 0 && (
                <Input
                  sx={{ m: 1, p: 1 }}
                  placeholder="search name"
                  value={fourthSearchName}
                  onChange={(e) => {
                    setFourthSearchName(e.target.value);
                  }}
                />
              )}
              {allDataSaparated?.fourth
                .filter((item) => item.name.startsWith(fourthSearchName))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => {
                  if (item.age > 45) {
                    return cardFunc(item);
                  } else return null;
                })}
            </TableCell>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default Main;
