import EditUserCell from 'src/components/User/EditUserCell'

type UserPageProps = {
  id: Int
}

const EditUserPage = ({ id }: UserPageProps) => {
  return <EditUserCell id={id} />
}

export default EditUserPage
