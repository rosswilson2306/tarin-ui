"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Form,
  Input,
} from "@heroui/react";

export default function AddSiteModalButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="w-full" color="primary" onPress={onOpen}>
        Add Site
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a new site
              </ModalHeader>
              <ModalBody>
                <Form>
                  <Input
                    isRequired
                    errorMessage="Please enter a valid URL beginning `https://`"
                    label="Domain"
                    labelPlacement="outside"
                    name="domain"
                    placeholder="Enter your URL"
                    type="text"
                  />
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
