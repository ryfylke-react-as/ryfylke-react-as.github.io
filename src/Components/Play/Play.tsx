import { TextInput, CopyButton, AspectRatio } from "carbon-components-react";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

type Props = {};

type Opts = {
  autoplay?: string;
  width?: string;
  height?: string;
  controls?: string;
  loop?: string;
  title?: string;
};

export const PlayPage = ({}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const filepath = history.location.pathname.split("/").slice(2).join("/");
  const opts: Opts = Object.fromEntries(
    new URLSearchParams(history.location.search).entries()
  );

  useEffect(() => {
    if (opts.title) {
      document.title = opts.title + " - Ryfylke React AS";
    }
  }, [opts]);

  return (
    <Container>
      <div>
        {opts.title && <h1>{opts.title}</h1>}
        <AspectRatio ratio="16x9">
          <video
            src={filepath}
            width={opts.width ?? "100%"}
            height={opts.height ?? "100%"}
            autoPlay={opts.autoplay === "false" ? false : true}
            controls={opts.controls === "false" ? false : true}
            loop={opts.loop === "true" ? true : false}
          ></video>
        </AspectRatio>
        <CopyInput>
          <TextInput
            value={window.location.href}
            labelText=" "
            id="share"
            ref={inputRef}
          ></TextInput>
          <CopyButton
            feedback="Kopiert!"
            onClick={() => {
              if (inputRef?.current) {
                inputRef.current.select();
                document.execCommand("copy");
              }
            }}
          />
        </CopyInput>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  video {
    border: none;
  }
  input {
    background: #222;
    color: #ccc;
  }
  .bx--copy-btn {
    background: none;
    margin-top: -8px;
    &:hover  {
      box-shadow: 1px 1px 6px -3px #000;
    }
    svg {
      fill: #ccc;
    }
  }
  h1 {
    color: #ccc;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const CopyInput = styled.div`
  display: flex;
  align-items: center;
`;

export default PlayPage;
