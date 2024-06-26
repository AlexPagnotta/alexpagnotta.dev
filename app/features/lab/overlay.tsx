"use client";

import { cx } from "class-variance-authority";
import { type Variants, motion, type Transition } from "framer-motion";
import { useState } from "react";

import { Button } from "../ui/button";
import { Icon } from "../ui/icon/icon-component";
import { BaseLink, Link } from "../ui/link";
import { Text } from "../ui/text";

type Props = {
  title: string;
  excerpt?: string;
  actionLink?: string;
};

const animationTransition: Transition = {
  type: "spring",
  mass: 1,
  stiffness: 180,
  damping: 20,
};

const animationVariants: Variants = {
  open: {
    y: 0,
    transition: {
      ...animationTransition,
    },
  },
  closed: {
    y: "calc((100% - 76px) + var(--card-margin))",
    transition: {
      ...animationTransition,
    },
  },
};

export const LabOverlay = ({ title, excerpt, actionLink }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={cx([
        "absolute inset-0 flex justify-center md:justify-start items-end mx-auto max-w-[128rem]",
        "[--card-margin:20px] md:[--card-margin:32px]",
        "pb-[--card-margin] px-[--card-margin] pointer-events-none overflow-hidden",
      ])}
    >
      <motion.div
        className={cx([
          "relative w-full max-w-[320px] pointer-events-auto p-[--card-spacing]",
          "flex flex-col bg-white text-black rounded-md border-2 border-gray-20",
        ])}
        variants={animationVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex items-center justify-between mb-16">
          <Text size="title-4" asChild>
            <h2>{title}</h2>
          </Text>
          <Button
            variant="primary"
            size="sm"
            iconButton
            id="overlay-toggle"
            aria-label="Close overlay"
            aria-expanded={isOpen}
            aria-controls="overlay-body"
            onClick={() => setIsOpen((_isOpen) => !_isOpen)}
          >
            <Icon name={isOpen ? "minus" : "plus"} />
          </Button>
        </div>

        <div className="flex flex-col gap-32" id="overlay-body" aria-labelledby="overlay-toggle" aria-hidden={!isOpen}>
          <Text size="body-2" asChild>
            <p>{excerpt}</p>
          </Text>

          <div className="flex gap-8-px justify-between">
            <Text size="body-2" weight="regular" asChild>
              <Link href="/" underline arrowIcon tabIndex={!isOpen ? -1 : undefined}>
                Back to home
              </Link>
            </Text>

            <Button variant="secondary" size="md" iconButton aria-label="Open on GitHub" asChild>
              <BaseLink href={actionLink}>
                <Icon name="github" />
              </BaseLink>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
