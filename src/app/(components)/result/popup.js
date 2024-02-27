import React from "react";
import Modal from "react-modal";

const Popup = ({ isOpen, onRequestClose, gameId }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Game Details"
      ariaHideApp={false}
    >
      {/* Widget container */}
      <div id="wg-api-football-game"
    data-host="api-football-v1.p.rapidapi.com"
    data-key="57ecac3d4emsh948fcf9454c587bp1e1337jsn6a8c4464d25c"
    data-id={gameId}
    data-theme="grey"
    data-refresh="15"
    data-show-errors="false"
    data-show-logos="true">
</div>
    </Modal>
  );
};

export default Popup;