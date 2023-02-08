import Styles from '../Styles/components/list-container.module.scss'
import useApiGet from '../helpers/hooks/use-api-get'
import ListElement from './attendee-list-element'
import { IProgramList } from '../interfaces'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorComponent from './error-component'
import { apiEndPoints } from '../constants'

export default function ListContainer() {
  const [listData, error, loading] = useApiGet<IProgramList>(
    apiEndPoints.WELBI_PROGRAM_LIST,
  )

  if (loading) {
    return <CircularProgress className="loaderClass" />
  }
  if (error) {
    return <ErrorComponent error={error} />
  }

  if (loading) {
    return <CircularProgress className={Styles.loaderClass} />
  }
  if (error) {
    return <ErrorComponent error={error} />
  }
  return (
    <div className={Styles.listContainer}>
      {listData.map((listItem) => (
        <ListElement
          key={listItem.id}
          name={listItem.name}
          location={listItem.location}
          attendance={listItem.attendance}
        />
      ))}
    </div>
  )
}
