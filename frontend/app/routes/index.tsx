import React, { useState, useEffect, Fragment } from "react";
import { useTranslation, withTranslation } from "react-i18next";

import { Dialog, Transition } from "@headlessui/react";
import Navbar from "~/components/Navbar";
import Welcome from "~/components/Welcome";
import Dock from "~/components/Dock";
function Index() {
  const { t, i18n } = useTranslation();
  return (
    <div className="h-screen bg-gradient-to-t from-white-text to-rain dark:from-scary-dark dark:to-bg">
      <Navbar />
      <div>
        <Welcome un="Ren Hiyama"></Welcome>
      </div>
      <Dock />
    </div>
  );
}

export default withTranslation()(Index);
