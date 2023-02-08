import { Tasks } from '../constants/tasks.enum'
import ListContainer from './attendee-list-container'

interface PropsInterface {
  selectedTask: Tasks
}

export default function SelectedComponent(props: PropsInterface) {
  const { selectedTask } = props
  return <ListContainer selectedTask={selectedTask} />
}
