import { Box, Modal, Paper, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTeam } from "../../store/actions/team";
import { useForm } from "react-hook-form";
import ContainedButton from '../ContainedButton';
const CreateModal = ({ openCreateModal, handleCloseCreateModal }) => {
  
  const theme = useTheme();
  const downThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const downThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: downThanLg ? (downThanMd ? "65vw" : "50vw") : "35vw",
    p: 4,
    borderRadius: "10px"
  };

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    resetField,
  } = useForm();

  const handleResetFields = ()=>{
    resetField("full_name");
    resetField("no_of_players");
    resetField("city");
    resetField("division");

  }
  const onSubmit = (data) => {
    dispatch(createTeam(data));
    handleCloseCreateModal();
    handleResetFields();
  }
  const onClose = ()=>{
    handleCloseCreateModal();
    handleResetFields();
  }

  return (
    <Modal
      open={openCreateModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <Box>
              <TextField id="standard-basic" label="Full Name" variant="standard" sx={{ width: '100%' }}  {...register('full_name', { required: true })} required />
            </Box> <Box>
              <TextField id="standard-basic" label="Number of Players" variant="standard" sx={{ width: '100%' }} type="number" {...register('no_of_players', { required: true })} required />
            </Box>
            <Box>
              <TextField id="standard-basic" label="City" variant="standard" sx={{ width: '100%' }}  {...register('city', { required: true })} required />
            </Box>
            <Box>
              <TextField id="standard-basic" label="Division" variant="standard" sx={{ width: '100%' }}   {...register('division', { required: true })} required />
            </Box>
            <Box sx={{ width: "100%", pt: "20px" }}>
              <ContainedButton text="Create" />
            </Box>

          </Stack>
        </form>
      </Paper>
    </Modal>
  )
}
export default CreateModal;