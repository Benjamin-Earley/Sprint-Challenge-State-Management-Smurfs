import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, createSmurf, deleteSmurf } from "./Actions";
import SmurfsList from "./SmurfsList";
import AddForm from "./Form";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <h2>
        Welcome to Smurf Village!
      </h2>
      {props.smurfArray.map(item => (
        <SmurfsList item={item} key={item.id} deleteSmurf={props.deleteSmurf} />
      ))}
      <AddForm />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfArray: state.smurfArray,
    isLoading: state.isLoading,
    error: state.error
  };
}

const mapDispatchToProps = {
  fetchSmurfs,
  createSmurf,
  deleteSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);