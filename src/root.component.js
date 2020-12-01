import React, {Fragment} from "react";
import './index.css'
import {Button} from '@mt/styleguide'
import App from './app.js'
export default function Root(props) {
  return (
    <Fragment>
      <App />
      <Button
      onClick={()=>{alert("hey")}}
      >Hello</Button>
    </Fragment>
  )
}
