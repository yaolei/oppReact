import React, {Fragment} from 'react';
import { Radio, Button } from 'antd';


export default  class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }
    }
    
      toggleDisabled(){
        this.setState({
          disabled: !this.state.disabled,
        });
      };

    render(){
        return(
            <Fragment>
              <div className="testDiv">
                <div className="colorName">Test</div>
              </div>
              
                <Radio defaultChecked={false} disabled={this.state.disabled}>
                    Disabled
                    </Radio>
                    <Radio defaultChecked disabled={this.state.disabled}>
                    Disabled
            </Radio>
                    <br />
                    <Button type="primary" onClick={this.toggleDisabled.bind(this)} style={{ marginTop: 16 }}>
                    Toggle disabled
                    </Button>
            </Fragment>
        )
    }
}