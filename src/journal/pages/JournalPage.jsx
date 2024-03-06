import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
//import { NoteView } from "../views"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>fdsfgdfgdfgdgg gdf gdf gdf gdf gdf gd gd fgd fg dfgd f</Typography> */}

      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton size="large" sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
        <AddOutlined sx={{fontSize: 30}} />
      </IconButton>
    </JournalLayout>
  )
}