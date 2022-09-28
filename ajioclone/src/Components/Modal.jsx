import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import "./index.css";
function BasicUsage() {
  let modelData = [
    {
      title: "SHOP WOMEN",
      src: "https://assets.ajio.com/medias/sys_master/images/images/h83/hbd/10412172673054/women-first-pop-up-screen.jpg",
    },
    {
      title: "SHOP MEN",
      src: "https://assets.ajio.com/medias/sys_master/images/images/h55/h6c/10412175196190/menfirstpopupscreen.jpg",
    },
    {
      title: "SHOP KIDS",
      src: "https://assets.ajio.com/medias/sys_master/images/images/h9b/h59/10468934254622/kids-first-pop-up-screen.jpg",
    },
    {
      title: "SHOP SALE",
      src: "https://assets.ajio.com/medias/sys_master/images/images/ha3/hd7/13007045623838/Sale-firstview-Tile-may-06-2019.jpg",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen} className="open-modal-bottom">
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={onClose} id="mymodal">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
                Who do you want to shop for?
              </h1>
            </div>
            <div className="modelContainer">
              {modelData.map((item) => {
                return (
                  <div>
                    <h1>{item.title}</h1>
                    <div style={{ marginTop: "50px" }}>
                      <img src={item.src} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </ModalBody>

          <ModalFooter>
            <button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
