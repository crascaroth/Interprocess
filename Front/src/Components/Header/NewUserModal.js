import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import InputMask from "react-input-mask";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
import Context from "../../GlobalState/Context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const NewUserModal = () => {
  const { states, setters, requests } = useContext(Context);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>  setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Novo Usuário
          </Typography>

          <TextField
            id="outlined-basic"
            label="Nome"
            name="name"
            variant="outlined"
            required
            onChange={(e) =>
              setters.setUserInfo({ ...states.userInfo, name: e.target.value })
            }
            value={states.userInfo.name}
          />
          <TextField
            id="outlined-basic"
            label="Data de Nascimento"
            name="birthDate"
            variant="outlined"
            required
            onChange={(e) =>
              setters.setUserInfo({ ...states.userInfo, birthDate: e.target.value })
            }
            value={states.userInfo.birthDate}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            name="CPF"
            required
            onChange={(e) =>
              setters.setUserInfo({ ...states.userInfo, CPF: e.target.value })
            }
            value={states.userInfo.cpf}
          />
          <TextField
            id="outlined-basic"
            label="Sexo"
            variant="outlined"
            name="sex"
            required
            onChange={(e) =>
              setters.setUserInfo({ ...states.userInfo, sex: e.target.value })
            }
            value={states.userInfo.sex}
          />
          <TextField
            id="outlined-basic"
            label="Endereço"
            name="address"
            variant="outlined"
            onChange={(e) =>
              setters.setUserInfo({ ...states.userInfo, address: e.target.value })
            }
            value={states.userInfo.address}
          />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Status *
          </Typography>
          <Checkbox {...label} name="status" onChange={(e) =>
              setters.setUserInfo({ ...states.userInfo, status: e.target.value })
            }
            value={states.userInfo.status} />
            <Button onClick={requests.saveUser}>clck</Button>
        </Box>
      </Modal>
      
    </div>
  );
};

export default NewUserModal;
