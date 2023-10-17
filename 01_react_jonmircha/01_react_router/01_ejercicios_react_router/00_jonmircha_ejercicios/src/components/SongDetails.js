import React from "react";
import { SongArtist } from "./SongArtist";
import { SongLyric } from "./SongLyric";
import { Message } from "./Message";

export const SongDetails = ({ bio, lyric, search }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.name === "AbortError" || lyric.err || !lyric ? (
        <Message msg={'"<em>Error de API</em>"'} bgColor={"#dc3545"} />
      ) : (
        <SongLyric />
      )}
      <Message msg={'"<em>Error de API</em>"'} bgColor={"#dc3545"} />

      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message msg={'"Error de API"'} bgColor={"#dc3545"} />
      )}
      <Message msg={'"<em>Error de API</em>"'} bgColor={"#dc3545"} />
    </>
  );
};
