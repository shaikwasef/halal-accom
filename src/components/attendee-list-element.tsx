import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IResident } from '../interfaces'
import Styles from '../Styles/components/list-element.module.scss'

interface PropsInterface {
  name: string
  attendance: Array<IResident>
  location?: string
}

export default function ListElement(props: PropsInterface) {
  const { name, attendance, location } = props
  return (
    <Card className={Styles.listElement}>
      <CardContent>
        <Typography variant="h5">Name : {name}</Typography>
        <div className={Styles.listInfo}>
          <Typography>Location : {location ? location : '-'}</Typography>
          <Typography>Attendance : {attendance.length}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}
