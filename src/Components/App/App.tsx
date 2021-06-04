import React, { useState } from "react";
import {
  Button,
  Form,
  Modal,
  TextArea,
  TextInput,
} from "carbon-components-react";
import { Email32, UserRole32 } from "@carbon/icons-react";
import { SubHeader } from "../SubHeader/SubHeader";
import { Expertice } from "../Expertice/Expertice";
import "./App.scss";
import { Tooltip } from "carbon-components-react/lib/components/Tooltip/Tooltip";
import axios from "axios";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({
    reply_to: false,
    message: false,
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
  });

  return (
    <div className="App">
      <header>
        <h1>
          Ryfylke React AS <p>Frontend konsulent-firma</p>
        </h1>
        <nav>
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
            onRequestClose={() => setModalOpen(false)}
            onRequestSubmit={() => {
              let newFormErrors: {
                [key: string]: boolean;
              } = { reply_to: false, message: false };
              if (!formState.reply_to) {
                newFormErrors.reply_to = true;
              }
              if (!formState.message) {
                newFormErrors.message = true;
              }
              console.log(newFormErrors);
              if (
                Object.keys(newFormErrors).every(
                  (key) => (newFormErrors[key] as boolean) === false
                )
              ) {
                axios
                  .post(
                    "https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
                    formState
                  )
                  .then(() => {
                    setModalOpen(false);
                  })
                  .catch((err) => {
                    console.error(err);
                    setModalOpen(false);
                  });
              } else {
                setFormErrors(newFormErrors as typeof formErrors);
              }
            }}
            modalHeading="Kontakt oss"
            primaryButtonText="Send melding"
            secondaryButtonText="Avbryt"
            hasForm
          >
            <Form>
              <TextInput {...createFormProps("name")} labelText="Ditt navn" />
              <TextInput
                {...createFormProps("reply_to")}
                type="email"
                labelText="E-post addresse"
              />
              <TextArea {...createFormProps("message")} labelText="Melding" />
            </Form>
          </Modal>
        </nav>
      </header>
      <main>
        <SubHeader />
        <Expertice />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
