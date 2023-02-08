import Styles from '../Styles/components/list-container.module.scss'
import useApiGet from '../helpers/hooks/use-api-get'
import ListElement from './attendee-list-element'
import { IApiError, IProgramList, IResidentList } from '../interfaces'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorComponent from './error-component'
import { apiEndPoints } from '../constants'

export default function ListContainer() {
  const [programData, programDataError, programApiloading] = useApiGet<
    IProgramList
  >(apiEndPoints.WELBI_PROGRAM_LIST)

  const [residentData, residentApiError, residentApiLoading] = useApiGet<
    IResidentList
  >(apiEndPoints.WELBI_RESIDENT_LIST)

  if (programApiloading || residentApiLoading) {
    return <CircularProgress className="loaderClass" />
  }
  if (programDataError || residentApiError) {
    return (
      <ErrorComponent
        error={
          programDataError ? programDataError : (residentApiError as IApiError)
        }
      />
    )
  }

  return (
    <div className={Styles.listContainer}>
      {programData.map((listItem) => (
        <ListElement
          key={listItem.id}
          residentList={residentData}
          name={listItem.name}
          location={listItem.location}
          attendance={listItem.attendance}
        />
      ))}
    </div>
  )
}
