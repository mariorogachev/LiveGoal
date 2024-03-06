"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function Component() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="text-black" onClick={() => setOpenModal(true)}>
        Toggle modal
      </Button>
      <Modal
        className="w-1/2 mx-auto bg-transparents"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div
            id="wg-api-football-game"
            data-host="api-football-v1.p.rapidapi.com"
            data-key="57ecac3d4emsh948fcf9454c587bp1e1337jsn6a8c4464d25c"
            data-id="1158556"
            data-theme="default"
            data-refresh="15"
            data-show-errors="false"
            data-show-logos="true"
          ></div>
          <script
            type="module"
            src="https://widgets.api-sports.io/2.0.3/widgets.js"
          ></script>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="text-black mx-4"
            onClick={() => setOpenModal(false)}
          >
            I accept
          </Button>
          <Button className="text-gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Component;
