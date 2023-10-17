import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { SongDetails } from "./SongDetails";
import { SongForm } from "./SongForm";
import { helpHttp } from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setlyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    //Ojo con el casi antipatron del asincronismo
    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
        songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`,
        api = helpHttp();

      // console.log(artistUrl, songUrl);

      setLoading(true);
      const { artistRes, songRes } = await Promise.all([
        await api.get(artistUrl),
        await api.get(songUrl),
      ]);
      console.log(artistRes, songRes);

      setBio(artistRes);
      setlyric(songRes);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      <h3>NO FUNCIONAL, no ver xd</h3>
      <SongForm handleSearch={handleSearch} />
      {!loading && <SongDetails search={search} lyric={lyric} bio={bio} />}
      {loading && <Loader />}
    </div>
  );
};
