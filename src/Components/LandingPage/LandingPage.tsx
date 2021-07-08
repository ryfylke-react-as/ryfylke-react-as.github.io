import React, { useState, useRef } from "react";
import {
  Button,
  Form,
  InlineLoading,
  Loading,
  Modal,
  OverflowMenuItem,
  TextArea,
  TextInput,
} from "carbon-components-react";
import { Email32, UserRole32 } from "@carbon/icons-react";
import { SubHeader } from "../SubHeader/SubHeader";
import { Expertice } from "../Expertice/Expertice";
import { Tooltip } from "carbon-components-react/lib/components/Tooltip/Tooltip";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OverflowMenu } from "carbon-components-react/lib/components/OverflowMenu/OverflowMenu";
import { useMouseMove } from "../../hooks/useMouseMove";
import "./LandingPage.scss";
import styled from "styled-components";

export function LandingPage() {
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  const [onMouseMove, styles] = useMouseMove(contactButtonRef);
  const [contactFailed, setContactFailed] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({
    reply_to: false,
    message: false,
    name: false,
  });
  const [formState, setFormState] = useState({
    name: "",
    reply_to: "",
    message: "",
  });
  const createFormProps = (key: keyof typeof formState) => ({
    value: formState[key],
    onChange: (e: any) =>
      setFormState({ ...formState, [key]: e?.target?.value }),
    id: key,
    invalid: formErrors[key],
  });

  return (
    <div className="LandingPage">
      <ToastContainer position="top-center" />
      <header>
        <h1>
          Ryfylke React AS <p>Frontend konsulent-firma</p>
        </h1>
        <nav>
          <OverflowMenu className="of-menu" flipped>
            <OverflowMenuItem
              itemText="Kontakt oss"
              onClick={() => setModalOpen(true)}
            />
          </OverflowMenu>
          <Tooltip
            showIcon={false}
            align="end"
            triggerText={
              <Button id="konsulenter" kind="secondary" renderIcon={UserRole32}>
                Konsulenter
              </Button>
            }
          >
            <ul>
              <li>
                <Button
                  size="field"
                  kind="secondary"
                  href="https://haakon.dev"
                  target="_blank"
                >
                  Håkon S. Underbakke
                </Button>
              </li>
            </ul>
          </Tooltip>

          <Button renderIcon={Email32} onClick={() => setModalOpen(true)}>
            Kontakt oss
          </Button>
          <Modal
            open={modalOpen}
            size="sm"
            onRequestClose={() => setModalOpen(false)}
            onRequestSubmit={() => {
              setFormErrors({ name: false, reply_to: false, message: false });
              if (contactFailed) {
                document.location.href = `mailto:hakon@ryfylke.dev?body=${formState.message}`;
                return;
              }
              let newFormErrors: {
                [key: string]: boolean;
              } = { reply_to: false, message: false };
              if (!formState.reply_to) {
                newFormErrors.reply_to = true;
              }
              if (!formState.message) {
                newFormErrors.message = true;
              }
              if (
                Object.keys(newFormErrors).every(
                  (key) => (newFormErrors[key] as boolean) === false
                )
              ) {
                setFormLoading(true);
                axios
                  .post(
                    "https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
                    formState
                  )
                  .then(() => {
                    setModalOpen(false);
                    toast("Meldingen ble levert!", { type: "success" });
                  })
                  .catch((err) => {
                    toast("Klarte ikke å sende melding...", {
                      type: "error",
                      autoClose: 2000,
                    });
                    toast(
                      "Trykk igjen for å sende mail fra din e-post klient",
                      {
                        type: "info",
                        autoClose: 7000,
                      }
                    );
                    setContactFailed(true);
                    const submitButton: HTMLButtonElement | null =
                      document.querySelector(
                        ".bx--modal-footer button.bx--btn--primary"
                      );
                    if (submitButton) {
                      submitButton.focus();
                    }
                    console.error(err);
                  })
                  .finally(() => {
                    setFormLoading(false);
                  });
              } else {
                setFormErrors(newFormErrors as typeof formErrors);
              }
            }}
            modalHeading="Kontakt oss"
            primaryButtonText={contactFailed ? "Send e-post" : "Send melding"}
            secondaryButtonText="Avbryt"
            hasForm
          >
            <Form>
              <TextInput {...createFormProps("name")} labelText="Ditt navn" />
              <TextInput
                {...createFormProps("reply_to")}
                type="email"
                labelText="E-post addresse"
                invalidText="Obligatorisk felt"
              />
              <TextArea
                {...createFormProps("message")}
                labelText="Melding"
                invalidText="Obligatorisk felt"
              />
              {formLoading && <Loading active />}
            </Form>
          </Modal>
        </nav>
      </header>
      <main>
        <SubHeader />
        <Expertice />
      </main>
      <footer>
        <p>La oss ta en prat om hva vi kan gjøre for deg og din bedrift.</p>
        <div className="flex">
          <ContactButton
            kind="primary"
            onClick={() => setModalOpen(true)}
            style={styles}
            ref={contactButtonRef}
            onMouseMove={onMouseMove}
          >
            Send oss en melding
          </ContactButton>
          <p>
            (<a href="tel:98494271">+47 984 94 271</a>)
          </p>
        </div>
      </footer>
    </div>
  );
}

const ContactButton = styled(Button)`
  position: relative;
  overflow: hidden;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: calc(var(--y) * 1px);
    left: calc(var(--x) * 1px);
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    box-shadow: 0px 0px 20px #fff;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 50%;
  }
  &:hover::after {
    opacity: 0.2;
  }
`;

export default LandingPage;
