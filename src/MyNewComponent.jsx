import Secondcomponent from "./Secondcomponent"

function MyNewComponent({name}) {
    return (
      <>
      <h2>My new component developed {name} by me</h2>
      <p>My new paragraph</p>
      <Secondcomponent name='Neil'></Secondcomponent><Secondcomponent/>
      </>
    )
    }

    export default MyNewComponent;