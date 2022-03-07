import React, { useState, useEffect, Fragment } from "react";
import { useTranslation, withTranslation } from "react-i18next";

import { Dialog, Transition } from "@headlessui/react";
import Navbar from "~/components/Navbar";
import Welcome from "~/components/Welcome";
import Dock from "~/components/Dock";
import Sidebar from "~/components/Sidebar";
import ApiTest from "~/components/ApiTest";
function Index() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Navbar />
      <Sidebar></Sidebar>
      <div>
        <Welcome un="Ren Hiyama"></Welcome>
        <ApiTest></ApiTest>
      </div>
      <Dock />
    </div>
  );
}

export default withTranslation()(Index);
