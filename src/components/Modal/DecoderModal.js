"use client"
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { TextAreaWithLabel } from "../TextArea";
import { Button } from "../Button/button";
import { decoderCryptoJs, encoderCryptoJs } from "../helper";

export function DecoderModal({
  btnChildren,
  method = "AES",
  decoder,
}) {
  const [size, setSize] = React.useState(null);
  const [userWantData, setUserWantData] = React.useState(null);
  const [userWantKey, setUserWantKey] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const handleOpen = (value) => setSize(value);

  return (
    <>
      <TextAreaWithLabel placeholder={
        decoder ? "Your message to decode" : "Your message to encode"
      } id={"decoded"} label={decoder ? "Your message to decode" : "Your message to encode"}
        rows={10}
        className={'w-full'}
        onChange={(e) => {
          setUserWantData(e.target.value)
        }}
          />
      <TextAreaWithLabel placeholder="Key" id={"key"} label={"Your key"}
        className={'w-full'}
        onChange={(e) => {
          setUserWantKey(e.target.value)
        }}
      />

      <Button
        colorScheme={decoder ? "red" : "green"}
        onClick={() => {
          if (decoder) {
            try {
              setResult(decoderCryptoJs(userWantData, userWantKey, method))
            }
            catch (error) {
              setResult(error)
            }
          }
          else {
            try {
              setResult(encoderCryptoJs(userWantData, userWantKey, method))
            }
            catch (error) {
              setResult(error)
            }
          }
          handleOpen("xl")
        }}
        className="mr-1"
      >{
          btnChildren ? btnChildren : decoder ? "Decode" : "Encode"
        }
        </Button>
      <Dialog handler={() => handleOpen(null)}
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
      >
        <DialogHeader>
          Your message has been {
            decoder ? "decoded" : "encoded"
          }
        </DialogHeader>
        <DialogBody divider>
          <Typography
            className="break-words"
          >
          {
            result?.toString()
          }
          </Typography>
        </DialogBody>
        <DialogFooter>

          <Button variant="gradient" color="green" onClick={() => handleOpen(null)}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
