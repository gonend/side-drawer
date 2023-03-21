import React, { useCallback, useState } from "react";
import Select from "react-select";
import "./Participants.css";
import { BsWhatsapp, BsTrash } from "react-icons/bs";
import { MockParticipants } from "../../sources/Data";

const Participants = () => {
  const [selectedItemId, setSelectedItemId] = useState(null); // recive id of selected participate to add to list
  const [participants, setParticipants] = useState(MockParticipants); // all the participates fetched from data

  /// handles participate selection (add to list)
  const handleSelect = useCallback((selectedOption) => {
    setParticipants((paricipates) =>
      paricipates.map((item) =>
        item.id === selectedOption
          ? { ...item, selected: !item.selected, checked: false }
          : item
      )
    );
    console.log(participants);
  }, []);

  const options = participants.map((v, i) => ({
    value: v.id,
    selected: v.selected,
    label: (
      <div className="name">
        <img className="face" src={v.img} alt="" />
        <span>
          <b>{v.label}</b>
        </span>
      </div>
    ),
  }));
  // remove par from list when press trash icone. => adds to select list
  const handleRemovale = useCallback((id) => {
    console.log(participants[id]);
    setParticipants((paricipates) =>
      paricipates.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }, []);

  // handles each participate check button
  const handleCheck = useCallback((id) => {
    setParticipants((paricipates) =>
      paricipates.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);

  return (
    <div className="participants-div">
      <span className="search_container">
        <b className="part">Participants</b>
        <Select
          isClearable
          placeholder="Add client"
          className="select"
          options={options.filter((op) => !op.selected)}
          value={selectedItemId}
          onChange={(toAdd) => {
            setSelectedItemId(toAdd.value);
            handleSelect(toAdd.value);
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "green",
            },
          })}
        />
      </span>
      {participants.map((el, i) => (
        <div className="list-wrapper">
          {el.selected ? (
            <span className="par-span">
              <img className="face" src={el.img} alt="" />
              <b>{el.label}</b>
              <button
                id={el.checked ? "checked" : "checkedIn"}
                key={el.id}
                className="check-btn"
                onClick={() => {
                  handleCheck(el.id);
                }}
              >
                {el.checked ? "Checked" : "Check In"}
              </button>
              <BsWhatsapp style={{ color: "green" }} />
              <BsTrash
                style={{ color: "red" }}
                onClick={() => {
                  handleRemovale(el.id);
                }}
              />
            </span>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Participants;
