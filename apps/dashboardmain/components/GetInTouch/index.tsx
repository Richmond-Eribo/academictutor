import GetInTouchForm from './GetInTouchForm'

type Props = {
  messageInput: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  GetInTouch(e: React.FormEvent<HTMLFormElement>): void
  loadingState: boolean
}
// React.Dispatch<React.SetStateAction<string>>
const GetInTouch = ({
  messageInput,
  setMessage,
  GetInTouch,
  loadingState,
}: Props) => {
  return (
    <>
      <GetInTouchForm
        message={messageInput}
        setMessage={setMessage}
        submit={GetInTouch}
        dashboard
        loadingState={loadingState}
      />
    </>
  )
}

export default GetInTouch
