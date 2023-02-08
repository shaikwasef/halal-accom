import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IResident, IResidentList, IResidentTable } from '../interfaces'
import Styles from '../Styles/components/list-element.module.scss'
import TableComponent from './table-component'

interface PropsInterface {
  name: string
  attendance: Array<IResident>
  residentList: Array<IResidentList>
  location: string
}

export default function ListElement(props: PropsInterface) {
  const { name, attendance, residentList, location } = props

  const residentTableContent = attendance.reduce(
    (acc: Array<IResidentTable>, item) => {
      const residentItem = residentList.filter(
        (residentItem) => item.residentId === residentItem.id,
      )[0]
      const residentObj = {
        name: residentItem.name,
        status: residentItem.status,
      }
      return [...acc, residentObj]
    },
    [],
  )

  return (
    <Card className={Styles.listElement}>
      <CardContent>
        <Typography variant="h5">Name : {name}</Typography>
        <div className={Styles.listInfo}>
          <Typography>Location : {location ? location : '-'}</Typography>
          <Typography>Attendance : {attendance.length}</Typography>
        </div>
        <TableComponent rows={residentTableContent} />
      </CardContent>
    </Card>
  )
}
