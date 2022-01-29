import React, { useState } from "react";
import { Link} from "remix";;

import metascraper from "metascraper";
import metascraperDescription from "metascraper-description";
import metascraperImage from "metascraper-image";
import metascraperTitle from "metascraper-title";

const ms = metascraper([
  metascraperDescription(),
  metascraperImage(),
  metascraperTitle(),
]);

export const LinkPreviewer = (props: {
  href: string;
  children: string | undefined;
  image: string | undefined;
  title: string | undefined;
  text: string | undefined;
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Link
      to={props.href}
      className="relative"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span> {props.children} </span>
      {isShown && (
        <Card image={props.image} title={props.title} text={props.text} />
      )}
    </Link>
  );
};

const Card = (props: {
  image: string | undefined;
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  text:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="w-40 text-black-text dark:text-white-text absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2">
      <img src={props.image} className="w-40" alt="" />
      <div className="card-body">
        <h5 className="text-lg">{props.title}</h5>
        <p className="text-sm">{props.text}</p>
      </div>
    </div>
  );
};
