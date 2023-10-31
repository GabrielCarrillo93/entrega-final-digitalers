import './Spinner.css'

const Spinner = () => {
  return (
    <div id="spinner">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Spinner