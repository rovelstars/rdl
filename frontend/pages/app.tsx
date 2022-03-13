import React, { useState, useEffect, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Dock from "../components/Dock";
import Sidebar from "../components/Sidebar";
import BotCard from "../components/BotCard";
import List from "../components/BotCardList";

import { twgen } from "tailwind-gen";
import "../twgen/addons";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()

export default function Index() {
  return (
    <>
      <Navbar />
      <Sidebar></Sidebar>
      <Welcome un="Ren Hiyama"></Welcome>
      <List>
        <BotCard name="Ren Hiyama"
          short="Hi, I'm Ren Hiyama"
          avatar="/img/face.png"
          link="/"
          bg="/img/wp.png"></BotCard>
        <BotCard name="Ren Hiyama 2"
          short="Hi, I'm Ren Hiyama"
          avatar="/img/face.png"
          link="/"
          bg="/img/wp.png"></BotCard>
          <BotCard name="Ren Hiyama 3"
          short="Hi, I'm Ren Hiyama"
          avatar="/img/face.png"
          link="/"
          bg="/img/wp.png"></BotCard>
      </List>
      <h3 className={twgen.tw("hmm-2")}>Hello!</h3>
      <Dock />
    </>
  );
}
