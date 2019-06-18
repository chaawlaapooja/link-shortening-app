import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-awesome-modal';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isOpen: false,
      error: ''
    };
  }
  onSubmit(e) {
    const { url } = this.state;

    e.preventDefault();

    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        this.close_modal();
      } else {
        this.setState({ error: err.reason });
      }
    });
  }
  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }
  
  close_modal() {
        this.setState({
      isOpen: false,
      url: '',
      error: ''
    });
    }
  render() {
    return (
      <div>
        <button className="button" onClick={() => {this.setState({isOpen: true}); this.refs.url.focus()}}>+ Add Link</button>
        <Modal visible={this.state.isOpen} width="500" effect="fadeInUp" onClickAway={() => this.close_modal()} >
                    <div className="modal-content">
                    <div className="modal-header mh" style={{color: "white"}}>
                    <button type="button" className="close" onClick={() => this.close_modal()}>&times;</button>
                    </div>
                    <div className="modal-body">
                      <h2>Add Link</h2>
                        {this.state.error ? <p style={{color:"red"}}>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)}>
              <input
                type="text"
                placeholder="URL"
                ref="url"
                value={this.state.url} style={{width:95+"%"}}
                onChange={this.onChange.bind(this)}/><br/>
              <button className="button">Add Link</button>
              </form>
                    </div>
                    <div className="modal-footer mh" >
                      <button type="button" className="btn btn-default" style={{padding:5+"px"}} onClick={() => this.close_modal()}>CLOSE</button>
                    </div>
                    </div>
          </Modal>
        
      </div>
    );
  }
}
