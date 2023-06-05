"use client";
import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({songs}) => {
    const AuthModal = useAuthModal();
    const uploadModal = useUploadModal();
    const {user} = useUser();
  const onClick = () => {
    if (!user) {
        return AuthModal.onOpen();
      }
      // sub check
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26}/>
          <p className="text-neutral-400 font-medium text-md">Vos playlists</p>
        </div>
        <AiOutlinePlus onClick= {onClick}  className="text-neutral-400 cursor-pointer hover:text-white transition" size={20}/>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
            <MediaItem onclick={()=>{}} key={item.id} data={item}/>
        ))}
      </div>
    </div>
  );
};

export default Library;
